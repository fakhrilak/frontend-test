import React, { useState } from "react"
import Modal from "../Modal/Modal"
import DetailRuas from "../Detail/DetailRuas"
import { FcNext } from "react-icons/fc";
export const Halper=(props)=>{
    const [show,setShow] = useState(false)
    const [type,setType] = useState()
    if(props.data.type == "text"){
        let result=""
        for(let a=0;a<props.data.data.length;a++){
            
            if(props.data.name == "Lokasi"){
                if (a>0){
                    result+=" s/d "
                }
                result+=props.object[props.data.data[a]]
            }else if(props.data.name === "Status"){
                return <p className={`${props.object[props.data.data[a]] == "0"?"text-red-500":"text-green-500"}`}>{props.object[props.data.data[a]] == "0"? "Tidak Aktif":"Aktif"}</p>
            }else if(props.data.name === "Unit Kerja"){
                result+=`Unit Kerja ${props.object[props.data.data[a]]}`
            }else if(props.data.name == "No"){
                return <p>{props.no+1}</p>
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
        if(props.data.name == "Foto"){
            return <>
                <Modal
                    show={show} 
                    handleshow={setShow} 
                >
                    <img src={result}/>
                </Modal>
                <button
                className="bg-gray-300 w-20 text-gray-900 rounded"
                onClick={()=>{
                    setShow(!show)
                }}
                >Show</button>
            </>
        }else if(props.data.name == "Document"){
            return<>
            <Modal
                show={show} 
                handleshow={setShow} 
            >
                <iframe
                    title="PDF Viewer"
                    src={result}
                    width="100%"
                    height="100%"
                />
            </Modal>
            <button
            className="bg-gray-300 w-20 text-gray-900 rounded"
            onClick={()=>{
                setShow(!show)
            }}
            >Show</button>
        </>
        }else if(props.data.name == "Aksi"){
            return<>
                <Modal
                    show={show} 
                    handleshow={setShow} 
                >
                    {<DetailRuas data={props.object}/>}
                </Modal>
                <div className="grid grid-cols-3 gap-3">
                    <button  className="w-10 m-auto bg-gray-300 rounded text-black"
                    onClick={()=>{
                        setType("show")
                        setShow(!show)
                    }}
                    ><FcNext
                    size={40}
                    /></button>
                </div>
            </>
            
        }
        
    }
}