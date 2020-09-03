import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './c3.css';
import ContentList from './ContentList'
import ChartCpu from './charts/cpu'
import RTChart from 'react-rt-chart';
import { debug } from 'request-promise-native';


function App() {
  //const [count, setCount] = useState(0);
  //const [fields, setFields] = useState([]);
  const [memory, setMemory] = useState({});
  const [cpu, setCpu] = useState({});
  const [servers, setServers] = useState([]);

  

  function forceUpdate() {
    fetch('api/server')
    .then(res=>res.json())
    .then(list=> {

      //data = {date: new Date()}
      var c = {date: new Date()}
      var cpuData = {date: new Date()};
      var memData = {date: new Date()};
      var f = [];
      for (var i = 0; i < list.length; i++) {
        var data = list[i];
        //c[data.server] = data.cpuPer || 0;
        //f.push(data.server);

        cpuData[data.server] = data.cpuPer || 0;
        memData[data.server] = data.memPer || 0;
      }
      //console.log(cpuData);
      //  setFields(f);
      setCpu(cpuData);
      setMemory(memData)
      //setCpu({'a': 1});
      setServers(list)
    });
    
  }

  function chartUpdate() {
    
  }

  // useEffect(() => {
  //   setInterval(() => chartUpdate(), 1000);
  // })

  

  useEffect(() => {
    //document.title = `You clicked ${count} times`;
    forceUpdate();
    setInterval(() => forceUpdate(), 10000);    
  }, []);
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">

        <ChartCpu data={cpu}></ChartCpu>
        <ChartCpu data={memory}></ChartCpu>
        

      {/* <RTChart
            fields={['prd-was-batch', 'prd-was-bo-a']}
            data={cpu}
             /> */}

        <table border="1">
        <tbody>
            {servers.map((row, i) => {
                return (
                  <tr key={row.server + '\t'}>
                    <th>{row.server + '\t'}</th>
                    <td>{row.cpuPer || '\t'}</td>
                    <td>{row.disk || '\t'}</td>
                    <td>{row.diskPer || '\t'}</td>
                    <td>{row.memTot || '\t'}</td>
                    <td>{row.memFree || '\t'}</td>
                    <td>{row.memAvailable || '\t'}</td>
                    <td>{row.memPer || '\t'}</td>
                  </tr>
                )
            })}
            </tbody>
        </table>

      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
