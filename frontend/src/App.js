import { useNavigate, Routes, Route } from "react-router-dom";
import styles from './App.module.css';
import { Auth } from './auth';
import { Dashboard } from "./dashboard/Dashboard";
import { useAuth } from "./utils/hooks/useAuth";
import { useEffect } from "react";
import { Spinner } from '@chakra-ui/react';

function App() {
  const navigate = useNavigate();
  const { loading, authed } = useAuth();

  useEffect(()=>{
    if(authed && !loading) {
      navigate('/');
    } else if(!authed && !loading) {
      navigate('/auth');
    }
  },[authed, loading]);

  return (
    <div className={styles.wrapper}>
      {loading && !authed ? 
        <div className={styles.loader}>
          <Spinner
          className=""
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='teal'
            size='xl'
          />
        </div>
        :
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
        </Routes>
      }
    </div>
  );
}

export default App;
