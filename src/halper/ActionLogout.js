import { API, config } from "../config/API"
import { getCoocies,removeCoocies } from "./coocies"

export const ActionLogout=(props)=>{
    const password = getCoocies("password")
    const username = getCoocies("username")
    API.post("/logout",{username:username,password:password},config)
    .then((res)=>{
        removeCoocies("username")
        removeCoocies("password")
        removeCoocies("token")
        window.location.reload("/")
    })
    .catch((err)=>{
        alert(err.response.data.message)
    })
}

export const ActionAlert=(props)=>{
    alert(" This is ACTION ALERT")
}