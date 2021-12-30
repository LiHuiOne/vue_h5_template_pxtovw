import axios from './config/axios_config.js'

function getUserInfo(params) {
    return axios({
        url:'/service/user/save',
        method:"get",
        params
    })
}

export default{
    getUserInfo
}

