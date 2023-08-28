# Utiliza una imagen base de Node.js
FROM node:alpine

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Puerto en el que la aplicación estará escuchando
EXPOSE 3000

# Variables de entorno para la conexión a la base de datos PostgreSQL
ENV REACT_APP_API_URL=http://localhost:8800/

# Comando para iniciar la aplicación
CMD ["npm", "start"]
