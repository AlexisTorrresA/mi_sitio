# AlexisTorresLabs.com — portfolio bilingüe

Sitio estático en español e inglés, responsive, sin framework y listo para desplegar.

## Estructura
- `index.html`: español
- `en/index.html`: English
- `assets/styles.css`: diseño
- `assets/site.js`: tema/animaciones
- `Dockerfile` + `nginx.conf`: despliegue Docker
- `sitemap.xml`, `robots.txt`, `site.webmanifest`: SEO/PWA básico

## Opción 1 — Hosting estático
Sube el contenido completo de esta carpeta a la raíz pública del dominio. Mantén la carpeta `en/` y `assets/`.

## Opción 2 — Docker / Y700
```bash
docker build -t alexistorreslabs-site .
docker run -d --name alexistorreslabs-site --restart unless-stopped -p 127.0.0.1:8088:80 alexistorreslabs-site
```
Luego apunta Caddy al contenedor/puerto correspondiente. Si tu automatización Y700 toma repositorios con `Dockerfile`, puedes subir este proyecto a un repo y dejar que el pipeline lo construya.

Ejemplo Caddy (ajústalo a tu red):
```caddy
alexistorreslabs.com, www.alexistorreslabs.com {
  reverse_proxy 127.0.0.1:8088
}
```

## Antes de publicar
1. Revisa fechas y nombres exactos de programas académicos.
2. Si quieres, reemplaza la foto remota de GitHub por una foto profesional local.
3. Agrega un CV PDF cuando tengas la versión definitiva.
4. Si publicas nuevos proyectos, duplica una `project-card` en ambos idiomas.

## Enlaces configurados
- GitHub: https://github.com/AlexisTorrresA
- LinkedIn: https://www.linkedin.com/in/alexis-torres87/
- Email: alexis.torres.alvarez@gmail.com
