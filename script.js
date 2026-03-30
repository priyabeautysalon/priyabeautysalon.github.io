// State
let currentLang = 'en';

function initSite() {
    // *** UPDATED: Apply the Motion Background Image ***
    const hero = document.getElementById('home');
    hero.style.backgroundImage = `url(${siteData.heroBgImage})`;

    // ... existing init functions ...
    renderServices();
    renderGallery();
    renderReviews();
    applyTranslations();
    
    // Set Iframes (Glad your map is working now!)
    document.getElementById('googleFormIframe').src = siteData.googleFormLink;
    document.getElementById('googleMapIframe').src = siteData.googleMapLink;
}

// 1. Render 3D Services
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = '';
    siteData.services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-3d-card';
        card.innerHTML = `
            <div class="room-inside">
                <img src="${service.img}" alt="${service[currentLang]}">
            </div>
            <div class="door">
                <h3>${service[currentLang]}</h3>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 2. Render Gallery
function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = '';
    siteData.gallery.forEach(imgUrl => {
        const img = document.createElement('img');
        img.src = imgUrl;
        grid.appendChild(img);
    });
}

// 3. Render Reviews
function renderReviews() {
    const container = document.getElementById('reviewsContainer');
    container.innerHTML = '';
    siteData.reviews.forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card';
        const textObj = currentLang === 'en' ? review.textEn : review.textHi;
        card.innerHTML = `<h4>${review.name}</h4><p>"${textObj}"</p>`;
        container.appendChild(card);
    });
}

// 4. Bilingual Toggle
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    applyTranslations();
    renderServices(); // Re-render to update text on doors
    renderReviews();  // Re-render to update review language
}

function applyTranslations() {
    const t = siteData.translations[currentLang];
    // Nav
    document.getElementById('navHome').innerText = t.navHome;
    document.getElementById('navServices').innerText = t.navServices;
    document.getElementById('navGallery').innerText = t.navGallery;
    document.getElementById('navBook').innerText = t.navBook;
    // Sections
    document.getElementById('heroTitle').innerText = t.heroTitle;
    document.getElementById('heroSub').innerText = t.heroSub;
    document.getElementById('secServices').innerText = t.secServices;
    document.getElementById('secServicesSub').innerText = t.secServicesSub;
    document.getElementById('secGallery').innerText = t.secGallery;
    document.getElementById('secReviews').innerText = t.secReviews;
    document.getElementById('secBook').innerText = t.secBook;
    document.getElementById('secLocation').innerText = t.secLocation;
}

// Run on load
window.onload = initSite;