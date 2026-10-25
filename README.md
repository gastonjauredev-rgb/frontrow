# FrontRow

**Be First. Be There.**

FrontRow es una aplicación web orientada al descubrimiento de conciertos y al seguimiento de artistas musicales.

El objetivo del proyecto es desarrollar una plataforma donde los usuarios puedan descubrir eventos, seguir a sus artistas favoritos y recibir notificaciones sobre novedades importantes, especialmente cuando se anuncien conciertos o se habilite la venta de entradas.

## Objetivo del proyecto

FrontRow nace para resolver un problema concreto: muchas personas se enteran demasiado tarde de que sus artistas favoritos anunciaron un concierto o comenzaron a vender entradas.

La aplicación busca centralizar esa información y, en futuras etapas, ofrecer alertas personalizadas que permitan a los usuarios mantenerse informados.

También es un proyecto de desarrollo full stack destinado a aplicar buenas prácticas de arquitectura, organización del código, integración de servicios y desarrollo progresivo de funcionalidades.

## Tecnologías

### Frontend

- React
- Vite
- JavaScript
- React Router
- CSS modular
- ESLint

### Backend y servicios previstos

Las siguientes tecnologías forman parte de la arquitectura planificada, pero todavía no están implementadas:

- Node.js
- Express
- Supabase (PostgreSQL y autenticación)
- Procesos programados para consultar novedades
- Notificaciones push
- Progressive Web App (PWA)

## Funcionalidades implementadas

### Página de inicio

- Presentación de FrontRow y su propuesta de valor.
- Navegación hacia el catálogo de artistas.
- Sección informativa sobre el funcionamiento previsto de la plataforma.

### Catálogo de artistas

- Visualización de artistas mediante componentes reutilizables.
- Búsqueda y filtrado por nombre.
- Datos simulados durante la etapa de desarrollo.

### Catálogo de conciertos

- Visualización de conciertos mediante tarjetas reutilizables.
- Filtrado de eventos futuros y ordenamiento por fecha.
- Representación de diferentes estados de venta de entradas.
- Datos simulados para el desarrollo de la interfaz.

### Navegación y estructura

- Navegación con React Router.
- Rutas anidadas mediante `MainLayout`.
- Header y Footer compartidos.
- Página personalizada para rutas inexistentes (404).
- Estilos responsive organizados por componentes y páginas.

## Funcionalidades planificadas

- Registro e inicio de sesión.
- Seguimiento de artistas favoritos.
- Persistencia de preferencias de usuario.
- Consulta de fuentes de información sobre conciertos.
- Detección de nuevos eventos y cambios en la venta de entradas.
- Notificaciones push personalizadas.
- Instalación de FrontRow como aplicación PWA.
- Integración del frontend con una API propia.

Estas funcionalidades se incorporarán progresivamente y no deben considerarse disponibles en la versión actual.

## Estructura del proyecto

```text
frontrow/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── artists/
│   │   │   ├── concerts/
│   │   │   ├── home/
│   │   │   └── layout/
│   │   ├── mocks/
│   │   ├── pages/
│   │   │   └── errors/
│   │   ├── routes/
│   │   ├── styles/
│   │   │   ├── components/
│   │   │   ├── layout/
│   │   │   └── pages/
│   │   │       └── errors/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

La estructura separa las páginas, los componentes reutilizables, las rutas, los estilos y los datos simulados.

## Instalación y ejecución

### Requisitos

- Node.js
- npm
- Git

### Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd frontrow
```

Reemplazar `<URL_DEL_REPOSITORIO>` por la dirección del repositorio cuando esté publicado.

### Instalar dependencias

```bash
cd frontend
npm install
```

### Iniciar el entorno de desarrollo

```bash
npm run dev
```

Vite mostrará la dirección local donde se encuentra disponible la aplicación.

### Verificar el código

```bash
npm run lint
```

### Generar una versión de producción

```bash
npm run build
```

El resultado se genera en el directorio `frontend/dist/`.

## Estado del desarrollo

**Etapa actual: estructura inicial del frontend.**

La aplicación cuenta con sus primeras páginas, navegación, componentes reutilizables y datos simulados.

Todavía no dispone de autenticación, persistencia de usuarios, integración con una API ni un sistema funcional de alertas.

Los conciertos utilizados durante esta etapa son ficticios y no representan eventos confirmados ni disponibilidad real de entradas.

## Metodología de desarrollo

El proyecto se desarrolla de forma incremental, procurando mantener:

- Separación de responsabilidades.
- Componentes reutilizables.
- Estilos CSS independientes de la lógica JSX.
- Organización modular.
- Validación mediante ESLint y compilación de producción.
- Historial de cambios documentado mediante Git y Conventional Commits.

## Autor

Desarrollado por Gastón Jaureguiberry como proyecto personal de desarrollo full stack y portafolio profesional.

---

**FrontRow — Be First. Be There.**