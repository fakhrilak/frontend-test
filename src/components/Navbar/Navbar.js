import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory,useLocation } from 'react-router-dom';
import { dataNavbar } from './dataNavbar';
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
    <div className=''>
           <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex">
                <div className="flex items-center w-1/12 h-20">
                  <a href="/" className="text-white font-bold text-lg">
                    <img
                      src="https://blogger.zilog.online/static/media/logo.436f1557.png"
                      className="w-6/12 m-auto"
                    />
                  </a>
                </div>

                <div className="flex items-center">
                  {dataNavbar.map((data, index) => (
                    <a
                      key={index}
                      onClick={()=>history.push(data.path)}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {data.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
          <div>
            <div className="w-10/12 m-auto h-full mt-2 mb-10">
              <p className='text-yellow-300 text-2xl'>{path?path:null}</p>
            </div>
            <div className="w-10/12 m-auto h-full">{props.children}</div>
          </div>
    </div>
   
  );
};

export default Navbar;
