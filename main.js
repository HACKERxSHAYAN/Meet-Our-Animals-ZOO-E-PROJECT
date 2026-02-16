/**
 * Zoorld - Meet Our Animals
 * Professional JavaScript
 */

(function() {
    'use strict';

    // ===========================
    // ANIMAL DATA
    // ===========================
    const animalsData = [
        { id: 1, name: "African Elephant", scientificName: "Loxodonta africana", category: "mammals", endangered: true, image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600&q=80", habitat: "African Savanna", diet: "Herbivore", lifespan: "60-70 years" },
        { id: 2, name: "Lion", scientificName: "Panthera leo", category: "mammals", endangered: false, image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&q=80", habitat: "African Grasslands", diet: "Carnivore", lifespan: "10-14 years" },
        { id: 3, name: "Giraffe", scientificName: "Giraffa camelopardalis", category: "mammals", endangered: false, image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=600&q=80", habitat: "African Savanna", diet: "Herbivore", lifespan: "25 years" },
        { id: 4, name: "Polar Bear", scientificName: "Ursus maritimus", category: "mammals", endangered: true, image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=600&q=80", habitat: "Arctic", diet: "Carnivore", lifespan: "25-30 years" },
        { id: 5, name: "Red Panda", scientificName: "Ailurus fulgens", category: "mammals", endangered: true, image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80", habitat: "Himalayan Forests", diet: "Omnivore", lifespan: "8-10 years" },
        { id: 6, name: "Gray Wolf", scientificName: "Canis lupus", category: "mammals", endangered: false, image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=600&q=80", habitat: "Forests & Tundra", diet: "Carnivore", lifespan: "6-8 years" },
        { id: 7, name: "Tiger", scientificName: "Panthera tigris", category: "mammals", endangered: true, image: "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?w=600&q=80", habitat: "Asian Forests", diet: "Carnivore", lifespan: "10-15 years" },
        { id: 8, name: "Koala", scientificName: "Phascolarctos cinereus", category: "mammals", endangered: true, image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=600&q=80", habitat: "Australian Eucalyptus", diet: "Herbivore", lifespan: "13-18 years" },
        { id: 9, name: "Macaw", scientificName: "Ara macao", category: "birds", endangered: false, image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&q=80", habitat: "Rainforests", diet: "Herbivore", lifespan: "50-60 years" },
        { id: 10, name: "Bald Eagle", scientificName: "Haliaeetus leucocephalus", category: "birds", endangered: false, image: "https://images.unsplash.com/photo-1508557955350-0a2569e5d4a1?w=600&q=80", habitat: "Near Water Bodies", diet: "Carnivore", lifespan: "20-30 years" },
        { id: 11, name: "Flamingo", scientificName: "Phoenicopterus roseus", category: "birds", endangered: false, image: "https://images.unsplash.com/photo-1497206365907-f5e1f19d03f4?w=600&q=80", habitat: "Lagoons & Lakes", diet: "Omnivore", lifespan: "20-30 years" },
        { id: 12, name: "Emperor Penguin", scientificName: "Aptenodytes forsteri", category: "birds", endangered: false, image: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?w=600&q=80", habitat: "Antarctica", diet: "Carnivore", lifespan: "15-20 years" },
        { id: 13, name: "Komodo Dragon", scientificName: "Varanus komodoensis", category: "reptiles", endangered: true, image: "https://images.unsplash.com/photo-1591392778806-0a9c4f2d9c9e?w=600&q=80", habitat: "Indonesian Islands", diet: "Carnivore", lifespan: "30 years" },
        { id: 14, name: "Green Sea Turtle", scientificName: "Chelonia mydas", category: "reptiles", endangered: true, image: "https://images.unsplash.com/photo-1591025207163-942350e47db2?w=600&q=80", habitat: "Oceans", diet: "Herbivore", lifespan: "80 years" },
        { id: 15, name: "Cobra", scientificName: "Naja naja", category: "reptiles", endangered: false, image: "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=600&q=80", habitat: "South Asian Forests", diet: "Carnivore", lifespan: "20 years" },
        { id: 16, name: "Red-Eyed Tree Frog", scientificName: "Agalychnis callidryas", category: "amphibians", endangered: false, image: "https://images.unsplash.com/photo-1596627672823-599e0f538393?w=600&q=80", habitat: "Rainforests", diet: "Insectivore", lifespan: "5 years" },
        { id: 17, name: "Axolotl", scientificName: "Ambystoma mexicanum", category: "amphibians", endangered: true, image: "https://images.unsplash.com/photo-1615480546542-307ff54a3dd2?w=600&q=80", habitat: "Mexican Lakes", diet: "Carnivore", lifespan: "10-15 years" },
        { id: 18, name: "Bottlenose Dolphin", scientificName: "Tursiops truncatus", category: "aquatic", endangered: false, image: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=600&q=80", habitat: "Oceans Worldwide", diet: "Carnivore", lifespan: "40-50 years" },
        { id: 19, name: "Great White Shark", scientificName: "Carcharodon carcharias", category: "aquatic", endangered: true, image: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=600&q=80", habitat: "Cool Oceans", diet: "Carnivore", lifespan: "70 years" },
        { id: 20, name: "Clownfish", scientificName: "Amphiprion ocellaris", category: "aquatic", endangered: false, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80", habitat: "Coral Reefs", diet: "Omnivore", lifespan: "6-10 years" }
    ];

    // ===========================
    // STATE
    // ===========================
    let currentCategory = 'all';
    let searchQuery = '';

    // ===========================
    // DOM ELEMENTS
    // ===========================
    const $navbar = $('#mainNavbar');
    const $animalsGrid = $('#animalsGrid');
    const $animalSearch = $('#animalSearch');
    const $searchClear = $('#searchClear');
    const $filterCategories = $('#filterCategories');
    const $resultsCount = $('#resultsCount');
    const $noResults = $('#noResults');

    // ===========================
    // NAVBAR
    // ===========================
    function initNavbar() {
        let lastScroll = 0;
        
        function updateNavbar() {
            const scrollY = window.pageYOffset;
            if (scrollY > 10) {
                $navbar.removeClass('navbar--transparent').addClass('navbar--scrolled');
            } else {
                $navbar.removeClass('navbar--scrolled').addClass('navbar--transparent');
            }
            lastScroll = scrollY;
        }

        let ticking = false;
        $(window).on('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateNavbar();
                    ticking = false;
                });
                ticking = true;
            }
        });
        updateNavbar();
    }

    // ===========================
    // FILTERS
    // ===========================
    function initFilters() {
        $filterCategories.on('click', '.filter-btn', function() {
            $filterCategories.find('.filter-btn').removeClass('active');
            $(this).addClass('active');
            currentCategory = $(this).data('category');
            filterAnimals();
        });
    }

    // ===========================
    // SEARCH
    // ===========================
    function initSearch() {
        let searchTimeout;
        
        $animalSearch.on('input', function() {
            const value = $(this).val();
            $searchClear.toggle(value.length > 0);
            
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchQuery = value.toLowerCase().trim();
                filterAnimals();
            }, 300);
        });

        $searchClear.on('click', function() {
            $animalSearch.val('');
            $(this).hide();
            searchQuery = '';
            filterAnimals();
        });
    }

    // ===========================
    // FILTER ANIMALS
    // ===========================
    function filterAnimals() {
        const filtered = animalsData.filter(animal => {
            const matchesCategory = currentCategory === 'all' || 
                animal.category === currentCategory ||
                (currentCategory === 'endangered' && animal.endangered);
            const matchesSearch = !searchQuery || 
                animal.name.toLowerCase().includes(searchQuery) ||
                animal.scientificName.toLowerCase().includes(searchQuery);
            return matchesCategory && matchesSearch;
        });

        $resultsCount.text(`Showing ${filtered.length} ${currentCategory === 'all' ? 'animals' : currentCategory}`);
        
        if (filtered.length === 0) {
            $noResults.show();
            $animalsGrid.hide();
        } else {
            $noResults.hide();
            $animalsGrid.show();
            renderAnimals(filtered);
        }
    }

    // ===========================
    // RENDER ANIMALS
    // ===========================
    function renderAnimals(animals) {
        $animalsGrid.fadeOut(200, function() {
            $(this).empty();
            const cards = animals.map((animal, i) => createAnimalCard(animal, i)).join('');
            $(this).html(cards).fadeIn(300);
            initLazyLoading();
        });
    }

    function createAnimalCard(animal, index) {
        const badge = animal.endangered ? 
            `<span class="animal-card-badge endangered"><i class="fas fa-exclamation-triangle"></i> Endangered</span>` : '';
        
        return `
            <article class="animal-card" data-id="${animal.id}" data-name="${animal.name}"
                     style="animation-delay: ${(index % 8) * 0.05}s"
                     onclick="navigateToAnimal(${animal.id})"
                     role="button" tabindex="0"
                     onkeypress="if(event.key==='Enter')navigateToAnimal(${animal.id})">
                <img class="animal-card-image lazy-load" 
                     data-src="${animal.image}" 
                     src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                     alt="${animal.name}" loading="lazy">
                ${badge}
                <div class="animal-card-content">
                    <h3 class="animal-card-name">${animal.name}</h3>
                    <span class="animal-card-category">
                        <i class="fas fa-${getCategoryIcon(animal.category)}"></i>
                        ${capitalize(animal.category)}
                    </span>
                </div>
            </article>
        `;
    }

    // ===========================
    // LAZY LOADING
    // ===========================
    function initLazyLoading() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.onload = () => img.classList.remove('lazy-load');
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: '50px' });

        document.querySelectorAll('.lazy-load').forEach(img => observer.observe(img));
    }

    // ===========================
    // UTILITIES
    // ===========================
    function getCategoryIcon(category) {
        const icons = { mammals: 'paw', birds: 'wind', reptiles: 'egg', amphibians: 'water', aquatic: 'tint' };
        return icons[category] || 'paw';
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // ===========================
    // PAGE TRANSITION
    // ===========================
    window.navigateToAnimal = function(animalId) {
        $('#pageTransition').addClass('active');
        setTimeout(() => {
            window.location.href = 'animal-detail.html?id=' + animalId;
        }, 500);
    };

    // ===========================
    // SMOOTH SCROLL
    // ===========================
    $('#hero').on('click', '.btn', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 800);
    });

    // ===========================
    // INIT
    // ===========================
    $(document).ready(function() {
        initNavbar();
        initFilters();
        initSearch();
        renderAnimals(animalsData);
    });

})();
