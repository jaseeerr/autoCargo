import React, { useState } from 'react';
import ExcelReader from './components/ExcelReader';
import DataTable from './components/DataTable';
import Commercial from './components/Commercial';

function App() {
    const [data, setData] = useState([]);

    return (
        <div className="App">
           <Commercial/>
        </div>
    );
}

export default App;
