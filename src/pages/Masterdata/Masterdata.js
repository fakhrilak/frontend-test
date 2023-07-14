import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { API, config, setAuthToken } from '../../config/API';
import Table from '../../components/Table/Table';
import { useHistory } from 'react-router-dom';
const Masterdata = () => {
    const [cookies, removeCookie] = useCookies(['token']);
    const [dataTable,setDataTable] = useState()
    const history = useHistory()
    useEffect(()=>{
        if(cookies.token){
        setAuthToken(cookies.token)
        }
        API.get("/ruas?per_page=5&page=1",config)
        .then((res)=>{
        setDataTable(res.data.data)
        })
        .catch((err)=>{
        if(err.response.status == 401){
            alert(err.response.data.message)
            removeCookie("token")
            history.push("/login")
        }else{
            alert(err.response.data.message)
        }
        })
    },[])
  return (
    <div>
        {dataTable?<div>
            <Table
            data={{
                header:[
                  {"name":"No","data":["index"],"type":"text"},
                  {"name" :"Ruas","data":["ruas_name"],"type":"text"},
                  {"name":"Lokasi","data":["km_awal","km_akhir"],"type":"text"},
                  {"name":"Foto","data":["photo_url"],"type":"button"},
                  {"name" : "Document","data":["doc_url"],"type":"button"},
                  {"name":"Unit Kerja","data":["unit_id"],"type":"text"},
                  {"name":"Status","data":["status"],"type":"text"},
                  {"name":"Aksi","data":["edit","show","deleted"],"type":"text"}
                ],
                body : dataTable
            }}
            />
        </div>:<p>Loading...</p>}
    </div>
  )
}

export default Masterdata