import React, { useState } from 'react'
import { Halper } from './HalperTable'

const Table = ({data}) => {
    const [show,setShow] = useState(false)
    const Mapper=(object,header)=>{
        let result = []
        header.map((data,index)=>{
            result.push(
                <td key={index} class="py-3 px-6 text-left whitespace-nowrap">
                    {<Halper object={object} data={data} show={show} setShow={setShow}/>}
                </td>
            )
        })
        return result
    }
  return (
    <div>
        <table className="min-w-max w-full table-auto">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        {data.header.map((header,index)=>(
                                <th class="py-3 px-6 text-left"
                                key={index}
                                >{header.name}</th>
                    ))}
                    </tr>
                </thead>
                <tbody class="text-white text-sm font-light">
                        {data.body.map((x,index)=>(
                            <tr key={index}
                            class="border-b border-gray-200 font-bold hover:bg-gray-100 hover:text-gray-700"
                            >
                                {Mapper(x,data.header)}
                            </tr> 
                        ))}
                </tbody>
        </table>
    </div>
  )
}

export default Table