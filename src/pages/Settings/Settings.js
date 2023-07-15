import React, { useEffect } from 'react'
import { dataSettings } from './dataSettings'
import { mappingFunction } from '../../halper/mappingfungtion'
import { setAuthToken } from '../../config/API'
import { useCookies } from 'react-cookie'

const Settings = (props) => {
    const [cookies] = useCookies(['token']);
    useEffect(()=>{
        if(cookies.token){
        setAuthToken(cookies.token)
        }
    },[])
  return (
    <div className='w-11/12 m-auto grid grid-cols-4 gap-3'>{dataSettings.map((data,index)=>(
        <div
        key={index}
        onClick={()=>{
            for(let i in mappingFunction){
                if(data.action == mappingFunction[i]["name"]){
                    return mappingFunction[i]["func"](props)
                }
            }

        }}
        >
            {data.xml}
        </div>
    ))}
    </div>
  )
}

export default Settings