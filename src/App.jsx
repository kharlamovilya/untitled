import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import ScrollToTop from './ScrollToTop';

export default function App() {
    return (<>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="moments" element={<Page1/>}/>
                    <Route path="reflections" element={<Page2/>}/>
                </Route>
            </Routes>
        </>);
}