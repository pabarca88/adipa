<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $title ?? 'ADIPA | Formación Continua' }}</title>
    <meta name="description" content="{{ $metaDescription ?? 'Landing de cursos ADIPA creada con Laravel, Blade, Stylus y jQuery.' }}">
    <meta name="robots" content="index,follow">
    <meta name="author" content="ADIPA">
    <link rel="canonical" href="{{ $canonical ?? url()->current() }}">

    <meta property="og:locale" content="es_CL">
    <meta property="og:type" content="website">
    <meta property="og:title" content="{{ $ogTitle ?? ($title ?? 'ADIPA | Formación Continua') }}">
    <meta property="og:description" content="{{ $ogDescription ?? ($metaDescription ?? 'Landing de cursos ADIPA creada con Laravel, Blade, Stylus y jQuery.') }}">
    <meta property="og:url" content="{{ $ogUrl ?? url()->current() }}">
    <meta property="og:site_name" content="ADIPA">
    <meta property="og:image" content="{{ $ogImage ?? asset('logo-adipa.svg') }}">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $twitterTitle ?? ($ogTitle ?? ($title ?? 'ADIPA | Formación Continua')) }}">
    <meta name="twitter:description" content="{{ $twitterDescription ?? ($ogDescription ?? ($metaDescription ?? 'Landing de cursos ADIPA creada con Laravel, Blade, Stylus y jQuery.')) }}">
    <meta name="twitter:image" content="{{ $twitterImage ?? ($ogImage ?? asset('logo-adipa.svg')) }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
    <a href="#contenido-principal" class="skip-link">Saltar al contenido principal</a>
    @yield('content')

    <script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>
