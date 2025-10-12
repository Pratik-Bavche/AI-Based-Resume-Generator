import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import DashBoard from "./Pages/DashBoard";
import ResumeBuilder from "./Pages/ResumeBuilder";
import Preview from "./Pages/Preview";
import Login from "./Pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="app" element={<Layout/>}>
            <Route index element={<DashBoard/>}/>
            <Route path="builder/:resumeId" element={<ResumeBuilder/>}/>
        </Route>

        <Route path="view/:resumeId" element={<Preview/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
