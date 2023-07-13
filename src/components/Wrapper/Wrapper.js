import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Wrapper = (props) => {
  const [cookies] = useCookies(['token']);
  const history = useHistory();

  useEffect(() => {
    if ((!cookies.token)&&(history)){
      history.push('/login');
    }
  }, [cookies.token]);

  return (
      <div className="w-12/12 m-auto">{props.children}</div>
  );
};

export default Wrapper;
