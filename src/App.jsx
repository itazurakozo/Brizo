import React, { Component, useState, useEffect } from 'react';
import { HashRouter, Router, Route, Redirect, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Features from './components/Features.jsx';
import Demo from './components/Demo.jsx';
import Team from './components/Team.jsx';
import Nav from './components/Nav.jsx';

export default function App(){
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