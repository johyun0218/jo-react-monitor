const express = require('express');
//var request = require('request');
const request = require('request-promise-native')
const router = express.Router();

let server_fix = 'https://dev-static-online-mall.s3.ap-northeast-2.amazonaws.com/test/inspection';

let servers = {
    "batch": "ip-10-12-30-72.ap-northeast-2.compute.internal",
    "bo-a": "ip-10-12-43-8.ap-northeast-2.compute.internal",
    "bo-c": "ip-10-12-43-136.ap-northeast-2.compute.internal",
    "fomo-dx-a": "ip-10-12-37-4.ap-northeast-2.compute.internal",
    "fomo-dx-c": "ip-10-12-37-170.ap-northeast-2.compute.internal",
    "fomo-mlb-a": "ip-10-12-47-115.ap-northeast-2.compute.internal",
    "fomo-mlb-c": "ip-10-12-47-248.ap-northeast-2.compute.internal",
    "fomo-sa-a": "ip-10-12-49-55.ap-northeast-2.compute.internal",
    "fomo-sa-c": "ip-10-12-49-144.ap-northeast-2.compute.internal",
    "fopc-dx-a": "ip-10-12-35-102.ap-northeast-2.compute.internal",
    "fopc-dx-c": "ip-10-12-35-137.ap-northeast-2.compute.internal",
    "fopc-mlb-a": "ip-10-12-45-54.ap-northeast-2.compute.internal",
    "fopc-mlb-c": "ip-10-12-45-226.ap-northeast-2.compute.internal",
    "fopc-sa-a": "ip-10-12-48-70.ap-northeast-2.compute.internal",
    "fopc-sa-c": "ip-10-12-48-186.ap-northeast-2.compute.internal"
}

router.get('/', function(req, res) {
    res.send({ greeting: 'Hello React x Node.js!!'});
});
router.get('/group', (req, res)=>res.json({username:'dev group. jo'}));


async function getList() {
    var list = [];
    for(let s in servers) {        
        try {
            var result = await getRequest(servers[s]);
            result.server = s;
            list.push(result);
        } catch(e) {
            list.push({server: s, error: e.statusCode});
        }
    }
    return list;
    
}

async function getRequest(filename) {

    let option = {uri: `${server_fix}/${filename}.log`, timeout: 150};

    let body = await request(option)
    
    //console.log(body);
    
    let html = body;
    var result = {};
    //console.log(html)

    let cpuDays = html.match(/up\s(\d+)\sdays/);
    if (cpuDays) {
        cpuDays = parseFloat(cpuDays[1])
    }  else {
        cpuDays = 0;
    }
    result.cpuDays = cpuDays;

    let cpuPer = parseFloat(html.match(/CPU:([0-9\.]+)%/)[1]);
    result.cpuPer = cpuPer;

    let disk = parseFloat(html.match(/DISK:([0-9\.]+)\sGB/)[1]);
    result.disk = disk;

    let diskPer = parseFloat(html.match(/DISK PER:\s([0-9\.]+)\s%/)[1]);
    result.diskPer = diskPer;

    let memTot = parseFloat(html.match(/MemTotal:\s+([0-9]+)\skB/)[1]);
    result.memTot = memTot;

    let memFree = parseFloat(html.match(/MemFree:\s+([0-9]+)\skB/)[1]);
    result.memFree = memFree;

    let memAvailable = parseFloat(html.match(/MemAvailable:\s+([0-9]+)\skB/)[1]);
    result.memAvailable = memAvailable;        

    let memPer = (memTot - memAvailable) / memTot * 100
    result.memPer = memPer;
    return result;
}

router.get('/server', async (req, res) => {


    
    //console.log(filename);
    let result = await getList();
    res.json(result);

});

module.exports = router;