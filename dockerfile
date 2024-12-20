# Etapa 1: Construcción de la aplicación
FROM node:22-alpine AS builder

# Crear el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente
COPY . .

# Construir la aplicación Next.js
RUN npm run build

# Etapa 2: Configurar el servidor de producción
FROM node:18-alpine AS runner

# Crear el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios desde la etapa de construcción
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Instalar dependencias de producción
RUN npm install --production

# Configurar la variable de entorno para Next.js
ENV NODE_ENV production

# Exponer el puerto que usará Next.js
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
