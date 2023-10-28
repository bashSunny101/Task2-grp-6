import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/footer";

export default function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
        

    )
}