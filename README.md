# Proyecto Backend para Sistema de Logística

Este proyecto es un backend para un sistema de gestión logística que maneja camioneros, camiones, paquetes y provincias. Está construido con Node.js, Express y Sequelize como ORM para interactuar con una base de datos MySQL.

## Características principales

- Gestión completa de entidades (CRUD):
  - Camioneros
  - Camiones
  - Paquetes
  - Provincias
  - Relaciones CamioneroXCamion
- Modelado de relaciones entre entidades:
  - Camioneros y camiones (relación muchos-a-muchos a través de CamioneroXCamion)
  - Camioneros y paquetes (relación uno-a-muchos)
  - Provincias y paquetes (relación uno-a-muchos)
- API RESTful con Express
- Conexión a base de datos MySQL mediante Sequelize
- Middlewares para CORS, logging (morgan) y manejo de JSON
- Validación de datos y manejo de errores

## Estructura del proyecto

```
proyecto_backend_002_logist/
├── index.js                 # Punto de entrada de la aplicación
├── package.json
├── src/
│   ├── controllers/         # Controladores para cada entidad
│   │   ├── camionController.js
│   │   ├── camioneroController.js
│   │   ├── camioneroXCamionController.js
│   │   ├── paqueteController.js
│   │   └── provinciaController.js
│   ├── db/
│   │   └── connection.js    # Configuración de conexión a la base de datos
│   ├── models/              # Modelos de Sequelize
│   │   ├── Camion.js
│   │   ├── Camionero.js
│   │   ├── CamioneroXCamion.js
│   │   ├── index.js         # Exportación de modelos y definición de relaciones
│   │   ├── Paquete.js
│   │   └── Provincia.js
│   └── routes/              # Rutas para cada recurso
│       ├── camioneroRoutes.js
│       ├── camionRoutes.js
│       ├── camioneroXCamion.js
│       ├── paquetesRoutes.js
│       └── provinciaRoutes.js
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
   - descripción (string)
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

### Camiones

- `GET /camiones` - Obtener todos los camiones
- `GET /camion-by-id/:id` - Obtener un camión por ID
- `POST /camiones` - Crear un nuevo camión
- `PUT /camiones/:id` - Actualizar un camión existente
- `DELETE /camiones/:id` - Eliminar un camión

### Provincias

- `GET /provincias` - Obtener todas las provincias
- `GET /provincia-by-id/:id` - Obtener una provincia por ID
- `POST /provincias` - Crear una nueva provincia
- `PUT /provincias/:id` - Actualizar una provincia existente
- `DELETE /provincias/:id` - Eliminar una provincia

### Paquetes

- `GET /paquetes` - Obtener todos los paquetes
- `GET /paquete-by-id/:id` - Obtener un paquete por ID
- `POST /paquetes` - Crear un nuevo paquete
- `PUT /paquetes/:id` - Actualizar un paquete existente
- `DELETE /paquetes/:id` - Eliminar un paquete

### Relaciones CamioneroXCamion

- `GET /camionerosXCamiones` - Obtener todas las relaciones
- `GET /CamioneroXCamion-by-id/:id` - Obtener una relación por ID
- `POST /camioneroXCamion` - Crear una nueva relación
- `PUT /camioneroXCamion/:id` - Actualizar una relación existente
- `DELETE /camioneroXCamion/:id` - Eliminar una relación

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
