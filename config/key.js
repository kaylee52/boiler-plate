//process.env.NODE_ENV : 환경변수 
if(process.env.NODE_ENV === 'production') { //production모드면 
    module.exports = require('./prod'); //prod.js에서 가져옴 
} else {
    module.exports = require('./dev');
}