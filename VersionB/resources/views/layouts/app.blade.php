<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $title ?? 'ADIPA | Formacion continua' }}</title>
    <meta name="description" content="Landing de cursos ADIPA creada con Laravel, Blade, Stylus y jQuery.">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=manrope:400,500,600,700,800|sora:400,500,600,700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
    @yield('content')

    <script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>
