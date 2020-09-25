import React from 'react';
import RTChart from 'react-rt-chart';

// function getRandomValue() {
//     var RandVal = Math.floor(Math.random()*(100-0+1)) + 0;
//     return RandVal;
// }

// function getRandomValue2() {
//     var RandVal = Math.floor(Math.random()*(100-0+1)) + 0;
//     return RandVal;
// }


function LineChart(props) {
    // var data = {
    //     date: new Date(),
    //     Car: getRandomValue(),
    //     Bus: getRandomValue2()
    //   };

      var chart = {
        axis: {
            y: { min: 5, max: 30 }
        },
        point: {
            show: true
        }
    }

    var chart2 = {
        axis: {
            y: { min: 20, max: 100 }
        },
        point: {
            show: true
        }
    }
    return (
        <div>
        <RTChart
            chart={chart}
            fields={['batch', 'bo-a', 'bo-c', 'fomo-dx-a', 'fomo-dx-c', 'fomo-mlb-a', 'fomo-mlb-c', 'fomo-sa-a', 'fomo-sa-c', 'fopc-dx-a', 'fopc-dx-c', 'fopc-mlb-a', 'fopc-mlb-c', 'fopc-sa-a', 'fopc-sa-c', 'fopc-dv-a', 'fopc-dv-c', 'fomo-dv-a', 'fomo-dv-c']}
            data={props.data.cpu} />

        <RTChart
            chart={chart2}
            fields={['batch', 'bo-a', 'bo-c', 'fomo-dx-a', 'fomo-dx-c', 'fomo-mlb-a', 'fomo-mlb-c', 'fomo-sa-a', 'fomo-sa-c', 'fopc-dx-a', 'fopc-dx-c', 'fopc-mlb-a', 'fopc-mlb-c', 'fopc-sa-a', 'fopc-sa-c', 'fopc-dv-a', 'fopc-dv-c', 'fomo-dv-a', 'fomo-dv-c']}
            data={props.data.memory} />

        </div>
    )
}

export default LineChart;