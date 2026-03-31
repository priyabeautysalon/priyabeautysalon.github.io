// data.js - PRIYA BEAUTY PARLOUR CONFIGURATION

const siteData = {
    // *** NEW: Temporary Logo ***
    // Replace with your real logo URL later (transparent PNG works best)
    logoUrl: "images/logo.png", 
    
    // The Big Animated Cover Photo
    heroBgImage: "images/banner.webp",

    // 1. SERVICES (Added Prices)
    services: [
        { id: "bridal", img: "images/bridal.webp", en: "Bridal Makeup", hi: "ब्राइडल मेकअप", price: "₹5000+" },
        { id: "party", img: "images/party.webp", en: "Party Makeup", hi: "पार्टी मेकअप", price: "₹1500+" },
        { id: "treatment", img: "images/beauty.webp", en: "Beauty Treatment", hi: "ब्यूटी ट्रीटमेंट", price: "₹999+" },
        { id: "mehndi", img: "images/mehndi.webp", en: "Mehndi", hi: "मेहंदी", price: "₹500+" },
        { id: "haldi", img: "images/haldi.webp", en: "Haldi Platter", hi: "हल्दी प्लैटर", price: "₹300+" },
        { id: "facial", img: "images/facial.webp", en: "Facial & Bleach", hi: "फेशियल और ब्लीच", price: "₹600+ & 200+" },
        { id: "hair", img: "images/hair.webp", en: "Hair Colour", hi: "हेयर कलर", price: "₹300+" },
        { id: "nails", img: "images/nail.webp", en: "Nail Extension", hi: "नेल एक्सटेंशन", price: "₹500+" }
    ],

    // 2. GALLERY IMAGES 
    gallery: [
        "images/pw1.webp",
        "images/pw2.webp",
        "images/pw3.jpg",
        "images/pw4.jpg",
        "images/pw5.jpg",
        "images/pw6.jpg",
        "images/pw7.jpg",
        "images/pw8.jpg",
        "images/pw9.jpg",
        "images/pw10.jpg",
        "images/pw11.jpg",
        "images/pw12.jpg",
        "images/pw13.jpg",
        "images/pw14.webp",
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
