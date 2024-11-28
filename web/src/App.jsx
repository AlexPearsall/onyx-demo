import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Grid from './components/Grid';
import './App.css';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <div className="main">
                <Header />
                <div className="content">
                    <Grid />
                </div>
            </div>
        </div>
    );
}

export default App;
