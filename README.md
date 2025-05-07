# Proyecto Backend para Sistema de Logística

Este proyecto es un backend para un sistema de gestión logística que maneja camioneros, camiones, paquetes y provincias. Está construido con Node.js, Express y Sequelize como ORM para interactuar con una base de datos MySQL.

## Características principales

- Gestión de camioneros (CRUD completo)
- Modelado de relaciones entre entidades:
  - Camioneros y camiones (relación muchos-a-muchos)
  - Camioneros y paquetes (relación uno-a-muchos)
  - Provincias y paquetes (relación uno-a-muchos)
- API RESTful con Express
- Conexión a base de datos MySQL mediante Sequelize
- Middlewares para CORS, logging (morgan) y manejo de JSON

## Estructura del proyecto

```
proyecto_backend_002_logist/
├── index.js                 # Punto de entrada de la aplicación
├── package.json
├── src/
│   ├── db/
│   │   └── connection.js    # Configuración de conexión a la base de datos
│   ├── models/              # Modelos de Sequelize
│   │   ├── Camion.js
│   │   ├── Camionero.js
│   │   ├── CamioneroXCamion.js
│   │   ├── index.js         # Exportación de modelos y definición de relaciones
│   │   ├── Paquete.js
│   │   └── Provincia.js
│   └── routes/
│       └── camioneroRoutes.js # Rutas para el recurso Camionero
```

## Modelos de datos

1. **Camionero**

   - cuit (string, único)
   - nombre (string)
   - teléfono (string)
   - domicilio (string)
   - salario (string)

2. **Camion**

   - patente (string, único)
   - marca (string)
   - modelo (string)
   - capacidadDeCarga (string)

3. **CamioneroXCamion** (tabla intermedia)

   - Relaciona camioneros con camiones
   - Incluye fecha de asignación

4. **Paquete**

   - código (string, único)
   - dirección (string)
   - destinatario (string)
   - domicilioDestinatario (string)
   - Relaciones con Camionero y Provincia

5. **Provincia**
   - código (string, único)
   - nombre (string)

## Endpoints disponibles

### Camioneros

- `GET /camioneros` - Obtener todos los camioneros
- `GET /camionero-by-id/:id` - Obtener un camionero por ID
- `POST /camioneros` - Crear un nuevo camionero
- `PUT /camioneros/:id` - Actualizar un camionero existente
- `DELETE /camioneros/:id` - Eliminar un camionero

## Requisitos del sistema

- Node.js (v14 o superior)
- MySQL
- Variables de entorno configuradas (crear archivo .env)

## Variables de entorno necesarias

```env
DB_NAME=nombre_base_datos
DB_USER=usuario_db
DB_PASSWORD=contraseña_db
DB_HOST=host_db
DB_PORT=puerto_db
DB_DIALECT=mysql
PORT=puerto_servidor
```

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar las variables de entorno en un archivo `.env`
4. Iniciar el servidor:
   ```bash
   npm run dev  # Modo desarrollo (con --watch)
   # o
   npm start    # Modo producción
   ```

## Tecnologías utilizadas

- Node.js
- Express
- Sequelize (ORM)
- MySQL
- CORS
- Morgan (logging)
- Dotenv (gestión de variables de entorno)

## Autor

Carlos E Rodriguez

## Licencia

MIT
