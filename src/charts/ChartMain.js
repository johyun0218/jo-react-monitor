import React, { useState, useEffect } from 'react';
import LineChart from './LineChart'

function ChartMain() {

    const [chartData, setChartData] = useState({});
    const [servers, setServers] = useState([]);

    function forceUpdate() {
        fetch('api/server')
        .then(res=>res.json())
        .then(list=> {
    
          //data = {date: new Date()}
          var c = {date: new Date()}
          var cpuData = {date: new Date()};
          var memData = {date: new Date()};
          for (var i = 0; i < list.length; i++) {
            var data = list[i];
            //c[data.server] = data.cpuPer || 0;
            //f.push(data.server);
            if (data.error) {
              return;
            }
    
            cpuData[data.server] = data.cpuPer || 0;
            memData[data.server] = data.memPer || 0;
          }
          
          //  setFields(f);
          var data = {
            cpu: cpuData,
            memory: memData
          }
          setChartData(data);
    
          // console.log(Object.keys(cpuData));
          // console.log(Object.keys(memData));
          // console.log(cpuData);
          // console.log(memData);
    
          //setCpu({'a': 1});
          setServers(list)
        });
        
      }

      useEffect(() => {
        //document.title = `You clicked ${count} times`;
        forceUpdate();
        setInterval(() => forceUpdate(), 60000 * 10);     // 10분
      }, []);

    return (
        <div>
            <LineChart id="chart2" data={chartData}></LineChart>

            <table border="1">
        <tbody>
          <tr>
            <th>서버</th>
            <th>서버동작시간</th>
            <th>CPU usage</th>
            <th>메모리 total</th>
            <th>메모리 Avaliale</th>
            <th>메모리 usage</th>
            <th>디스크 사용율</th>
          </tr>
            {servers.map((row, i) => {
                return (
                  <tr key={row.server + '\t'}>
                    <th>{row.server + '\t'}</th>
                    <td>{row.cpuDays + 'd' + '\t'}</td>
                    <td>{row.cpuPer + '%' || '\t'}</td>
                    <td>{row.memTot || '\t'}</td>
                    {/* <td>{row.disk || '\t'}</td> */}
                    {/* <td>{row.memFree || '\t'}</td> */}
                    <td>{row.memAvailable || '\t'}</td>
                    <td>{row.memPer + '%' || '\t'}</td>
                    <td>{row.diskPer + '%' || '\t'}</td>
                  </tr>
                )
            })}
            </tbody>
        </table>
        </div>
    );
};

export default ChartMain;