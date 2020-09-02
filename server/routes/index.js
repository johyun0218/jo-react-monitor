var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send({ greeting: 'Hello React x Node.js!!'});
});
router.get('/group', (req, res)=>res.json({username:'dev group. jo'}));

module.exports = router;