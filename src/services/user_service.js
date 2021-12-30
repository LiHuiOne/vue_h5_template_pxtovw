import axios from './config/axios_config.js'

function getUserInfo(params) {
    return axios({
        url:'/service/user/save',
        method:"get",
        params
    })
}
function postlogin(data){
    return axios({
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        url:'/service/user/login',
        method:"post",
        data
    })
}
export default{
    getUserInfo,
    postlogin
}

