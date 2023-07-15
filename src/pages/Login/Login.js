import React, { useEffect, useState } from 'react';
import { datalogin } from "./logindata";
import FormItem from '../../components/Form/FormItem';
import math from "../../img/math.png";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { API, config, setAuthToken } from '../../config/API';
import { getCoocies } from '../../halper/coocies';

const Login = (props) => {
  const [newItem, setNewItem] = useState(datalogin);
  const [cookies, setCookie] = useCookies(['token']);
  const history = useHistory()
  const handleSubmitForm = () => {
    let data = {}
    for(let i=0;i<newItem.length;i++){
      data[newItem[i]["name"]]=newItem[i]["value"]
      setCookie(newItem[i]["name"],newItem[i]["value"])
    }
    API.post("/login",data,config)
    .then((res)=>{
      setCookie('token', res.data.access_token, { path: '/' });
      setCookie('data_login', res.data, { path: '/' });
      setAuthToken(res.data.access_token)
      history.push("/dashboard")
    })
    .catch((err)=>{
      alert(err.response.data.message[0])
    })
  };

  return (
    <div className={`w-12/12 m-auto grid grid-cols-2 h-screen ${props.color}`}>
      <div className='w-6/12 m-auto h-11/12'>
        <div className='w-12/12 text-center'>
          <img
            className='w-9/12'
            src='https://blogger.zilog.online/static/media/logo.436f1557.png'
            alt='Logo'
          />
        </div>
          {datalogin.map((data, index) => (
            <div key={index} className='mt-5 w-9/12'>
              <FormItem
                data={data}
                index={index}
                newItem={newItem}
                setNewItem={setNewItem}
              />
            </div>
          ))}
          <div className='w-9/12 text-right mt-5 rounded'>
            <button
              onClick={()=>handleSubmitForm()}
              className='w-4/12 text-white font-bold rounded h-8 bg-gray-400 hover:bg-gray-500'
            >
              Login
            </button>
          </div>
      </div>
      <div className='w-full m-auto' style={{ backgroundImage: `url(${math})`, backgroundSize: 'cover' }}>
        <div className='mt-52 text-center'>
           <p className='text-2xl font-bold text-yellow-300'>Genggam Dunia Dengan <strong className='text-gray-500'>MATEMATIKA</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
