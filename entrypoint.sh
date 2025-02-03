#!/bin/sh

echo "📌 Esperando a que PostgreSQL esté listo..."
until nc -z -v -w30 postgres 5432; do
  echo "⏳ Esperando PostgreSQL..."
  sleep 1
done
echo "✅ PostgreSQL está listo!"

# Ejecuta las migraciones de Prisma
echo "📌 Ejecutando migraciones de Prisma..."
npx prisma migrate deploy

# Inicia la aplicación
echo "📌 Iniciando la aplicación..."
exec npm start
