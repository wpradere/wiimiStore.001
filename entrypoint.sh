#!/bin/sh

# Temporizador: 2 minutos (120 segundos)
TIMEOUT=120
START_TIME=$(date +%s)

echo "📌 Esperando a que PostgreSQL esté listo..."

# Revisa si PostgreSQL está disponible dentro del tiempo límite
until PGPASSWORD=$POSTGRES_PASSWORD pg_isready -h $POSTGRES_HOST -U $POSTGRES_USER; do
  CURRENT_TIME=$(date +%s)
  ELAPSED_TIME=$((CURRENT_TIME - START_TIME))

  # Si han pasado más de 120 segundos, salimos
  if [ $ELAPSED_TIME -ge $TIMEOUT ]; then
    echo "❌ Tiempo de espera agotado. PostgreSQL no está listo."
    exit 1
  fi

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
