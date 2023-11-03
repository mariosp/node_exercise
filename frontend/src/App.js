import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from './App.module.css';
import { Auth } from './auth';



function App() {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
