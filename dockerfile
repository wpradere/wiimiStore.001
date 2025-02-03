# Usa la imagen oficial de Node.js
FROM node:22.11

# Directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias primero para aprovechar la cache de Docker
COPY package*.json ./

# Instala las dependencias de la app
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Genera el Prisma Client
RUN npx prisma generate

# Copia y hace ejecutable el entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expone el puerto en el que la app escuchará
EXPOSE 3000

# Usa el entrypoint para ejecutar el script de inicio
ENTRYPOINT ["/entrypoint.sh"]
