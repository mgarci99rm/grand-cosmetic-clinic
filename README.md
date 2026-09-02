# Grand Cosmetic Clinic — Concept Redesign

Rediseño conceptual de la web de Grand Cosmetic Clinic (Studio City, CA).
Sitio estático (HTML + CSS + JS, sin dependencias ni build), pensado para
publicarse en un dominio de pruebas y, una vez aprobado por el cliente,
migrarlo a su dominio oficial.

## Estructura del proyecto

```
grand-cosmetic-clinic/
├── index.html        # Página única con todas las secciones (ancla por sección)
├── css/
│   └── styles.css    # Todos los estilos
├── js/
│   └── main.js        # Menú móvil (toggle)
├── assets/
│   └── logo.png       # Logo real de la clínica
└── README.md
```

## Cómo verla en local

No necesitas ningún servidor ni instalación. Basta con abrir `index.html`
directamente en el navegador, o usar la extensión **Live Server** de VS Code
(clic derecho sobre `index.html` → "Open with Live Server") para recarga
automática mientras editas.

## Cómo publicarla (dominio de pruebas)

1. Crea una cuenta gratuita en [Netlify](https://www.netlify.com) o
   [Vercel](https://vercel.com).
2. Arrastra esta carpeta completa (o conecta el repositorio de Git) para
   desplegarla. Te dará una URL pública tipo `nombre.netlify.app`.
3. Si ya has comprado un dominio (por ejemplo en IONOS), añádelo como
   dominio personalizado en el panel de Netlify/Vercel y actualiza los
   registros DNS en el panel de tu proveedor del dominio.

## Notas de contenido

- Todo el texto está en inglés porque es el idioma real de la clínica y de
  sus pacientes en Los Ángeles.
- Los precios y datos de contacto están tomados de la web real de la
  clínica; el texto ha sido reescrito, no copiado literalmente.
- El email de contacto (`info@example-domain.com`) es un placeholder —
  sustitúyelo por el correo real del dominio de pruebas.
- El logo (`assets/logo.png`) es el logo real de la clínica, facilitado
  por el cliente.
- Las 3 fotografías (hero, equipo, tratamientos) son imágenes de stock
  libres de derechos (licencia Unsplash) cargadas por URL externa, no
  incluidas en `assets/`. Si algún día se cae ese enlace o se quiere
  independencia total de internet, hay que descargarlas y guardarlas
  en `assets/` y actualizar las rutas en `css/styles.css` e
  `index.html`.

## Historial de versiones

- **v1** — primer concepto, paleta rosa-porcelana/burdeos, sin fotos.
- **v2** — paleta negro + dorado (a partir del logo real del cliente),
  fotografía real en hero/equipo/tratamientos, franja de confianza con
  estadísticas, más secciones alternando fondo negro/marfil.

## Pendiente / ideas para siguientes iteraciones

- Sustituir el botón "Call to book" por un formulario de contacto propio
  si no se quiere enlazar directamente al teléfono real de la clínica.
- Añadir sección de fotos/antes-después cuando el cliente facilite
  material.
- Conectar el dominio de pruebas y compartir el enlace con la clínica.
