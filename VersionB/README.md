# Version B - Laravel

## Instrucciones de instalación

```bash
cd VersionB
composer install
npm install
cp .env.example .env
'/Users/pabloabarca/Library/Application Support/Herd/bin/php' artisan key:generate
```

Si usas Herd, ejecuta PHP con su ruta. En otro entorno, usa simplemente `php`.

## Comandos para ejecutar en desarrollo

Terminal 1 (backend):

```bash
cd VersionB
'/Users/pabloabarca/Library/Application Support/Herd/bin/php' artisan serve
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
