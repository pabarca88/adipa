@extends('layouts.app')

@php
    $title = 'ADIPA | Cursos de Psicología con Certificado en 2026';
    $metaDescription = 'Explora cursos de psicología, educación y liderazgo con certificación 2026 en ADIPA. Filtra, compara y solicita información en línea.';
    $canonical = url()->current();
    $ogTitle = $title;
    $ogDescription = $metaDescription;
    $ogUrl = $canonical;
    $ogImage = asset('logo-adipa.svg');
    $twitterTitle = $title;
    $twitterDescription = $metaDescription;
    $twitterImage = $ogImage;

    $navItems = ['Cursos', 'Diplomados', 'Recursos', 'Contacto'];
    $categories = ['Todos', 'Psicología Clínica', 'Educación', 'Liderazgo y Bienestar'];
    $sortOptions = ['Todos', 'Mayor Precio', 'Menor Precio', 'Más próximo', 'Menos próximo'];

    $courses = [
        [
            'id' => 1,
            'title' => 'Intervención breve en ansiedad y estrés académico',
            'category' => 'Psicología Clínica',
            'instructor' => 'Dra. Camila Rojas',
            'start_date' => '12 de abril',
            'modality' => 'En vivo',
            'original_price' => 89990,
            'price' => 64990,
            'summary' => 'Herramientas prácticas para abordar casos frecuentes en consulta con adultos jóvenes.',
            'image' => 'https://unsplash.it/640/425?image=100',
        ],
        [
            'id' => 2,
            'title' => 'Actualización en trauma complejo y regulación emocional',
            'category' => 'Psicología Clínica',
            'instructor' => 'Mg. Valentina Pérez',
            'start_date' => '18 de abril',
            'modality' => 'Online',
            'original_price' => 109990,
            'price' => 79990,
            'summary' => 'Un recorrido aplicado por evaluación, formulación clínica y estrategias de intervención.',
            'image' => 'https://unsplash.it/640/425?image=101',
        ],
        [
            'id' => 3,
            'title' => 'Diseño universal para el aprendizaje en aula diversa',
            'category' => 'Educación',
            'instructor' => 'Prof. Martina Salgado',
            'start_date' => '22 de abril',
            'modality' => 'En vivo',
            'original_price' => 75990,
            'price' => 54990,
            'summary' => 'Planifica experiencias inclusivas con estrategias concretas y evaluación flexible.',
            'image' => 'https://unsplash.it/640/425?image=102',
        ],
        [
            'id' => 4,
            'title' => 'Neurodidáctica aplicada a la motivación escolar',
            'category' => 'Educación',
            'instructor' => 'Dr. Diego Mena',
            'start_date' => '27 de abril',
            'modality' => 'Online',
            'original_price' => 82990,
            'price' => 59990,
            'summary' => 'Conecta evidencia, emoción y aprendizaje para mejorar el compromiso en clases.',
            'image' => 'https://unsplash.it/640/425?image=103',
        ],
        [
            'id' => 5,
            'title' => 'Liderazgo colaborativo para equipos de salud',
            'category' => 'Liderazgo y Bienestar',
            'instructor' => 'Ps. Fernanda Gatica',
            'start_date' => '03 de mayo',
            'modality' => 'Presencial',
            'original_price' => 129990,
            'price' => 94990,
            'summary' => 'Desarrolla conversaciones de alto impacto, coordinación y cultura de confianza.',
            'image' => 'https://unsplash.it/640/425?image=104',
        ],
        [
            'id' => 6,
            'title' => 'Prevención del burnout y bienestar organizacional',
            'category' => 'Liderazgo y Bienestar',
            'instructor' => 'Mg. Sebastian Leal',
            'start_date' => '08 de mayo',
            'modality' => 'Online',
            'original_price' => 96990,
            'price' => 69990,
            'summary' => 'Métricas, intervenciones y prácticas sostenibles para equipos con alta demanda.',
            'image' => 'https://unsplash.it/640/425?image=106',
        ],
        [
            'id' => 7,
            'title' => 'Evaluación clínica infantojuvenil con enfoque integrativo',
            'category' => 'Psicología Clínica',
            'instructor' => 'Dra. Antonia Fuentes',
            'start_date' => '11 de mayo',
            'modality' => 'En vivo',
            'original_price' => 99990,
            'price' => 73990,
            'summary' => 'Integra entrevista, escalas y devolución a familias desde una mirada actual.',
            'image' => 'https://unsplash.it/640/425?image=107',
        ],
        [
            'id' => 8,
            'title' => 'Estrategias de convivencia escolar y mediación',
            'category' => 'Educación',
            'instructor' => 'Prof. Nicolás Verdugo',
            'start_date' => '17 de mayo',
            'modality' => 'Presencial',
            'original_price' => 78990,
            'price' => 56990,
            'summary' => 'Modelos preventivos y protocolos de acción para contextos educativos complejos.',
            'image' => 'https://unsplash.it/640/425?image=108',
        ],
        [
            'id' => 9,
            'title' => 'Evaluación neuropsicológica en adultos mayores',
            'category' => 'Psicología Clínica',
            'instructor' => 'Dra. Javiera Molina',
            'start_date' => '24 de mayo',
            'modality' => 'Online',
            'original_price' => 119990,
            'price' => 86990,
            'summary' => 'Protocolos de evaluación, interpretación de resultados y comunicación clínica en contextos de envejecimiento.',
            'image' => 'https://unsplash.it/640/425?image=109',
        ],
        [
            'id' => 10,
            'title' => 'Intervenciónes breves en crisis y primeros auxilios psicológicos',
            'category' => 'Psicología Clínica',
            'instructor' => 'Ps. Tomás Herrera',
            'start_date' => '29 de mayo',
            'modality' => 'En vivo',
            'original_price' => 94990,
            'price' => 68990,
            'summary' => 'Modelos de respuesta inmediata, contención y derivación segura para distintos escenarios de emergencia.',
            'image' => 'https://unsplash.it/640/425?image=110',
        ],
        [
            'id' => 11,
            'title' => 'Evaluación auténtica y retroalimentación efectiva en educación superior',
            'category' => 'Educación',
            'instructor' => 'Mg. Carla Bustos',
            'start_date' => '02 de junio',
            'modality' => 'Online',
            'original_price' => 82990,
            'price' => 58990,
            'summary' => 'Diseña instrumentos y estrategias de feedback que mejoren aprendizaje y compromiso en aula universitaria.',
            'image' => 'https://unsplash.it/640/425?image=111',
        ],
        [
            'id' => 12,
            'title' => 'Planificación didáctica inclusiva con apoyo de tecnologías educativas',
            'category' => 'Educación',
            'instructor' => 'Prof. Daniela Muñoz',
            'start_date' => '07 de junio',
            'modality' => 'Presencial',
            'original_price' => 88990,
            'price' => 62990,
            'summary' => 'Integra herramientas digitales y metodologías activas para atender diversidad y participación en clase.',
            'image' => 'https://unsplash.it/640/425?image=112',
        ],
        [
            'id' => 13,
            'title' => 'Comunicación estratégica para líderes de equipos interdisciplinarios',
            'category' => 'Liderazgo y Bienestar',
            'instructor' => 'Mg. Renato Díaz',
            'start_date' => '12 de junio',
            'modality' => 'En vivo',
            'original_price' => 99990,
            'price' => 71990,
            'summary' => 'Técnicas para conversaciones difíciles, alineamiento de objetivos y coordinación efectiva en equipos complejos.',
            'image' => 'https://unsplash.it/640/425?image=113',
        ],
        [
            'id' => 14,
            'title' => 'Cultura organizacional saludable y prevención de riesgos psicosociales',
            'category' => 'Liderazgo y Bienestar',
            'instructor' => 'Ps. Francisca León',
            'start_date' => '18 de junio',
            'modality' => 'Online',
            'original_price' => 104990,
            'price' => 75990,
            'summary' => 'Herramientas para diagnóstico de clima, diseño de acciones preventivas y seguimiento de bienestar laboral.',
            'image' => 'https://unsplash.it/640/425?image=114',
        ],
    ];

    $footerLinks = ['Cursos', 'Diplomados', 'Recursos', 'Contacto'];
    $year = date('Y');
@endphp

@section('content')
    <main id="contenido-principal" tabindex="-1" class="landing">
        <header class="site-header">
            <div class="container site-header__inner">
                <a href="#top" class="site-header__brand" aria-label="ADIPA">
                    <img src="{{ asset('logo-adipa.svg') }}" alt="ADIPA" width="172" height="33">
                </a>

                <nav class="site-header__nav" aria-label="Principal">
                    @foreach ($navItems as $item)
                        <a href="{{ $item === 'Contacto' ? '#contacto' : '#cursos' }}" class="site-header__link">{{ $item }}</a>
                    @endforeach
                </nav>

                <div class="site-header__actions">
                    <button type="button" class="theme-toggle js-theme-toggle" aria-label="Cambiar a modo oscuro" aria-pressed="false">
                        <span class="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true">
                            <svg viewBox="0 0 24 24" class="theme-toggle__svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3.5V5.5M12 18.5V20.5M5.99 5.99L7.4 7.4M16.6 16.6L18.01 18.01M3.5 12H5.5M18.5 12H20.5M5.99 18.01L7.4 16.6M16.6 7.4L18.01 5.99M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <span class="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" class="theme-toggle__svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.25 14.31A8.75 8.75 0 1 1 9.69 3.75C9.58 4.28 9.52 4.82 9.52 5.38C9.52 9.74 13.06 13.28 17.42 13.28C17.98 13.28 18.53 13.22 19.06 13.11C19.44 13.03 19.88 13.36 19.87 13.75C19.86 13.95 19.99 14.17 20.25 14.31Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </button>
                    <a href="#contacto" class="button button--primary">Iniciar Sesión</a>
                </div>

                <div class="site-header__mobile-actions">
                    <button type="button" class="theme-toggle js-theme-toggle" aria-label="Cambiar a modo oscuro" aria-pressed="false">
                        <span class="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true">
                            <svg viewBox="0 0 24 24" class="theme-toggle__svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3.5V5.5M12 18.5V20.5M5.99 5.99L7.4 7.4M16.6 16.6L18.01 18.01M3.5 12H5.5M18.5 12H20.5M5.99 18.01L7.4 16.6M16.6 7.4L18.01 5.99M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <span class="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" class="theme-toggle__svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.25 14.31A8.75 8.75 0 1 1 9.69 3.75C9.58 4.28 9.52 4.82 9.52 5.38C9.52 9.74 13.06 13.28 17.42 13.28C17.98 13.28 18.53 13.22 19.06 13.11C19.44 13.03 19.88 13.36 19.87 13.75C19.86 13.95 19.99 14.17 20.25 14.31Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </button>
                    <button type="button" class="menu-toggle js-menu-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-nav-panel">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>

            <div class="site-header__mobile-panel" id="mobile-nav-panel" aria-hidden="true">
                <div class="container site-header__mobile-inner">
                    <nav class="site-header__mobile-nav" aria-label="Principal movil">
                        @foreach ($navItems as $item)
                            <a href="{{ $item === 'Contacto' ? '#contacto' : '#cursos' }}" class="site-header__mobile-link">{{ $item }}</a>
                        @endforeach
                    </nav>
                    <a href="#contacto" class="button button--primary button--full">Iniciar Sesión</a>
                </div>
            </div>
        </header>

        <section id="top" class="hero">
            <div class="hero__overlay" aria-hidden="true"></div>
            <div class="container hero__inner">
                <div class="hero__content">
                    <span class="hero__eyebrow">Formación Continua</span>
                    <h1 class="hero__title">Cursos de Psicología con Certificado en 2026</h1>
                    <p class="hero__text">Vive la mejor experiencia de aprendizaje y potencia tus conocimientos a traves de nuestros cursos y diplomados.</p>
                    <div class="hero__actions">
                        <a href="#cursos" class="button button--light">Explorar cursos</a>
                        <a href="#contacto" class="button button--outline-light">Solicitar información</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="container catalog-layout" aria-label="Catálogo de cursos">
            <aside class="filters" aria-labelledby="categorias-heading">
                <div class="filters__panel">
                    <p class="filters__eyebrow">Explora</p>
                    <h2 id="categorias-heading" class="filters__title">Cursos que te permitirán potenciar tu carrera.</h2>
                    <div class="filters__list" role="group" aria-label="Filtrar cursos por categoria">
                        @foreach ($categories as $category)
                            <button
                                type="button"
                                class="filters__chip {{ $loop->first ? 'is-active' : '' }}"
                                data-category="{{ $category }}"
                                aria-pressed="{{ $loop->first ? 'true' : 'false' }}"
                                aria-current="{{ $loop->first ? 'page' : '' }}"
                            >
                                <span>{{ $category }}</span>
                            </button>
                        @endforeach
                    </div>
                </div>
            </aside>

            <section id="cursos" class="courses" aria-labelledby="cursos-heading">
                <div class="courses__header">
                    <div>
                        <h2 id="cursos-heading" class="courses__title">Catálogo destacado</h2>
                        <p class="courses__subtitle"><span id="courses-count">{{ count($courses) }}</span> cursos disponibles con enfoque práctico y docentes especializados.</p>
                    </div>

                    <div class="sort js-sort">
                        <p class="sort__label">Ordenar por</p>
                        <button type="button" class="sort__trigger js-sort-trigger" aria-expanded="false" aria-haspopup="listbox" aria-controls="sort-options-list">
                            <span class="js-sort-value">Todos</span>
                            <svg viewBox="0 0 20 20" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 12.25L10 6.75L15.5 12.25" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <div id="sort-options-list" class="sort__options" role="listbox" aria-label="Opciones de orden" aria-hidden="true">
                            @foreach ($sortOptions as $option)
                                <button type="button" class="sort__option js-sort-option" data-sort="{{ $option }}" role="option" tabindex="{{ $loop->first ? '0' : '-1' }}" aria-selected="{{ $loop->first ? 'true' : 'false' }}">{{ $option }}</button>
                            @endforeach
                        </div>
                    </div>
                </div>

                <div class="courses__grid js-courses-grid">
                    @foreach ($courses as $course)
                        <article
                            class="course-card js-course-card"
                            data-category="{{ $course['category'] }}"
                            data-price="{{ $course['price'] }}"
                            data-start-date="{{ $course['start_date'] }}"
                        >
                            <div class="course-card__media">
                                <img src="{{ $course['image'] }}" alt="Imagen referencial del curso {{ $course['title'] }}" loading="lazy" decoding="async">
                                <div class="course-card__overlay"></div>
                                <div class="course-card__tags">
                                    <span class="course-card__category">{{ $course['category'] }}</span>
                                    <span class="course-card__modality">
                                        <span class="course-card__dot {{ $course['modality'] === 'Online' ? 'is-online' : ($course['modality'] === 'En vivo' ? 'is-live' : 'is-presential') }}"></span>
                                        {{ $course['modality'] }}
                                    </span>
                                </div>
                            </div>

                            <div class="course-card__body">
                                <div class="course-card__content">
                                    <p class="course-card__start">Inicio: {{ $course['start_date'] }}</p>
                                    <h3 class="course-card__title">{{ $course['title'] }}</h3>
                                    <p class="course-card__summary">{{ $course['summary'] }}</p>
                                    <p class="course-card__instructor">Instructor: <span>{{ $course['instructor'] }}</span></p>
                                </div>

                                <div class="course-card__footer">
                                    <div class="course-card__prices">
                                        <p class="course-card__price course-card__price--old">${{ number_format($course['original_price'], 0, ',', '.') }}</p>
                                        <p class="course-card__price course-card__price--current">${{ number_format($course['price'], 0, ',', '.') }}</p>
                                    </div>
                                    <a href="#" class="button button--primary button--small" aria-label="Ver detalles del curso {{ $course['title'] }}">Ver curso</a>
                                </div>
                            </div>
                        </article>
                    @endforeach
                </div>

                <nav class="pagination js-pagination" aria-label="Paginación de cursos">
                    <button type="button" class="pagination__btn js-page-prev" aria-label="Ir a la página anterior">Anterior</button>
                    <div class="pagination__numbers js-page-numbers"></div>
                    <button type="button" class="pagination__btn js-page-next" aria-label="Ir a la página siguiente">Siguiente</button>
                </nav>
            </section>
        </section>

        <section class="container contact-wrap">
            <section id="contacto" class="contact" aria-labelledby="contacto-heading">
                <div class="contact__layout">
                    <div>
                        <h2 id="contacto-heading" class="contact__title">Hablemos sobre tu próximo curso</h2>
                        <p class="contact__text">Si necesitas orientación para elegir un programa, deja tus datos y te escribiremos con recomendaciones según tu perfil profesional.</p>
                        <div class="contact__notes">
                            <p class="contact__note">Respuesta estimada: dentro de 24 horas hábiles.</p>
                            <p class="contact__note">Modalidades disponibles: online asincrónico, clases en vivo y talleres presenciales.</p>
                        </div>
                    </div>

                    <form id="contact-form" class="contact-form" novalidate>
                        <div id="form-success" class="contact-form__success" role="status" aria-live="polite" hidden>Tu mensaje fue enviado correctamente. Te contactaremos pronto.</div>

                        <div class="contact-form__field">
                            <label for="name">Nombre</label>
                            <input id="name" name="name" type="text" placeholder="Tu nombre">
                            <p class="contact-form__error" id="name-error" aria-live="polite"></p>
                        </div>

                        <div class="contact-form__field">
                            <label for="email">Email</label>
                            <input id="email" name="email" type="email" placeholder="tu@email.com">
                            <p class="contact-form__error" id="email-error" aria-live="polite"></p>
                        </div>

                        <div class="contact-form__field">
                            <label for="message">Mensaje</label>
                            <textarea id="message" name="message" rows="5" placeholder="Cuentanos que tipo de curso buscas."></textarea>
                            <p class="contact-form__error" id="message-error" aria-live="polite"></p>
                        </div>

                        <button type="submit" class="button button--primary button--full">Enviar consulta</button>
                    </form>
                </div>
            </section>
        </section>

        <footer class="site-footer">
            <div class="container site-footer__inner">
                <div>
                    <img src="{{ asset('logo-adipa.svg') }}" alt="ADIPA" width="110" height="21">
                    <p class="site-footer__description">Formación aplicada para profesionales que buscan especializarse con criterios actuales y experiencia docente relevante.</p>
                </div>

                <div class="site-footer__columns">
                    <div>
                        <h3>Links</h3>
                        <ul>
                            @foreach ($footerLinks as $link)
                                <li><a href="{{ $link === 'Contacto' ? '#contacto' : '#cursos' }}">{{ $link }}</a></li>
                            @endforeach
                        </ul>
                    </div>
                    <div>
                        <h3>Redes</h3>
                        <ul class="site-footer__socials">
                            <li>
                                <a href="#" aria-label="LinkedIn">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" class="site-footer__social-icon" fill="currentColor">
                                        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.28 4.97c0 1.08.87 1.97 1.94 1.97h.03A1.98 1.98 0 0 0 7.22 4.97 1.97 1.97 0 0 0 5.25 3ZM20.44 13.07c0-3.46-1.85-5.07-4.31-5.07-1.99 0-2.88 1.1-3.38 1.87V8.5H9.37c.04.91 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.67.88-1.37 1.9-1.37 1.34 0 1.88 1.03 1.88 2.54V20h3.38v-6.93Z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Instagram">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" class="site-footer__social-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.25" stroke="currentColor" stroke-width="1.8" />
                                        <circle cx="12" cy="12" r="4.1" stroke="currentColor" stroke-width="1.8" />
                                        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="YouTube">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" class="site-footer__social-icon" fill="currentColor">
                                        <path d="M21.58 7.19a2.98 2.98 0 0 0-2.1-2.11C17.63 4.5 12 4.5 12 4.5s-5.63 0-7.48.58a2.98 2.98 0 0 0-2.1 2.11A31.2 31.2 0 0 0 2 12a31.2 31.2 0 0 0 .42 4.81 2.98 2.98 0 0 0 2.1 2.11c1.85.58 7.48.58 7.48.58s5.63 0 7.48-.58a2.98 2.98 0 0 0 2.1-2.11A31.2 31.2 0 0 0 22 12a31.2 31.2 0 0 0-.42-4.81ZM10.2 15.36V8.64L15.82 12l-5.62 3.36Z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="site-footer__bottom">
                <p class="container">© {{ $year }} ADIPA. Todos los derechos reservados.</p>
            </div>
        </footer>
    </main>
@endsection
