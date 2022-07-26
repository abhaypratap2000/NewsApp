
import './App.css';

import Navbar from './ components/Navbar';
import News from './ components/News';
import {Routes, Route} from "react-router-dom";
const App = () => {
  const pageSize = 15;
 
    return (
      <div>
        <>  
         <Navbar/>
            <Routes>
            <Route exact path ='/' element={<News  pageSize={pageSize} country="us" category="general"/>}></Route>
            <Route path ='/Sports' element={<News pageSize={pageSize} country="in" category="sports"/>}></Route>
            <Route exact path ='/Entertainment' element={<News  pageSize={pageSize} country="in" category="entertainment"/>}></Route>
            <Route exact path ='/Technology' element={<News pageSize={pageSize} country="in" category="technology"/>}></Route> 
            <Route exact path ='/Science' element={<News  pageSize={pageSize} country="in" category="science"/>}></Route>
            <Route exact path ='/Business' element={<News pageSize={pageSize} country="in" category="business"/>}></Route> 
            <Route exact path ='/Health' element={<News pageSize={pageSize} country="in" category="health"/>}></Route>
            </Routes>
           </>
           </div>
    )
  
}
export default App;