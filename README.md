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
- **v3** — reestructuración completa siguiendo el flujo pedido por el
  cliente: sección "Our Beauty Treatments" (explicación de cada
  tratamiento antes del precio), "The Grand Menu" (precios), Welcome/
  About Us + Meet the Team, credenciales, testimonios (parafraseados
  de reseñas reales de Google/Yelp), House Rules, banda Book/WhatsApp,
  formulario de preguntas, Get in Touch con mapa de Google embebido.
  Tipografía cambiada a Bodoni Moda (titulares) + Jost (cuerpo). Email
  de contacto actualizado al real (`info@grandcosmeticclinic.com`).

- **v4** — hero con layout partido (foto lateral en vez de fondo a
  pantalla completa), texto corto nuevo ("Refining features. Creating
  balance. A better you."), The Grand Menu rediseñado como carta de
  restaurante de lujo (marco con borde, líneas de puntos entre nombre
  y precio, tipografía centrada), logo con más presencia en la
  sección Welcome. De paso se corrigió un problema de contraste en
  los precios del menú (colores pensados para fondo claro que estaban
  mal en fondo negro).

## Pendiente antes de presentarlo como oficial

- **Fotos del equipo**: no hay fotos reales del Dr. Dehkordi ni de
  Tricia — de momento hay un círculo con iniciales en su lugar. Pedir
  las fotos reales al cliente y sustituir en la sección "Meet the
  Team".
- **Fotos de la clínica**: igual, no hay fotos reales del local
  (exterior/interior). El mapa de Google ya funciona con la dirección
  real.
- **Texto de "Welcome to Grand Cosmetic Clinic"**: el párrafo sobre
  cómo empezó la clínica es un placeholder de marca inventado, NO son
  datos reales — hay que confirmarlo con el cliente o pedirles su
  propia versión.
- **Formulario de preguntas y pop-up de email**: ambos están montados
  visualmente pero no envían nada a ningún sitio todavía. Necesitan un
  servicio de formularios (Formspree, Netlify Forms, etc.) conectado
  antes de publicarse de verdad.
- **WhatsApp**: los enlaces usan el teléfono real de la clínica
  (+1 818 200 7769) asumiendo que ese número tiene WhatsApp activo —
  confirmarlo con el cliente.

## Pendiente / ideas para siguientes iteraciones

- Sustituir el botón "Call to book" por un formulario de contacto propio
  si no se quiere enlazar directamente al teléfono real de la clínica.
- Añadir sección de fotos/antes-después cuando el cliente facilite
  material.
- Conectar el dominio de pruebas y compartir el enlace con la clínica.
