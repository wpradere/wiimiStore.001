#!/bin/sh

# Temporizador: 30 segundos
TIMEOUT=30
START_TIME=$(date +%s)

echo "📌 Esperando a que PostgreSQL esté listo..."

# Revisa si PostgreSQL está disponible dentro del tiempo límite
until PGPASSWORD=$POSTGRES_PASSWORD pg_isready -h $POSTGRES_HOST -U $POSTGRES_USER; do
  CURRENT_TIME=$(date +%s)
  ELAPSED_TIME=$((CURRENT_TIME - START_TIME))

  # Si han pasado más de 30 segundos, avisa y continúa con npm start
  if [ $ELAPSED_TIME -ge $TIMEOUT ]; then
    echo "⚠️  PostgreSQL no respondió en $TIMEOUT segundos. Continuando con la aplicación..."
    break
  fi

  echo "⏳ Esperando PostgreSQL..."
  sleep 1
done

echo "📌 Ejecutando migraciones de Prisma..."
npx prisma migrate deploy

# Inicia la aplicación
echo "📌 Iniciando la aplicación..."
exec npm start
