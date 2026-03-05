# Version B - Base Laravel

## Requisitos

- PHP 8.2+
- Composer
- Node.js 18+

## Stack definido para la Version B

- Laravel 11+
- Blade (layouts y secciones)
- Stylus como preprocesador CSS
- jQuery para interactividad
- Laravel Mix como build tool
- BEM para nomenclatura de clases

## Estado de este commit

Este commit deja la estructura base lista, sin la implementacion final de vistas.

- `routes/web.php`: ruta base `Route::view('/', 'home')`
- `resources/views/layouts/app.blade.php`: layout base Blade
- `resources/views/home.blade.php`: placeholder inicial
- `resources/stylus/app.styl`: base Stylus con bloque BEM de ejemplo
- `resources/js/app.js`: setup de jQuery listo para extender
- `webpack.mix.js`: compilacion de `resources/stylus/app.styl` y `resources/js/app.js`

## Instalacion

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
```

## Desarrollo

Terminal 1:

```bash
php artisan serve
```

Terminal 2:

```bash
npm run dev
```
