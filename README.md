PlatformWorksWeb
<p align="center"> <img src="https://miro.medium.com/v2/resize:fit:1055/1*dZA2XUPPibLK59U4-PK82Q.png" width="400"> </p>
Descripción4

PlatformWorksWeb es un proyecto de frontend en React, TypeScript y Vite, diseñado bajo los principios de arquitectura limpia. La aplicación utiliza una arquitectura por capas para asegurar una separación clara de responsabilidades, mejorando la mantenibilidad y escalabilidad del código.
Tecnologías Utilizadas

    React
    TypeScript
    Vite
    Yarn

Requisitos

    Node.js (v16 o superior)
    Yarn

Instalación

    Clona el repositorio:

git clone https://github.com/usuario/your-project-name.git
cd your-project-name

Instala las dependencias necesarias:

    yarn install

Configuración del Entorno

    Crea un archivo .env en el directorio raíz del proyecto.

    Agrega las variables de entorno necesarias, como la URL base de la API y otras configuraciones sensibles.

    Ejemplo:

    VITE_API_BASE_URL=http://tu_api_base_url

    Nota: Asegúrate de no compartir el archivo .env públicamente.

Ejecución
Modo Desarrollo

Para iniciar la aplicación en modo de desarrollo:

yarn dev

Compilación en Producción

Para compilar el proyecto para un entorno de producción:

yarn build

El servidor se ejecutará en http://localhost:3000 de forma predeterminada.
Estructura del Proyecto

El proyecto sigue una arquitectura en capas organizada en directorios para mantener un código limpio y modular.

src/
│   App.tsx
│   main.tsx
│   vite-env.d.ts
├───app
│   ├───adapters
│   │   ├───guards
│   │   │       AuthGuard.tsx
│   │   │       NotFound.tsx 
│   │   ├───mappers
│   │   │       UserMapper.ts
│   │   └───utils
│   │       └───error
│   │               ErrorHandling.ts
│   ├───components
│   │   ├───globals
│   │   ├───shared
│   │   └───views
│   ├───domain
│   │   ├───hooks
│   │   ├───models
│   │   ├───redux
│   │   └───repository
│   └───services
├───assets
├───config
└───styles

Descripción de Carpetas

    app/adapters: Contiene adaptadores para interactuar con el dominio, incluyendo guardias, mapeadores y utilidades.
        guards: Lógica de protección de rutas.
        mappers: Transformadores de datos.
        utils/error: Manejo de errores.
    app/components: Contiene los componentes reutilizables.
        globals: Elementos de diseño global como paletas de color y layout.
        shared: Componentes compartidos (botones, contenedores, formularios).
        views: Componentes que representan las vistas de la aplicación.
    app/domain: Lógica central de la aplicación.
        hooks: Custom hooks para la gestión de lógica de negocio.
        models: Modelos de datos de dominio.
        redux: Configuración de Redux para el manejo del estado global.
        repository: Repositorios que gestionan la comunicación con los servicios.
    app/services: Servicios que realizan llamadas a la API externa.
    assets: Recursos estáticos como imágenes y estilos.
    config: Configuración de rutas y otros ajustes globales.
    styles: Estilos globales y variables de estilo.

Scripts Disponibles

    dev: Inicia la aplicación en modo de desarrollo.
    build: Compila el proyecto para producción.
    preview: Previsualiza la aplicación en producción.
    lint: Ejecuta ESLint para verificar la sintaxis del código.
    format: Formatea el código con Prettier.

Ejemplo de uso:

yarn lint

Contribución

Si deseas contribuir, por favor sigue estos pasos:

    Realiza un fork del proyecto.
    Crea una rama nueva (por ejemplo, git checkout -b feature/nueva-funcionalidad).
    Realiza tus cambios y haz commit (git commit -m 'Agrego nueva funcionalidad').
    Haz push a la rama (git push origin feature/nueva-funcionalidad).
    Abre un Pull Request.

Contacto

Encargado del Proyecto: Víctor Arrys
Correo Electrónico: vctmanuel.arrys@gmail.com
Estado del Proyecto

En preproducción.
Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.
