import GlobalStyle from "../styles/global";
import styled from "styled-components";
import Form from "./Form.js";
import Grid from "./Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 130px auto 20px; /* Ajusta el margen para centrar verticalmente y dar espacio desde arriba */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 991px) {
    margin: 200px auto 20px; /* Ajusta el margen en dispositivos móviles */
  }
`;
//sin menu de arrriba
/*
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
*/


const Title = styled.h2``;

function Usuarios() {
  const  apiUrl = process.env.REACT_APP_API_URL;
  console.log(apiUrl);
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get(apiUrl);
      setUsers(res.data.sort((a, b) => (a.nombre > b.nombre ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
  
      <Container>
        <Title>CLIENTES</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
      
    </>
  );
}

export default Usuarios;
