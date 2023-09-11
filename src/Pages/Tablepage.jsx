import React, { useEffect, useState } from 'react';
import Table from '../Components/Table';
import { toast } from 'react-toastify';
import axios from 'axios';

const Tablepage = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleData = async () => {
    try {
      const response = await axios.get('http://localhost:9999/getData');
      if (response?.data?.data) {
        setData(response.data.data);
      } else {
        setData([]);
      }
    } catch (error) {
      setData([]);
      toast('Something went wrong');
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (!query) {
      handleData(); // Reset the data to original if the search query is empty
    } else {
      // Filter the data based on the search query (Assuming you want to search by 'username' field)
      const filteredData = data.filter((item) =>
        item.username.toLowerCase().includes(query.toLowerCase())
      );
      setData(filteredData);
    }
  };

  return (
    <div className='d-flex flex-column align-items-center w-75' style={{ height: '100vh' , marginTop:"120px"}}>
      <div className='d-flex align-items-center justify-content-space-between '>
        <p>Search user here</p>
        <input
        type='text'
        placeholder='Search by username...'
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: '20px', padding: '5px' }}
      /></div>
      <Table data={data} />
    </div>
  );
};

export default Tablepage;

