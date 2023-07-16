import React, { useEffect, useState } from 'react'

const FormItem = (props) => {
    const [item,setItem] = useState(props.data.type == "checkbox"  ? Boolean(props.data.value == "1"? true:false):props.data.value)
    const [preview,setPreview] = useState(props.data.filetype)
    useEffect(()=>{
        let datas = [...props.newItem]
        datas[props.index] = {
            name : props.newItem[props.index].name,
            value : item
        }
        props.setNewItem(datas)
        return(()=>{
            props.setTriger(true)
        })
    },[item])

    const handleCheck=(e)=>{
        if(props.data.type == "checkbox"){
            setItem(e.target.checked)
        }else if(props.data.type == "string" || props.data.type == "password"){
            setItem(e.target.value)
        }else if(props.data.type == "file"){
            setItem(e.target.files[0])
        }
    }

    
  return (
    <div>
        <p className='text-gray-300'>{props.data.place_holder}</p>
        <input
            className='rounded text-center w-full h-8'
            type={props.data.type}
            value={props.data.type == "file" ?"hello":item}
            placeholder={props.data.name}
            onChange={handleCheck}
        />
    </div>
  )
}

export default FormItem