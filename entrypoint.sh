#!/bin/sh

echo "📌 Esperando a que PostgreSQL esté listo..."
./wait-for-it.sh postgres:5432 --timeout=30 -- echo "✅ PostgreSQL está listo!"

# Ejecuta las migraciones de Prisma
echo "📌 Ejecutando migraciones de Prisma..."
npx prisma migrate dev

# Inicia la aplicación
echo "📌 Iniciando la aplicación..."
exec npm start
