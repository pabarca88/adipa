# Version B - Laravel

## Demo

https://matriweb.cl/adipa/

## Instrucciones de instalación

```bash
cd VersionB
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan config:clear
```

Si usas Herd u otro manejador local, puedes reemplazar `php` por el binario que corresponda a tu entorno.

Si vas a publicar en una subcarpeta (por ejemplo `https://dominio.com/adipa`), define en `.env`:

```env
APP_BASE_PATH=/adipa
```

## Comandos para ejecutar en desarrollo

Terminal 1 (backend):

```bash
cd VersionB
php artisan serve
```

Terminal 2 (assets Stylus/JS):

```bash
cd VersionB
npm run dev
```

## Comando de build para producción

```bash
cd VersionB
npm run build
```

## Versiones de Node/PHP/Composer utilizadas

- Node.js: `v23.7.0`
- PHP (Herd): `8.4.14`
- Composer: `2.9.2`

## Stack de la versión

- Laravel `11.x`
- Blade (layouts y secciones)
- Stylus como preprocesador CSS
- jQuery para interactividad
- Laravel Mix como build tool
- Nomenclatura CSS BEM
