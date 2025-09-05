# Cloud Actividades

![CI](https://github.com/sebassanti22-crypto/cloud-actividades/actions/workflows/ci.yml/badge.svg)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)

Proyecto base para cumplir **Actividad 1 (EC2)**, **Actividad 2 (GitHub Actions)** y **Actividad 3 (Docker)**.

## Requisitos
- Node 18+ y npm
- (Opcional) Docker

## Desarrollo local
```bash
npm install
npm run dev
```
Abre http://localhost:5173

## Pruebas
```bash
npm test
```

## Build de producción
```bash
npm run build
```

## Docker
```bash
docker build -t cloud-actividades .
docker run -p 8080:80 cloud-actividades
# abre http://localhost:8080
```

## Despliegue (Actividad 1 - EC2 con Nginx, Ubuntu 22.04)
1. Crear instancia t2.micro, abrir puertos 22 y 80.
2. Instalar Nginx y Node (`sudo apt update && sudo apt -y install nginx curl` + Node 18).
3. Clonar repo, instalar deps y construir:
   ```bash
   git clone https://github.com/sebassanti22-crypto/cloud-actividades.git app
   cd app
   npm ci || npm install
   npm run build
   sudo rm -rf /var/www/html/*
   sudo cp -r dist/* /var/www/html/
   sudo systemctl reload nginx
   ```
4. Verificar `http://IP_PUBLICA`.

## Automatización (Actividad 2 - GitHub Actions)
- El workflow corre en cada push a `main`: instala deps, ejecuta pruebas y (si existe) build.
- Revisa la pestaña **Actions** del repo para ver la ejecución.

## Evidencias
- Capturas: instancias EC2, Security Groups, app en el navegador, ejecución del workflow y badge, build & run de Docker.
- Incluye URL/IP pública y troubleshooting en este README.
