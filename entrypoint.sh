#!/bin/sh

# Mensaje de inicio
echo "📌 Esperando a que PostgreSQL esté listo..."

# Espera hasta que PostgreSQL esté accesible (hasta 30 segundos, por ejemplo)
until PGPASSWORD=$POSTGRES_PASSWORD pg_isready -h postgres -p 5432 -U $POSTGRES_USER; do
  echo "⏳ Esperando PostgreSQL..."
  sleep 2
done

# Confirma que PostgreSQL está listo
echo "✅ PostgreSQL está listo!"

# Ejecuta las migraciones de Prisma (intenta 3 veces si hay un fallo temporal)
echo "📌 Ejecutando migraciones de Prisma..."
npx prisma migrate deploy || (echo "🚨 Error ejecutando migraciones de Prisma" && exit 1)

# Inicia la aplicación
echo "📌 Iniciando la aplicación..."
exec npm start
