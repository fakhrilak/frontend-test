import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import ReactFrappeChart from "react-frappe-charts";
import { API } from '../../config/API';
import Table from '../../components/Table/Table';
const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [dataTable,setDataTable] = useState([
    {
        "id": 15,
        "unit_id": 1,
        "ruas_name": "Ruas 3",
        "long": 10,
        "km_awal": "50+000",
        "km_akhir": "60+000",
        "photo_url": "https://storage.googleapis.com/exam-fe-jasamarga/candidate-files/75d46b60-05d1-46cc-8cd4-66464e8fa6f4.png",
        "doc_url": "https://storage.googleapis.com/exam-fe-jasamarga/candidate-files/04524606-a734-4271-8795-9003b1ee6ab3.pdf",
        "status": "0",
        "created_at": "2023-07-12T14:59:10.000000Z",
        "updated_at": "2023-07-12T14:59:10.000000Z"
    },
    {
        "id": 14,
        "unit_id": 2,
        "ruas_name": "Ruas 3",
        "long": 10,
        "km_awal": "50+000",
        "km_akhir": "60+000",
        "photo_url": "https://storage.googleapis.com/exam-fe-jasamarga/candidate-files/0668f434-9927-4383-a7a9-b799274be7ef.png",
        "doc_url": "https://storage.googleapis.com/exam-fe-jasamarga/candidate-files/9d450f31-5243-49a5-b6e9-ad3d23cac841.pdf",
        "status": "0",
        "created_at": "2023-07-12T04:38:35.000000Z",
        "updated_at": "2023-07-12T04:38:35.000000Z"
    },
    {
        "id": 12,
        "unit_id": 2,
        "ruas_name": "Ruas 6",
        "long": 10,
        "km_awal": "50+000",
        "km_akhir": "60+000",
        "photo_url": "https://storage.googleapis.com/exam-fe-jasamarga/candidate-files/ea9421d1-aaf2-4f13-bd93-07878cd26a4a.jpg",
        "doc_url": "https://storage.googleapis.com/exam-fe-jasamarga/candidate-files/d0e9d93f-6424-497a-b4ce-79c066d5d9bf.pdf",
        "status": "0",
        "created_at": "2023-07-07T09:39:21.000000Z",
        "updated_at": "2023-07-07T09:39:21.000000Z"
    },
    {
        "id": 11,
        "unit_id": 2,
        "ruas_name": "Ruas 5",
        "long": 10,
        "km_awal": "50+000",
        "km_akhir": "60+000",
        "photo_url": "https://storage.googleapis.com/exam-fe-jasamarga/candidate-files/2223a508-00a4-40a5-b0ce-887f210ea11b.jpg",
        "doc_url": "https://storage.googleapis.com/exam-fe-jasamarga/candidate-files/e1ecc808-81f1-4a41-a225-b40f7eaed1b3.pdf",
        "status": "0",
        "created_at": "2023-07-07T09:39:18.000000Z",
        "updated_at": "2023-07-07T09:39:18.000000Z"
    },
    {
        "id": 10,
        "unit_id": 2,
        "ruas_name": "Ruas 4",
        "long": 10,
        "km_awal": "50+000",
        "km_akhir": "60+000",
        "photo_url": "https://storage.googleapis.com/exam-fe-jasamarga/candidate-files/83533313-169a-4508-b9a4-c9df824f01d7.jpg",
        "doc_url": "https://storage.googleapis.com/exam-fe-jasamarga/candidate-files/bb06492f-0f95-4f96-9669-1a4e16e40018.pdf",
        "status": "0",
        "created_at": "2023-07-07T09:39:15.000000Z",
        "updated_at": "2023-07-07T09:39:15.000000Z"
    }
]) 
  useEffect(()=>{
    // API.get()

  },[])
  return (
    <div>
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
      <div className='mt-10 w-12/12 overflow-x-auto'>
          <Table 
          data={{
              header:[
                {"name":"No","data":["id"],"type":"text"},
                {"name" :"Ruas","data":["ruas_name"],"type":"text"},
                {"name":"Lokasi","data":["km_awal","km_akhir"],"type":"text"},
                {"name":"Foto","data":["photo_url"],"type":"button"},
                {"name" : "Document","data":["doc_url"],"type":"button"},
                {"name":"Unit Kerja","data":["unit_id"],"type":"text"},
                {"name":"Status","data":["status"],"type":"text"}
              ],
              body : dataTable
        }}/>
      </div>
    </div>
  )
}

export default Home