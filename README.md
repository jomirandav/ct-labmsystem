# Pokémon TCG API y Frontend

Pequeño aplicativo web que se conecta a un backend para consumir API REST, alimentada con base de datos proporcionada, que muestra los sets de cartas Pokémon de la serie "Scarlet & Violet". El aplicativo permite:
- Listar los diferentes sets de cartas
- Listar las cartas asociadas a cada set
- Acceder a vista individual de cada carta con su información asociada
	- Acceder a la web de 2 mercados con los precios de la carta


## Instrucciones

### Requisitos

Para levantar el proyecto es necesario contar con una instalación de Docker y Docker Compose, además de Node.js (desarrollado con latest version) para la ejecución del frontend.

### Ejecución
 
Para acceder al aplicativo se debe ejecutar el siguiente comando en consola para que docker compose genere los contenedores necesarios para la base de datos y el backend:

 ```docker compose up --build```

Cuando se cuente con los contenedores creados e iniciados, se procede a ejecutar el comando para levantar el frontend:

 ```npm run front```

- Para solo iniciar los contenedores previamente creados se ejecuta el comando sin el flag de build:

 ```docker compose up```

 
 Se accede al aplicativo en 

 	https://localhost:3000/
 

## Stack técnico, librerías, paquetes.

**Entorno**

- Desarrollo en local en Ubuntu Linux 22.04
- VSCode
- Contenedores Docker / Docker Compose, Docker CLI y Desktop

**Backend**

- Base de datos PostgreSQL
- Express / Node.js
	- Libreria pg para conectar con PostgreSQL.
	- Paquete cors para conectar backend y frontend en dominios separados.
	- 
**Frontend**

- Next.js / React
	- App router
	- Fetch API
- Tailwind CSS


### Notas

- Se incluye carpeta de scripts con el backup proporcionado de la base de datos y script de shell para ejecutar comandos de psql para interactuar con Postgres. 
	- Este script de shell incluye la creación de un rol en la base de datos puesto que al restaurar el backup en el contenedor de postgres, se genera un error por no existir un rol contenido en el archivo sql. Luego de esto se pobla la base de datos con el backup.


## Deuda técnica / mejoras

En honor al tiempo, quedan pendientes las siguientes mejoras:
- Muestra de información detallada de cada set.
- Paginación o gestión de peticiones para la gran cantidad de cartas a mostrar por cada set, por lo que se decidió limitar a 20 cartas en la query del segundo endpoint.
- Buscador/filtro de cartas en frontend.
- Mejora de estilos!
- Variables de entorno gestionadas con módulo dotenv, se dejó fuera para facilitar el uso del script de shell.
- Limpieza y refactor de código.
- Despliegue del aplicativo a través de Vercel.