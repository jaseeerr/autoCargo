import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Commercial from './components/Commercial';
import Invoices from './components/Invoices';
import ViewCommercial from './components/ViewCommercial';
import Navbar from './components/Header';
function App() {
    const [data, setData] = useState([]);

    return (
        <Router>
       <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Commercial />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/invoice/:id" element={<ViewCommercial />} />
                </Routes>
            </div>
    </Router>
    );
}

export default App;