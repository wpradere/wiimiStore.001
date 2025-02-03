#!/bin/sh

echo "📌 Esperando a que PostgreSQL esté listo..."

# Espera hasta que PostgreSQL esté accesible
until PGPASSWORD=$POSTGRES_PASSWORD pg_isready -h postgres -p 5432 -U $POSTGRES_USER; do
  echo "⏳ Esperando PostgreSQL..."
  sleep 2
done

echo "✅ PostgreSQL está listo!"

# Ejecuta las migraciones de Prisma
echo "📌 Ejecutando migraciones de Prisma..."
npx prisma migrate deploy

# Inicia la aplicación
echo "📌 Iniciando la aplicación..."
exec npm start
