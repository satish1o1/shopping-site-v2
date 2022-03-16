import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navgation.component";
import Home from "./routes/home/home.component";
const App = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigation/>}>
            <Route index element={<Home />} />
            <Route path = '/shop' element={<h1>iam the shop component</h1>}/>
         </Route>
         
      </Routes>
  )
};

export default App;
