import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaginaAdmin = () => {
    const [data, setData] = useState([]);
    const [deleteId, setDeleteId] = useState('');
    const [updateId, setUpdateId] = useState('');
    const [updateField, setUpdateField] = useState('');
    const [updateValue, setUpdateValue] = useState('');
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/administrador',{
            headers:{
                'access-token' : localStorage.getItem("token")
            }
        })
        setData(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    const handleDelete = async () => {
        try {
          await axios.delete(`http://localhost:9000/delete/${deleteId}`, {
            headers: {
              'access-token': localStorage.getItem("token")
            }
          });
          fetchData(); // Vuelve a cargar los datos después de eliminar
          setDeleteId(''); // Restablece el valor de deleteId a ''
        } catch (error) {
          console.log('Error deleting item:', error);
        }
      };

      const handleUpdate = async () => {
        try {
          await axios.put(`http://localhost:9000/actualizar/${updateId}`, {
            field: updateField,
            value: updateValue
          }, {
            headers: {
              'access-token': localStorage.getItem("token")
            }
          });
          fetchData(); // Vuelve a cargar los datos después de actualizar
          setUpdateId('');
          setUpdateField('');
          setUpdateValue('');
        } catch (error) {
          console.log('Error updating item:', error);
        }
      };
  
    return (
      <div>
        <h1>Data List</h1>
        <button onClick={fetchData}>Load Data</button>
        <ul>
          {Array.isArray(data) ? (
            data.map((item) => <li key={item.id}>{item.id} {item.nombre} {item.rol} {item.clave} {item.direccion} {item.pais} {item.genero} {item.telefono}</li>)
          ) : (
            <li>No data available</li>
          )}
        </ul>

        <div>
        <input type="text" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} placeholder="ID" />
        <button onClick={handleDelete}>Delete</button>
        </div>

        <div>
            <input type="text" value={updateId} onChange={(e) => setUpdateId(e.target.value)} placeholder="ID" />
            <input type="text" value={updateField} onChange={(e) => setUpdateField(e.target.value)} placeholder="Field" />
            <input type="text" value={updateValue} onChange={(e) => setUpdateValue(e.target.value)} placeholder="New Value" />
            <button onClick={handleUpdate}>Update</button>
        </div>
      </div>

      
    );
  };

export default PaginaAdmin;