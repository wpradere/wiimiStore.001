# Usa la imagen de Node.js
FROM node:22.11

RUN apt-get update && apt-get install -y netcat-openbsd

# Directorio de trabajo
WORKDIR /app

# Copia archivos antes de instalar dependencias
COPY package*.json ./
RUN npm install

# Copia el archivo .env antes de la construcción
COPY .env .env

# Agrega la variable DATABASE_URL para la compilación
ENV DATABASE_URL="postgresql://asa:asa@postgres:5432/wiimy_db_store"

# Copia el directorio de Prisma
COPY prisma ./prisma
RUN npx prisma generate

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Ejecuta las migraciones de Prisma
RUN npx prisma migrate dev

# Copia el resto de la app
COPY . .

# Construye la app Next.js
RUN npm run build

# Expone el puerto
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
