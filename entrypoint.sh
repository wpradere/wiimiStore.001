#!/bin/sh

# Temporizador: 30 segundos (puedes aumentarlo si es necesario)
TIMEOUT=30
START_TIME=$(date +%s)

echo "📌 Esperando a que PostgreSQL esté listo..."

# Revisa si PostgreSQL está disponible dentro del tiempo límite
until PGPASSWORD=$POSTGRES_PASSWORD pg_isready -h $POSTGRES_HOST -U $POSTGRES_USER; do
  CURRENT_TIME=$(date +%s)
  ELAPSED_TIME=$((CURRENT_TIME - START_TIME))

  # Si han pasado más de 30 segundos, salimos
  if [ $ELAPSED_TIME -ge $TIMEOUT ]; then
    echo "❌ Tiempo de espera agotado. PostgreSQL no está listo."
    exit 1  # Salir con código de error para indicar fallo
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