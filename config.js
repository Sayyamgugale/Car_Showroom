// Centralized Showroom Configuration
// Edit this file to completely brand and adapt the website for any car showroom.

const showroomConfig = {
    // Showroom Branding
    brandName: "APEX AUTO GALLERY",
    shortName: "Apex Auto",
    logoSrc: "images/vecteezy_car-logo-png_25174498.png", // Path to logo image
    faviconSrc: "images/vecteezy_car-logo-png_25174498.png",

    // Hero Section
    heroTitle: "EXPERIENCE THE G.O.A.T OF AUTOMOTIVE ENGINEERING",
    heroSubtitle: "Indulge in an immersive experience of the world's most exceptional performance and luxury machines.",
    heroCtaText: "Explore Collection",
    heroCtaLink: "cars.html",

    // About Page Content
    aboutTitle: "We craft pure emotion. We build powerful machines.",
    aboutHeading: "Our roots are in racing, and our future is in innovation.",
    aboutDescription: "As a global leader in the luxury sports car market, we continue to innovate, inspired by our heritage and driven by our vision for the future. With a global community of enthusiasts and dealerships in over 100 countries, we invite you to join our family and experience the art of performance driving. Our vehicles combine raw driving pleasure with everyday usability.",
    aboutCtaText: "DISCOVER OUR STORY",
    aboutImage: "images/about.jpg",

    // Contact Details
    contact: {
        address: "Ground Floor, Savoy Chambers, Linking Rd, Hasmukh Nagar, Santacruz (West), Mumbai, Maharashtra 400054",
        phone: "+91 022 6236 2911",
        email: "info@apexautogallery.com",
        workingHours: "Monday to Saturday, 9:30 AM to 7:00 PM",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820309.00719644!2d70.55576126796!3d20.760093495725407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cebfed3b9d59%3A0xb7df13b4b703baf7!2sPorsche%20Centre%20Mumbai!5e0!3m2!1sen!2sin!4v1727650055524!5m2!1sen!2sin",
        formHandlerUrl: "form-handler.php"
    },

    // Categories for filter system
    categories: [
        { id: "all", name: "All Cars" },
        { id: "sedan", name: "Sedans" },
        { id: "coupe", name: "Coupes" },
        { id: "sports", name: "Sports & Electric" }
    ],

    // Complete Car Inventory
    cars: [
        {
            id: "panamera",
            name: "Panamera",
            category: "sedan",
            image: "images/porsche-thumbwhite.webp",
            shortDesc: "A luxury 4-door sedan with a sporty twist, offering various engine options and a spacious interior.",
            price: "$107,000",
            specs: {
                "Body Style": "Sedan",
                "Seating Capacity": "4-5 passengers",
                "Engine": "3.0L Turbocharged V6",
                "Horsepower": "325 HP",
                "Torque": "368 lb-ft",
                "Transmission": "8-speed PDK Dual-Clutch",
                "Drive Type": "RWD / AWD",
                "0-60 mph": "5.2 seconds",
                "Top Speed": "155 mph"
            }
        },
        {
            id: "911-carrera-coupe",
            name: "911 Carrera Coupe",
            category: "coupe",
            image: "images/porsche-thumbwhite (1).webp",
            shortDesc: "A classic 2-door coupe icon, known for its rear-engine layout and exceptional, legendary performance.",
            price: "$114,000",
            specs: {
                "Body Style": "Coupe",
                "Seating Capacity": "2 passengers",
                "Engine": "3.0L Twin-Turbo Flat-6",
                "Horsepower": "379 HP",
                "Torque": "331 lb-ft",
                "Transmission": "7-speed Manual / 8-speed PDK",
                "Drive Type": "RWD",
                "0-60 mph": "3.8 seconds",
                "Top Speed": "191 mph"
            }
        },
        {
            id: "911-carrera-cabriolet",
            name: "911 Carrera Cabriolet",
            category: "coupe",
            image: "images/porsche-thumbwhite (1).webp",
            shortDesc: "A open-top premium luxury convertible blending iconic styling with thrilling open-air track performance.",
            price: "$126,000",
            specs: {
                "Body Style": "Convertible",
                "Seating Capacity": "2 passengers",
                "Engine": "3.0L Twin-Turbo Flat-6",
                "Horsepower": "379 HP",
                "Torque": "331 lb-ft",
                "Transmission": "7-speed Manual / 8-speed PDK",
                "Drive Type": "RWD",
                "0-60 mph": "4.0 seconds",
                "Top Speed": "189 mph"
            }
        },
        {
            id: "panamera-coupe",
            name: "Panamera Coupe",
            category: "coupe",
            image: "images/porsche-thumbwhite.webp",
            shortDesc: "A sleek, 4-door coupe version of the Panamera sedan, blending absolute luxury style and raw track performance.",
            price: "$116,000",
            specs: {
                "Body Style": "Coupe",
                "Seating Capacity": "4 passengers",
                "Engine": "3.0L Turbocharged V6",
                "Horsepower": "325 HP",
                "Torque": "368 lb-ft",
                "Transmission": "8-speed PDK Dual-Clutch",
                "Drive Type": "RWD / AWD",
                "0-60 mph": "5.2 seconds",
                "Top Speed": "155 mph"
            }
        },
        {
            id: "911-gt3",
            name: "911 GT3",
            category: "coupe",
            image: "images/porsche-thumbwhite (1).webp",
            shortDesc: "A high-performance, track-focused street-legal version of the 911, powered by a screaming naturally aspirated engine.",
            price: "$174,000",
            specs: {
                "Body Style": "Coupe",
                "Seating Capacity": "2 passengers",
                "Engine": "4.0L Naturally Aspirated Flat-6",
                "Horsepower": "502 HP",
                "Torque": "346 lb-ft",
                "Transmission": "6-speed Manual / 7-speed PDK",
                "Drive Type": "RWD",
                "0-60 mph": "3.2 seconds",
                "Top Speed": "197 mph"
            }
        },
        {
            id: "911-gt2-rs",
            name: "911 GT2 RS",
            category: "coupe",
            image: "images/porsche-thumbwhite (1).webp",
            shortDesc: "The most extreme 911 variant, boasting track-bred power, active aerodynamics, and massive twin-turbocharged acceleration.",
            price: "$294,000",
            specs: {
                "Body Style": "Coupe",
                "Seating Capacity": "2 passengers",
                "Engine": "3.8L Twin-Turbo Flat-6",
                "Horsepower": "700 HP",
                "Torque": "553 lb-ft",
                "Transmission": "7-speed PDK Dual-Clutch",
                "Drive Type": "RWD",
                "0-60 mph": "2.7 seconds",
                "Top Speed": "211 mph"
            }
        },
        {
            id: "718-boxster",
            name: "718 Boxster",
            category: "coupe",
            image: "images/porsche-thumbwhite.webp",
            shortDesc: "A lightweight, mid-engine open-top roadster providing laser-sharp, agile handling and a modern exterior layout.",
            price: "$62,000",
            specs: {
                "Body Style": "Convertible",
                "Seating Capacity": "2 passengers",
                "Engine": "2.0L Turbocharged Flat-4",
                "Horsepower": "300 HP",
                "Torque": "280 lb-ft",
                "Transmission": "6-speed Manual / 7-speed PDK",
                "Drive Type": "RWD",
                "0-60 mph": "4.9 seconds",
                "Top Speed": "170 mph"
            }
        },
        {
            id: "718-spyder-rs",
            name: "718 Spyder RS",
            category: "sports",
            image: "images/porsche-thumbwhite (1).webp",
            shortDesc: "A purist, extremely powerful mid-engine roadster featuring a high-revving engine inherited from the 911 GT3.",
            price: "$115,000",
            specs: {
                "Body Style": "Convertible",
                "Seating Capacity": "2 passengers",
                "Engine": "4.0L Naturally Aspirated Flat-6",
                "Horsepower": "493 HP",
                "Torque": "343 lb-ft",
                "Transmission": "7-speed PDK Dual-Clutch",
                "Drive Type": "RWD",
                "0-60 mph": "3.6 seconds",
                "Top Speed": "184 mph"
            }
        },
        {
            id: "taycan-4s",
            name: "Taycan 4S",
            category: "sports",
            image: "images/porsche-thumbwhite.webp",
            shortDesc: "A groundbreaking fully-electric luxury sedan combining typical driving dynamics with rapid charging capabilities.",
            price: "$152,000",
            specs: {
                "Body Style": "Sedan (Electric)",
                "Seating Capacity": "4-5 passengers",
                "Engine": "Dual Electric Motors",
                "Horsepower": "750 HP (Overboost)",
                "Torque": "774 lb-ft",
                "Transmission": "2-speed Automatic",
                "Drive Type": "AWD",
                "0-60 mph": "2.8 seconds",
                "Range": "Up to 287 miles (WLTP)"
            }
        },
        {
            id: "taycan-turbo-gt",
            name: "Taycan Turbo GT",
            category: "sports",
            image: "images/porsche-thumbwhite (1).webp",
            shortDesc: "The pinnacle of electric vehicle performance, optimized for lightweight racing dynamics and unparalleled launch control.",
            price: "$199,000",
            specs: {
                "Body Style": "Sedan (Electric)",
                "Seating Capacity": "4-5 passengers",
                "Engine": "High-Output Dual Electric Motors",
                "Horsepower": "1,019 HP (Overboost)",
                "Torque": "988 lb-ft",
                "Transmission": "2-speed Automatic",
                "Drive Type": "AWD",
                "0-60 mph": "2.1 seconds",
                "Range": "Up to 340 miles (WLTP)"
            }
        },
        {
            id: "mission-x",
            name: "Porsche Mission X Concept",
            category: "sports",
            image: "images/porsche-thumbwhite (1).webp",
            shortDesc: "A high-performance technology beacon of the future. The ultimate vision of electric motorsport DNA.",
            price: "Concept / Prototype",
            specs: {
                "Body Style": "Hypercar Concept",
                "Seating Capacity": "2 passengers",
                "Engine": "Next-Gen Electric Powertrain",
                "System Power": "Target: 1 HP per 2.2 lbs",
                "Drive Type": "Rear-Wheel Drive (Electric)",
                "Aero": "High-Downforce active elements",
                "Cabin": "Motorsport-style carbon monocoque"
            }
        }
    ],

    // Client Testimonials
    testimonials: [
        {
            name: "Christine Berkley",
            avatar: "images/user1.jpg",
            feedback: "Citing exceptional performance, handling, and luxury. The performance, responsive steering, and styling exceed all my high expectations.",
            rating: 5
        },
        {
            name: "David Byer",
            avatar: "images/user2.jpg",
            feedback: "This brand stands for absolute excellence, innovation, and passion. Owning a machine of this caliber is not just about driving, it is a lifestyle.",
            rating: 5
        },
        {
            name: "Kety Perry",
            avatar: "images/user3.jpg",
            feedback: "From the showroom consultation to vehicle handover and service support, their attention to detail and commitment is unmatched.",
            rating: 5
        },
        {
            name: "John Smith",
            avatar: "images/user4.jpg",
            feedback: "The heritage and motorsports legacy are palpable in every single component of these cars. A true masterclass in engineering.",
            rating: 5
        },
        {
            name: "Carlo Escobar",
            avatar: "images/user5.jpg",
            feedback: "The ownership community is incredibly welcoming, supportive, and enthusiastic. It is like joining an exclusive club of passion.",
            rating: 4.5
        },
        {
            name: "Saurabh Jain",
            avatar: "images/user6.jpg",
            feedback: "The driving dynamics and build quality are incredible. It performs like a high-performance track car while remaining completely practical.",
            rating: 5
        }
    ],

    // Footer Quotes
    quotes: [
        {
            text: "Our roots are in racing, and our future is in innovation.",
            author: "Ferdinand Porsche"
        },
        {
            text: "The perfect sports car is one that combines driving pleasure and everyday usability.",
            author: "Ferry Porsche"
        }
    ]
};

// Make it accessible on the window object
if (typeof window !== "undefined") {
    window.showroomConfig = showroomConfig;
}
