# Usa la imagen oficial de Node.js
FROM node:22.11

# Instalación del cliente PostgreSQL para usar pg_isready
RUN apt-get update && apt-get install -y postgresql-client

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

# Expone el puerto en el que la app escuchará
EXPOSE 3000

# CMD que espera a PostgreSQL y luego ejecuta las migraciones y la app
CMD bash -c "until pg_isready -h postgres -p 5432 -U $POSTGRES_USER; do \
    echo '⏳ Esperando PostgreSQL...'; \
    sleep 2; \
  done; \
  echo '✅ PostgreSQL está listo!'; \
  npx prisma migrate deploy; \
  npm start"
