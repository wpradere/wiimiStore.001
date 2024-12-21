# Establece la imagen base
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Instala ESLint como devDependency (si no se ha instalado ya)
RUN npm install --save-dev eslint

# Copia el archivo .env
COPY .env .env

# Copia el directorio prisma que contiene schema.prisma
COPY prisma ./prisma

# Copia el resto de los archivos del proyecto
COPY . .

# Ejecuta prisma generate para generar el cliente de Prisma
RUN npx prisma generate

# Construye la aplicación Next.js
RUN npm run build

# Expone el puerto en el que Next.js corre por defecto
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]