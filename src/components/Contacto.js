import React from "react";
import styled from "styled-components";
import '../styles/Dashboard.css'; // Importa el archivo CSS
import GlobalStyle from "../styles/global";
const ContactoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin-top: 100px; /* Ajusta este valor para cambiar la distancia desde arriba */
  
  @media (max-width: 991px) {
    margin-top: 200px; /* Ajusta el margen en dispositivos móviles */
  }
`;


const Titulo = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Texto = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
`;

const Contacto = () => {
  return (
    
    <ContactoContainer>
      <Titulo>CONTACTO</Titulo>
      <Texto>
        Si tienes alguna pregunta o comentario, no dudes en contactarnos. Estamos
        aquí para ayudarte.
      </Texto>
      <Texto>Puedes escribirnos a: luhpelayo@gmail.com</Texto>
      <GlobalStyle />
    </ContactoContainer>
      
  );
};

export default Contacto;
