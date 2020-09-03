import React from 'react';
import RTChart from 'react-rt-chart';

function getRandomValue() {
    var RandVal = Math.floor(Math.random()*(100-0+1)) + 0;
    return RandVal;
}

function getRandomValue2() {
    var RandVal = Math.floor(Math.random()*(100-0+1)) + 0;
    return RandVal;
}


function ChartCpu(props) {
    // var data = {
    //     date: new Date(),
    //     Car: getRandomValue(),
    //     Bus: getRandomValue2()
    //   };

      var chart = {
        axis: {
            y: { min: 1, max: 100 }
        },
        point: {
            show: true
        }
    }

    return (
        <RTChart
            chart={chart}
            fields={['batch', 'bo-a', 'bo-c', 'fomo-dx-a', 'fomo-dx-c', 'fomo-mlb-a', 'fomo-mlb-c', 'fomo-sa-a', 'fomo-sa-c', 'fopc-dx-a', 'fopc-dx-c', 'fopc-mlb-a', 'fopc-mlb-c', 'fopc-sa-a', 'fopc-sa-c']}
            data={props.data} />
    )
}

export default ChartCpu;