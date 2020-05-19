const mongoose = require('mongoose'); // mongoose를 가져온다

// mongoose를 이용해 스키마 생성 
const userSchema = mongoose.Schema({

    // 하나하나 필드 작성 
    name : {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //space없애주는 역할 
        unique: 1 //email이니까 유니크하게 
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //관리자1/일반유저0
        type: Number,
        default: 0 
    },
    image: String,
    token: { //유효성 등 관리 
        type: String
    },
    tokenExp: { //토큰 사용 유효기간 
        type: Number
    }
})

// 스키마를 모델로 감싸준다 
const User = mongoose.model('User', userSchema)

// 이 모델을 다른 파일에서도 쓸 수 있도록 
module.exports = { User }