import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


export default function Layout() {
    return (
        <div>
            <Header/>
            <main className="container-fluid px-0 my-5">
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
}