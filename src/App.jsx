import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import ModelList from './components/ModelList';
import MainCanvas from './components/MainCanvas';

function App() {
    return (
        <div className="App">
            <AppNavbar />
            <Routes>
                <Route index element={<ModelList />} />
                <Route path='models/:id' element={<MainCanvas />} />
            </Routes>
        </div >
    );
}

export default App;
