import React, { Component, useState, useEffect } from 'react';
import { HashRouter, Router, Route, Redirect, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Features from './components/Features.jsx';
import Demo from './components/Demo.jsx';
import Team from './components/Team.jsx';
import Nav from './components/Nav.jsx';
import NET from 'vanta/src/vanta.net.js'

export default function App(){
  useEffect(() => {
    NET({
      el: '#root',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x29b4be,
      backgroundColor: 0x60607
    })
  },[])


    return (
        <HashRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="demo" element={<Demo />} />
            <Route path="team" element={<Team />} />
          </Route>
        </Routes>
      </HashRouter>
    );
}