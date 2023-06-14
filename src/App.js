import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import './styles.css'; // Import the CSS file


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('appData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const addData = (newData) => {
    const updatedData = [...data, newData];
    setData(updatedData);
    localStorage.setItem('appData', JSON.stringify(updatedData));
  };

  const deleteData = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    localStorage.setItem('appData', JSON.stringify(updatedData));
  };

  return (
    <div>
      <h1>Profiles</h1>
      <Form addData={addData} />
      <Table data={data} deleteData={deleteData} />
    </div>
  );
};

export default App;

