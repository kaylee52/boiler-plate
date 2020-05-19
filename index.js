const express = require("express")
const app = express()
const port = 5000

const { User } = require("./models/User");
const bodyParser = require('body-parser');

const config = require('./config/key');

//bodyParser에 옵션을 준다
//bodyParser는 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 해주는 것이니까 
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// applicaiton/json 
app.use(bodyParser.json());
//이런 타입으로 된 것을 분석해서 가져오도록 해 주는 것.

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))





app.get("/", (req, res) => res.send("Hello World!~~~~wowowowowow!!"))

app.post('/register', (req, res) => { //endpoint:register, callback func:(req,res)
    //회원가입할 때 필요한 정보들을 client에서 가져오면 
    //이것을 DB에 넣어준다 
    //1. 모델(User)를 가져옴 -- 5라인에 변수 만들고 가져옴 
    //2. body-parser 다운받은 것을 가져옴 -- 6라인~
    const user = new User(req.body)
    
    user.save((err, doc) => {
        if(err) return res.json({ success: false, err })
        return res.status(200).json({ success: true }) //성공:200
    })
}) 

app.listen(port, () => console.log(`Example app listening on port ${port}!"`))