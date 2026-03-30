// data.js - PRIYA BEAUTY PARLOUR CONFIGURATION

const siteData = {
    // *** NEW: Temporary Logo ***
    // Replace with your real logo URL later (transparent PNG works best)
    logoUrl: "https://via.placeholder.com/200x60/ffe4e1/c2185b?text=Priya+Logo", 
    
    // The Big Animated Cover Photo
    heroBgImage: "https://photos.fife.usercontent.google.com/pw/AP1GczPiJGTbuBkBYp2rQo_ZMTwM3J0EYvescWOb3k-pRQu1azvpXMvmFm0=w1335-h890-s-no-gm?authuser=0",

    // 1. SERVICES (Added Prices)
    services: [
        { id: "bridal", img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=500&q=80", en: "Bridal Makeup", hi: "ब्राइडल मेकअप", price: "₹5000+" },
        { id: "party", img: "https://images.unsplash.com/photo-1516975080661-46b081b94b0d?auto=format&fit=crop&w=500&q=80", en: "Party Makeup", hi: "पार्टी मेकअप", price: "₹1500+" },
        { id: "treatment", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80", en: "Beauty Treatment", hi: "ब्यूटी ट्रीटमेंट", price: "₹999+" },
        { id: "mehndi", img: "https://images.unsplash.com/photo-1563205770-5b6823c91db0?auto=format&fit=crop&w=500&q=80", en: "Mehndi", hi: "मेहंदी", price: "₹500+" },
        { id: "haldi", img: "https://images.unsplash.com/photo-1606804561841-31de23f2f816?auto=format&fit=crop&w=500&q=80", en: "Haldi Platter", hi: "हल्दी प्लैटर", price: "₹1200+" },
        { id: "facial", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=500&q=80", en: "Facial & Bleach", hi: "फेशियल और ब्लीच", price: "₹800+" },
        { id: "hair", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=500&q=80", en: "Hair Colour", hi: "हेयर कलर", price: "₹1000+" },
        { id: "nails", img: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&w=500&q=80", en: "Nail Extension", hi: "नेल एक्सटेंशन", price: "₹700+" }
    ],

    // 2. GALLERY IMAGES 
    gallery: [
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&w=500&q=80"
    ],

    // 3. REVIEWS
    reviews: [
        { name: "Arti Singh", textEn: "Amazing bridal makeup! Made my day special.", textHi: "अद्भुत ब्राइडल मेकअप! मेरा दिन खास बना दिया।" },
        { name: "Tanu Shrivastav", textEn: "Amazing Work, Mere Shadi ke Din ko special bana diya Priya ne.", textHi: "Amazing Work, Mere Shadi ke Din ko special bana diya Priya ne." }
    ],

    // 4. GOOGLE FORM & MAP LINKS
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSfK_IbJDzdezhqimZrGqBRB8Dce7acAb38s5_MV18lKmq-jWA/viewform?usp=sharing&ouid=117098027613890811227",
    googleMapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160.98494555303307!2d79.38273618398229!3d27.506939033543453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e2bdd4ec81ff5%3A0xd2ea80b4435c7eb3!2sPriya%20Beauty%20Salon!5e1!3m2!1sen!2sin!4v1774841773128!5m2!1sen!2sin",

    // 5. WEBSITE TRANSLATIONS
    translations: {
        en: {
            navHome: "Home", navServices: "Services", navGallery: "Gallery", navBook: "Book Now",
            heroTitle: "Priya Beauty Salon", heroSub: "Step into elegence. Experience luxury.",
            secServices: "Our Services", secServicesSub: "Click the doors to reveal your transformation.",
            secGallery: "Our Past Work", secReviews: "Client Reviews", secBook: "Book an Appointment",
            secLocation: "Find Us"
        },
        hi: {
            navHome: "होम", navServices: "सेवाएं", navGallery: "गैलरी", navBook: "बुक करें",
            heroTitle: "खूबसूरती की दुनिया में कदम रखें", heroSub: "प्रिया ब्यूटी पार्लर में आपका स्वागत है।",
            secServices: "हमारी सेवाएं", secServicesSub: "बदलाव देखने के लिए दरवाजों पर क्लिक करें।",
            secGallery: "हमारा काम", secReviews: "ग्राहक समीक्षा", secBook: "अपॉइंटमेंट बुक करें",
            secLocation: "हमारा पता"
        }
    }
};