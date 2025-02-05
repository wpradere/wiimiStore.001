# Usa la imagen de Node.js
FROM node:22.11

# Directorio de trabajo
WORKDIR /app

# Copia archivos antes de instalar dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de la app
COPY . .

# Genera Prisma Client
RUN npx prisma generate

# Construye la aplicación Next.js (esto genera la carpeta `.next`)
RUN npm run build  # Asegúrate de que 'next build' esté configurado en tu package.json


# Agrega el entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expone el puerto
EXPOSE 3000

# Usa el entrypoint en lugar de CMD directamente
ENTRYPOINT ["/entrypoint.sh"]
