import $ from 'jquery';

window.$ = window.jQuery = $;

$(function () {
    const PAGE_SIZE = 6;
    const monthMap = {
        enero: 0,
        febrero: 1,
        marzo: 2,
        abril: 3,
        mayo: 4,
        junio: 5,
        julio: 6,
        agosto: 7,
        septiembre: 8,
        octubre: 9,
        noviembre: 10,
        diciembre: 11,
    };

    const $html = $('html');
    const $themeToggles = $('.js-theme-toggle');
    const $menuToggle = $('.js-menu-toggle');
    const $mobilePanel = $('#mobile-nav-panel');

    const $filterButtons = $('.filters__chip');
    const $cards = $('.js-course-card');
    const $grid = $('.js-courses-grid');
    const $coursesCount = $('#courses-count');

    const $sort = $('.js-sort');
    const $sortTrigger = $('.js-sort-trigger');
    const $sortOptions = $('.js-sort-option');
    const $sortValue = $('.js-sort-value');

    const $pagePrev = $('.js-page-prev');
    const $pageNext = $('.js-page-next');
    const $pageNumbers = $('.js-page-numbers');

    const $form = $('#contact-form');
    const $success = $('#form-success');

    let selectedCategory = 'Todos';
    let selectedSort = 'Todos';
    let currentPage = 1;

    function parseCourseDate(value) {
        const parts = String(value).toLowerCase().split(' ');
        const day = Number(parts[0]) || 1;
        const month = monthMap[parts[2]] ?? 0;
        return new Date(2026, month, day).getTime();
    }

    function getFilteredAndSortedCards() {
        const cards = $cards.toArray().filter((card) => {
            const category = $(card).data('category');
            return selectedCategory === 'Todos' || category === selectedCategory;
        });

        cards.sort((left, right) => {
            const leftPrice = Number($(left).data('price'));
            const rightPrice = Number($(right).data('price'));
            const leftDate = parseCourseDate($(left).data('start-date'));
            const rightDate = parseCourseDate($(right).data('start-date'));

            switch (selectedSort) {
                case 'Mayor Precio':
                    return rightPrice - leftPrice;
                case 'Menor Precio':
                    return leftPrice - rightPrice;
                case 'Mas proximo':
                    return leftDate - rightDate;
                case 'Menos proximo':
                    return rightDate - leftDate;
                default:
                    return 0;
            }
        });

        return cards;
    }

    function renderPagination(totalPages) {
        $pageNumbers.empty();

        for (let page = 1; page <= totalPages; page += 1) {
            const isActive = page === currentPage;
            const $btn = $('<button/>', {
                type: 'button',
                class: `pagination__number${isActive ? ' is-active' : ''}`,
                text: page,
                'aria-label': `Ir a la pagina ${page}`,
                'aria-current': isActive ? 'page' : undefined,
            });

            $btn.on('click', function () {
                currentPage = page;
                renderCourses();
                const top = $('#cursos').offset()?.top ?? 0;
                window.scrollTo({ top: top - 96, behavior: 'smooth' });
            });

            $pageNumbers.append($btn);
        }

        $pagePrev.prop('disabled', currentPage === 1);
        $pageNext.prop('disabled', currentPage === totalPages);
    }

    function renderCourses() {
        const cards = getFilteredAndSortedCards();
        const totalPages = Math.max(1, Math.ceil(cards.length / PAGE_SIZE));

        if (currentPage > totalPages) {
            currentPage = totalPages;
        }

        $cards.hide();

        cards.forEach((card, index) => {
            $(card).css('animation-delay', `${index * 34}ms`);
        });

        const start = (currentPage - 1) * PAGE_SIZE;
        const visibleCards = cards.slice(start, start + PAGE_SIZE);

        cards.forEach((card) => $grid.append(card));
        visibleCards.forEach((card) => $(card).show());

        $coursesCount.text(cards.length);
        renderPagination(totalPages);
    }

    function applyTheme(theme) {
        $html.attr('data-theme', theme);
        $themeToggles.attr('aria-pressed', theme === 'dark' ? 'true' : 'false');
        window.localStorage.setItem('theme', theme);
    }

    function showFieldError(name, message) {
        const $field = $form.find(`[name="${name}"]`);
        const $error = $(`#${name}-error`);

        $field.addClass('is-invalid').attr('aria-invalid', 'true').attr('aria-describedby', `${name}-error`);
        $error.text(message);
    }

    function clearFieldError(name) {
        const $field = $form.find(`[name="${name}"]`);
        const $error = $(`#${name}-error`);

        $field.removeClass('is-invalid').attr('aria-invalid', 'false').removeAttr('aria-describedby');
        $error.text('');
    }

    function validateField(name) {
        const value = $.trim($form.find(`[name="${name}"]`).val());

        if (name === 'name' && value.length < 2) {
            showFieldError(name, 'Ingresa un nombre con al menos 2 caracteres.');
            return false;
        }

        if (name === 'email') {
            if (!value) {
                showFieldError(name, 'El email es obligatorio.');
                return false;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                showFieldError(name, 'Ingresa un email valido.');
                return false;
            }
        }

        if (name === 'message' && value.length < 10) {
            showFieldError(name, 'El mensaje debe tener al menos 10 caracteres.');
            return false;
        }

        clearFieldError(name);
        return true;
    }

    const savedTheme = window.localStorage.getItem('theme');
    applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

    $themeToggles.on('click', function () {
        const current = $html.attr('data-theme') === 'dark' ? 'dark' : 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    $menuToggle.on('click', function () {
        const isOpen = $(this).hasClass('is-open');
        $(this).toggleClass('is-open', !isOpen).attr('aria-expanded', !isOpen ? 'true' : 'false');
        $mobilePanel.toggleClass('is-open', !isOpen).attr('aria-hidden', !isOpen ? 'false' : 'true');
    });

    $filterButtons.on('click', function () {
        selectedCategory = $(this).data('category');
        currentPage = 1;

        $filterButtons.removeClass('is-active').attr('aria-pressed', 'false').attr('aria-current', 'false');
        $(this).addClass('is-active').attr('aria-pressed', 'true').attr('aria-current', 'page');

        renderCourses();
    });

    $sortTrigger.on('click', function () {
        const isOpen = $sort.hasClass('is-open');
        $sort.toggleClass('is-open', !isOpen);
        $(this).attr('aria-expanded', !isOpen ? 'true' : 'false');
        $('#sort-options-list').attr('aria-hidden', !isOpen ? 'false' : 'true');
    });

    $sortOptions.on('click', function () {
        selectedSort = $(this).data('sort');
        currentPage = 1;

        $sortOptions.attr('aria-selected', 'false');
        $(this).attr('aria-selected', 'true');
        $sortValue.text(selectedSort);

        $sort.removeClass('is-open');
        $sortTrigger.attr('aria-expanded', 'false');
        $('#sort-options-list').attr('aria-hidden', 'true');

        renderCourses();
    });

    $(document).on('mousedown', function (event) {
        if (!$sort[0].contains(event.target)) {
            $sort.removeClass('is-open');
            $sortTrigger.attr('aria-expanded', 'false');
            $('#sort-options-list').attr('aria-hidden', 'true');
        }
    });

    $(window).on('keydown', function (event) {
        if (event.key === 'Escape') {
            $sort.removeClass('is-open');
            $sortTrigger.attr('aria-expanded', 'false');
            $('#sort-options-list').attr('aria-hidden', 'true');

            $menuToggle.removeClass('is-open').attr('aria-expanded', 'false');
            $mobilePanel.removeClass('is-open').attr('aria-hidden', 'true');
        }
    });

    $pagePrev.on('click', function () {
        if (currentPage > 1) {
            currentPage -= 1;
            renderCourses();
            const top = $('#cursos').offset()?.top ?? 0;
            window.scrollTo({ top: top - 96, behavior: 'smooth' });
        }
    });

    $pageNext.on('click', function () {
        const cards = getFilteredAndSortedCards();
        const totalPages = Math.max(1, Math.ceil(cards.length / PAGE_SIZE));

        if (currentPage < totalPages) {
            currentPage += 1;
            renderCourses();
            const top = $('#cursos').offset()?.top ?? 0;
            window.scrollTo({ top: top - 96, behavior: 'smooth' });
        }
    });

    $form.find('input, textarea').on('input blur', function () {
        validateField($(this).attr('name'));
        $success.attr('hidden', true);
    });

    $form.on('submit', function (event) {
        event.preventDefault();

        const isNameValid = validateField('name');
        const isEmailValid = validateField('email');
        const isMessageValid = validateField('message');

        if (!(isNameValid && isEmailValid && isMessageValid)) {
            $success.attr('hidden', true);
            return;
        }

        $form[0].reset();
        ['name', 'email', 'message'].forEach(clearFieldError);
        $success.removeAttr('hidden');
    });

    renderCourses();
});
