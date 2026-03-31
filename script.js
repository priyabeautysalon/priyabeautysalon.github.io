// State
let currentLang = 'en';

function initSite() {
    // Load Logo
    document.getElementById('siteLogo').src = siteData.logoUrl;

    // Apply the Motion Background Image 
    const hero = document.getElementById('home');
    hero.style.backgroundImage = `url(${siteData.heroBgImage})`;

    renderServices();
    renderGallery();
    renderReviews();
    applyTranslations();
    
    // Set Iframes 
    document.getElementById('googleFormIframe').src = siteData.googleFormLink;
    document.getElementById('googleMapIframe').src = siteData.googleMapLink;
    document.getElementById('gmailLink').href = `mailto:${siteData.contact.email}`;
    document.getElementById('instaLink').href = siteData.contact.instagram;
}

// 1. Render 3D Services (UPDATED WITH PRICES & DOOR DESIGN)
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = '';
    siteData.services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-3d-card';
        card.innerHTML = `
            <div class="room-inside">
                <img src="${service.img}" alt="${service[currentLang]}">
                <div class="price-tag">${service.price}</div>
            </div>
            <div class="door">
                <div class="door-panel"></div>
                <div class="door-panel"></div>
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
    renderServices(); 
    renderReviews();  
}

function applyTranslations() {
    const t = siteData.translations[currentLang];
    document.getElementById('navHome').innerText = t.navHome;
    document.getElementById('navServices').innerText = t.navServices;
    document.getElementById('navGallery').innerText = t.navGallery;
    document.getElementById('navBook').innerText = t.navBook;
    document.getElementById('heroTitle').innerText = t.heroTitle;
    document.getElementById('heroSub').innerText = t.heroSub;
    document.getElementById('secServices').innerText = t.secServices;
    document.getElementById('secServicesSub').innerText = t.secServicesSub;
    document.getElementById('secGallery').innerText = t.secGallery;
    document.getElementById('secReviews').innerText = t.secReviews;
    document.getElementById('secBook').innerText = t.secBook;
    document.getElementById('secLocation').innerText = t.secLocation;
    document.getElementById('secContact').innerText = t.secContact;
}

window.onload = initSite;
