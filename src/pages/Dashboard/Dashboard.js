import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import ReactFrappeChart from "react-frappe-charts";
import { API, config, setAuthToken } from '../../config/API';
import Table from '../../components/Table/Table';
import { useHistory } from 'react-router-dom';
const Dashboard = () => {
  const [cookies,removeCookie] = useCookies(['token']);
  const [dataTable,setDataTable] = useState()
  const [chart,setChart] = useState()
  const history = useHistory()
  useEffect(()=>{
    if(cookies.token){
      setAuthToken(cookies.token)
    }
    API.get("/ruas?per_page=5&page=1",config)
    .then((res)=>{
      setDataTable(res.data.data)
      setChart(()=>{
        return(
          <div className='grid grid-cols-3 h-10/12'>
         <div className='col-span-2'>
              <ReactFrappeChart
                type="bar"
                colors={["#21ba45"]}
                axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
                height={250}
                data={{
                  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                  datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }],
                }}
              />
          </div>
          <div>
          <ReactFrappeChart
                type="pie"
                colors={["#21ba45"]}
                // axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
                // height={300}
                data={{
                  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                  datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }],
                }}
              />
          </div> 
      </div>
        )
      })
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
      {chart}
      {dataTable ?<div className='mt-10 w-12/12 overflow-x-auto'>
          <Table 
          data={{
              header:[
                {"name":"No","data":["index"],"type":"text"},
                {"name" :"Ruas","data":["ruas_name"],"type":"text"},
                {"name":"Lokasi","data":["km_awal","km_akhir"],"type":"text"},
                {"name":"Foto","data":["photo_url"],"type":"button"},
                {"name" : "Document","data":["doc_url"],"type":"button"},
                {"name":"Unit Kerja","data":["unit_id"],"type":"text"},
                {"name":"Status","data":["status"],"type":"text"}
              ],
              body : dataTable
        }}/>
      </div>:<div>Loading</div>}
    </div>
  )
}

export default Dashboard