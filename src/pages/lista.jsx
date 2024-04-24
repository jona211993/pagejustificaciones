import React, { useState, useEffect  } from "react";
import { Table, Button, Space, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../styles/lista.css";

const columns = [
  {
    title: 'Fecha',
    dataIndex: 'fecha',
    key: 'fecha',
  },
  {
    title: 'Asesor',
    dataIndex: 'asesor',
    key: 'asesor',
  },
  {
    title: 'Grupo',
    dataIndex: 'grupo',
    key: 'grupo',
    filters: [
      { text: 'Grupo A', value: 'Grupo A' },
      { text: 'Grupo B', value: 'Grupo B' },
      { text: 'Grupo C', value: 'Grupo C' },
      // Agrega más opciones según tus datos
    ],
    onFilter: (value, record) => record.grupo.indexOf(value) === 0,
  },
  {
    title: 'Acciones',
    key: 'acciones',
    render: (text, record) => (
      <Space size="middle">
        <Link to={`/ver/${record.id}`}><Button icon={<EyeOutlined />} /></Link>
        <Link to={`/editar/${record.id}`}><Button icon={<EditOutlined />} /></Link>
        <Button icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(record.id)} />
      </Space>
    ),
  },
];

const Lista = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la petición Axios al servidor
    axios.get("http://localhost:3000/obtenerJustificaciones")
      .then(response => {
        // Establecer el estado con los datos obtenidos
        setData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }, []); // El segundo argumento del useEffect asegura que se ejecute solo una vez al montar el componente

  const showDeleteConfirm = (id) => {
    setDeleteItemId(id);
    setModalVisible(true);
  };

  const handleDelete = () => {
    // Realiza la solicitud de eliminación al backend utilizando Axios
    axios.delete(`URL_DE_TU_BACKEND/eliminar/${deleteItemId}`)
      .then(response => {
        // Manejar la respuesta del servidor aquí
        console.log('Resultado de la eliminación:', response.data);
        setModalVisible(false);
      })
      .catch(error => {
        // Manejar errores aquí
        console.error('Error al eliminar datos:', error);
        setModalVisible(false);
      });
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
     <div className="titulo">
     <h1>Lista de Justificaciones</h1>
     </div>
    <div className="cont-tabla">
        
        <Table  className="ta" columns={columns} dataSource={data} />
  
        <Modal
          title="Confirmar eliminación"
          closable={modalVisible}
          onOk={handleDelete}
          onCancel={handleCancel}
        >
          <p>¿Estás seguro de que quieres eliminar este elemento?</p>
        </Modal>
      </div>
    </>
    
  );
};

export default Lista;
