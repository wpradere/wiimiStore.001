# Usa la imagen de Node.js
FROM node:22.11

# Directorio de trabajo
WORKDIR /app

# Copia archivos antes de instalar dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de la app
COPY . .
# Construye la aplicación Next.js
RUN npm run build

# Expone el puerto
EXPOSE 3000

# Comando para iniciar la app y correr migraciones en runtime
CMD ["sh", "-c", "npx prisma generate && npx prisma migrate deploy && npm run build && npm start"]
