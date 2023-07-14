import React, { useState } from "react"
export const Halper=(props)=>{
    if(props.data.type == "text"){
        let result=""
        for(let a=0;a<props.data.data.length;a++){
            
            if(props.data.name == "Lokasi"){
                if (a>0){
                    result+=" s/d "
                }
                result+=props.object[props.data.data[a]]
            }else if(props.data.name === "Status"){
                result+=props.object[props.data.data[a]] == "0"? "Tidak Aktif":"Aktif"
            }else if(props.data.name === "Unit Kerja"){
                result+=`Unit Kerja ${props.object[props.data.data[a]]}`
            }else{
                result+=props.object[props.data.data[a]]
            }
           
            // console.log(object[data.data[a]])
        }
        // console.log(data,object)
        return <p>{result}</p>
    }
    else if(props.data.type == "button"){
        let result = ""
        for(let a=0;a<props.data.data.length;a++){
            result+=props.object[props.data.data[a]]
            // console.log(object[data.data[a]])
        }
        return <button
        className="bg-gray-300 w-20 text-gray-900 rounded"
        onClick={()=>{
            props.setShow(!props.Show)
            console.log(props.Show)}}
        >Show</button>
    }
    
}