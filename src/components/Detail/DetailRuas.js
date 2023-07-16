import React, { useEffect, useState } from 'react'
import { detaildata } from './detailPageData'
import FormItem from '../Form/FormItem'
import { API, config } from '../../config/API'


const DetailRuas = (props) => {
    const [detailItem,setDetailItem] = useState(props.data)
    const  [triger,setTriger] = useState(false)
    const [newItem, setNewItem] = useState();
    useEffect(()=>{
        let mapping = detaildata
        for(let i in mapping){
            mapping[i]["value"] = detailItem[mapping[i]["name"]]
        }
        setNewItem(mapping)
    },[])

  return (
    <div>
        <div className='w-6/12 m-auto text-center mt-5'>
            <p className='text-yellow-300'>Detail {detailItem.ruas_name}</p>
        </div>
        <div className='w-10/12 m-auto mt-5'>
            {newItem && detaildata.map((data,index)=>(
                <div className='text-black mt-2'>
                    <FormItem 
                    data={data}
                    index={index}
                    newItem={newItem}
                    setNewItem={setNewItem}
                    setTriger={setTriger}
                    />
                </div>
            ))}
            {triger && <div className='mt-5 w-3/12 bg-gray-900 text-center h-10 rounded text-yellow-300'>
                <button className='h-full hover:bg-black w-full rounded'
                onClick={()=>{
                    let data = {}
                    for(let i=0;i<newItem.length;i++){
                        data[newItem[i]["name"]]=newItem[i]["value"]
                    }
                    data["status"]=data["status"] == true ? "1":"0"
                    data["status"]=data["status"] == false ? "0":"1"
                    var formdata = new FormData();
                    formdata.append("_method", "PUT");
                    formdata.append("unit_id", data.unit_id);
                    formdata.append("ruas_name", data.ruas_name);
                    formdata.append("long", data.long);
                    formdata.append("km_awal",  data.km_awal);
                    formdata.append("km_akhir", data.km_akhir);
                    formdata.append("status", data.status.toString());
                    API.post(`/ruas/${props.data.id}`,formdata,config)
                    .then((res)=>{
                        alert(res.data.message)
                    })
                    .catch((err)=>{
                        alert(err.response.data.message)
                    })
                }}
                ><strong>EDIT</strong></button>
            </div>}
        </div>
        
    </div>
  )
}

export default DetailRuas