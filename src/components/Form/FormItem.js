import React, { useEffect, useState } from 'react'

const FormItem = (props) => {
    const [item,setItem] = useState()
    useEffect(()=>{
        let datas = [...props.newItem]
        datas[props.index] = {
            name : props.newItem[props.index].name,
            value : item
        }
    },[item])
  return (
    <div>
        <p className='text-gray-300'>{props.data.place_holder}</p>
        <input
            className='rounded text-center w-full h-8'
            value={item}
            placeholder={props.data.name}
            onChange={(e)=>setItem(e.target.value)}
        />
    </div>
  )
}

export default FormItem