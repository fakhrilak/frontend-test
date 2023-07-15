import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory,useLocation } from 'react-router-dom';
import { dataNavbar } from './dataNavbar';
import { data } from 'autoprefixer';
const Navbar = (props) => {
  const [cookies] = useCookies(['token']);
  const [path,setPath] = useState()
  const history = useHistory();
  const location = useLocation();

  useEffect(()=>{
    for(let a in dataNavbar){
      if(dataNavbar[a].path.split("/")[1] == location.pathname.split("/")[1]){
        setPath(dataNavbar[a].labelPath)
      }
    }
  },[location])

  useEffect(() => {
    if ((!cookies.token)&&(history)){
      history.push('/login');
    }
  }, [cookies.token]);

  return (
          <div className='bg-gray-900'>
           <nav className='fixed w-full bg-gray-900'>
                <div className="items-center w-11/12 m-auto">
                  {dataNavbar.map((data, index) => (
                    <div
                      key={index}
                      onClick={()=>history.push(data.path)}
                      className={` px-3 py-2  ${data.style == "left"?"float-left":"float-right"}`}
                    >
                      {data.img? 
                        <img src={data.img} className='w-10 cursor-pointer'/>:<p className='text-gray-300 text-center mt-2 hover:text-yellow-300 rounded-md text-sm font-medium cursor-pointer'>{data.name}</p>}
                    </div>
                  ))}
                </div>
          </nav>
          <div className={`${props.color} min-h-screen`}>
            <div className="w-10/12 m-auto h-full mb-10 pt-20">
              <strong className='text-yellow-300 text-2xl'>{path?path:null}</strong>
            </div>
            <div className="w-11/12 m-auto">{props.children}</div>
          </div>
    </div>
   
  );
};

export default Navbar;
