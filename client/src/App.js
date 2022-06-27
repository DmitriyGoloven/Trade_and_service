import React from "react";
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import NavigBar from "./components/NavigBar/NavigBar";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Admin/Auth";
import Orders from "./components/Admin/Orders";


function App() {

    return (
        <div>
            <BrowserRouter>
                <NavigBar/>
                <ToastContainer theme="dark" autoClose={3000}
                                hideProgressBar={true} />
                <Routes>
                    {/*<Route exact path="/" element={<Home/>}/>*/}
                    <Route exact path="/gallery" element={<Gallery/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/*" element={<Home/>}/>
                    <Route exact path="/auth" element={<Auth/>}/>
                    <Route exact path="/orders" element={<Orders/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
