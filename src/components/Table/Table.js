import React, { useState } from 'react'
import { Halper } from './HalperTable'

const Table = ({data,res,page,setPage,per_page,setPer_page}) => {
    const [pages,setPages] = useState([2,3,4,5])
    const Mapper=(object,header,no)=>{
        let result = []
        header.map((data,index)=>{
            result.push(
                <td key={index} class="py-3 px-6 text-left whitespace-nowrap">
                    {<Halper object={object} data={data} no={no}/>}
                </td>
            )
        })
        return result
    }
  return (
    <div >
        <div className='w-12/12 m-auto table-auto overflow-x-auto'>
            <table className="min-w-max w-11/12 m-auto table-auto">
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
                                {Mapper(x,data.header,index)}
                            </tr> 
                        ))}
                </tbody>
            </table>
        </div>
        
        <div className='flex w-11/12 justify-between mt-5'>
            <div/>
            <div className='grid grid-cols-6 gap-5'>
                    <select className='col-span-3 rounded text-center bg-gray-900 border border-gray-300 text-gray-300'       
                    onChange={(e)=>setPer_page(e.target.value)}
                    >
                        {pages.map((data,index)=>(
                            <option key={index}
                            value={data}
                            >Show : {data} entries</option>
                        ))}
                    </select>
                <button className='bg-gray-900 w-10 rounded font-bold text-gray-300 border border-gray-300'
                onClick={()=>{
                    const prevPage = res.prev_page_url?res.prev_page_url.split("=")[1]:null
                    setPage(prevPage)
                }}
                >{"<"}</button>
                <input className='w-10 text-center rounded-full bg-gray-900 border border-gray-300 text-gray-300'
                value={page}
                />
                <button className='bg-gray-900 w-10 rounded font-bold text-gray-300 border border-gray-300'
                onClick={()=>{
                    const nextpage = res.next_page_url?res.next_page_url.split("=")[1]:null
                    setPage(nextpage)
                }}
                >{page ? ">" :null}</button>
            </div>
        </div>
    </div>
  )
}

export default Table