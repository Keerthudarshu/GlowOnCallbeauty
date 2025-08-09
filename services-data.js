// Services Data
const servicesData = {
    facials: [
        {
            id: 'hydrafacial',
            name: 'HydraFacial',
            description: 'Deep cleansing, exfoliation, and hydration treatment for all skin types. Includes extraction and serum infusion for instant glow.',
            originalPrice: 2500,
            discountedPrice: 1799,
            duration: 60,
            image: 'https://pixabay.com/get/g8ae74fe373c7e924a2109f712a31022bad48f423e505be8df3c84b10afec7172a35d53715feb832e38e6d0ab8ab8695a89f6ef4931e6dd5d51ada974d552da7e_1280.jpg',
            category: 'facials'
        },
        {
            id: 'collagen-renewal',
            name: 'Collagen Renewal Facial',
            description: 'Anti-aging treatment that stimulates collagen production. Reduces fine lines and improves skin elasticity.',
            originalPrice: 3500,
            discountedPrice: 2999,
            duration: 75,
            image: 'https://pixabay.com/get/ge0a8c406961f1a787b3f75f1ffab01d0061a722b2bc21afcb3a95241f14ebeb9516b95a15631ebef41238285ca605077cd15d8bc03382fda73a6058766a60775_1280.jpg',
            category: 'facials'
        },
        {
            id: 'vitamin-c-glow',
            name: 'Vitamin C Glow Facial',
            description: 'Brightening treatment with vitamin C serum. Perfect for dull skin and pigmentation concerns.',
            originalPrice: 3000,
            discountedPrice: 2399,
            duration: 60,
            image: 'https://pixabay.com/get/gb116eaf2ba075ffa3c0d6f2318dbef8951825e46ef5417fe672e1524a3c38a7a490e22c9cab25fd56b525e0ea153b927b29913b96eaab805492ea968b051009f_1280.jpg',
            category: 'facials'
        },
        {
            id: 'korean-glass-skin',
            name: 'Korean Glass Skin Facial',
            description: 'Multi-step Korean skincare treatment for glass-like skin finish. Includes double cleansing, exfoliation, and hydration.',
            originalPrice: 3000,
            discountedPrice: 2499,
            duration: 90,
            image: 'https://pixabay.com/get/g371ff8a7b4a635d2d512ac95ea2127d8ee583b85f44f266279c9beb0ac9ae22979ad0fdae5aab9debe18aad06af39e00b27858ba12df37fc8c04741db11cdc5e_1280.jpg',
            category: 'facials'
        },
        {
            id: 'charcoal-detox',
            name: 'Charcoal Detox Facial',
            description: 'Deep pore cleansing treatment with activated charcoal. Perfect for oily and acne-prone skin.',
            originalPrice: 3000,
            discountedPrice: 2599,
            duration: 60,
            image: 'https://pixabay.com/get/g975cd6a1ec63cad75e9df23d38bba45c8a65d533fb77b0108ba139e6ad5493698c68ffc79c4f570db9167db498f61abf458a1a4c3322ebcdb7c61c8892648ca9_1280.jpg',
            category: 'facials'
        },
        {
            id: 'golden-glow',
            name: 'Golden Glow Facial',
            description: 'Luxurious gold-infused facial treatment. Provides instant radiance and anti-aging benefits.',
            originalPrice: 3000,
            discountedPrice: 2699,
            duration: 75,
            image: 'https://pixabay.com/get/g96aed99773d5a20acf3d1301b3a3f9ecc8506a4b3bdb4e4d8f0fa595f6a627928916fa96a25fba54f9195aa9ae9f041e818f467d566bd1d432781b72bf4e400c_1280.jpg',
            category: 'facials'
        }
    ],
    
    'lash-extensions': [
        {
            id: 'classic-lash',
            name: 'Classic Lash Extension',
            description: 'Natural-looking lash extensions with 1:1 ratio. Perfect for everyday wear and subtle enhancement.',
            originalPrice: 2500,
            discountedPrice: 1799,
            duration: 120,
            image: 'https://pixabay.com/get/gac2bfd673f199449ff742e7cd905a28200e39661bc093794defb1dd4b43f6dc4b28a702652e79926f534c514ad7c72ed5bb535f2cfe669e534fd17ac79fe90b4_1280.jpg',
            category: 'lash-extensions'
        },
        {
            id: 'hybrid-lash',
            name: 'Hybrid Lash Extension',
            description: 'Combination of classic and volume techniques. Offers more fullness while maintaining natural look.',
            originalPrice: 3500,
            discountedPrice: 2999,
            duration: 150,
            image: 'https://pixabay.com/get/ge73f196123c63562a54f7a81ad21a94281af779356f8bb1e3ae5b28092b61c343b112343e834090d78974da9f40449bd9b70c73a72d5103527d60439cee3cdae_1280.jpg',
            category: 'lash-extensions'
        },
        {
            id: 'lash-lift',
            name: 'Lash Lift',
            description: 'Natural lash enhancement that lifts and curls your existing lashes. Lasts 6-8 weeks.',
            originalPrice: 2000,
            discountedPrice: 1500,
            duration: 60,
            image: 'https://pixabay.com/get/g3cfa9e03724907124463efd5ec6b5cb04bc21f8c0321fbe98fffa1e87b4ec3e3decd84df546ff5d4dcdcfbf72ab4fd6f750bc98e58be6788859cdd63cb4d443e_1280.jpg',
            category: 'lash-extensions'
        }
    ],
    
    eyebrows: [
        {
            id: 'brow-tint',
            name: 'Eyebrow Tint',
            description: 'Professional eyebrow tinting service to enhance and define your brows.',
            originalPrice: 500,
            discountedPrice: 500,
            duration: 30,
            image: 'https://pixabay.com/get/g77167ea985a0ec296cdf0b62402ec68128cbf2bfaf63cb692edf5d06a1aff318f5f25cab424162d376b14b2f242b9da9f105865eb74f00dd0e3db8d662fd7796_1280.jpg',
            category: 'eyebrows',
            isAddon: true
        },
        {
            id: 'eyebrow-lamination',
            name: 'Eyebrow Lamination',
            description: 'Semi-permanent treatment that creates fuller, more defined eyebrows by setting the hairs in place.',
            originalPrice: 2000,
            discountedPrice: 1499,
            duration: 45,
            image: 'https://pixabay.com/get/g24a6e6b080f74cae9c751977f09dad1f84acafb620737ee45e674449345d90f04a7c810731f95bda977918f7b408d6b637ee485effdd3dd8cab6b4d38c64d22a_1280.jpg',
            category: 'eyebrows'
        }
    ],
    
    addons: [
        {
            id: 'dermaplaning',
            name: 'Dermaplaning',
            description: 'Gentle exfoliation treatment that removes dead skin cells and fine facial hair for smoother skin.',
            originalPrice: 1300,
            discountedPrice: 799,
            duration: 30,
            image: 'https://pixabay.com/get/g3c0bddb8619999a904b7e4825938dc48bd625624798842157ca966dc6e78f3df22818c80af936c5f0d3b5ffe5562643550191d99773647669da765f882ff10bf_1280.jpg',
            category: 'addons',
            isAddon: true
        }
    ],
    
    combos: [
        {
            id: 'combo-hydra-classic-derma',
            name: 'HydraFacial + Classic Lash + Dermaplaning',
            description: 'Complete beauty package combining our most popular facial treatment with lash extensions and skin exfoliation.',
            originalPrice: 6100,
            discountedPrice: 3000,
            duration: 210,
            image: 'https://pixabay.com/get/g8ae74fe373c7e924a2109f712a31022bad48f423e505be8df3c84b10afec7172a35d53715feb832e38e6d0ab8ab8695a89f6ef4931e6dd5d51ada974d552da7e_1280.jpg',
            category: 'combos',
            services: ['HydraFacial', 'Classic Lash Extension', 'Dermaplaning']
        },
        {
            id: 'combo-vitamin-c-classic-derma',
            name: 'Vitamin C Glow + Classic Lash + Dermaplaning',
            description: 'Brightening facial treatment combined with natural lash enhancement and skin exfoliation.',
            originalPrice: 6100,
            discountedPrice: 3500,
            duration: 210,
            image: 'https://pixabay.com/get/gb116eaf2ba075ffa3c0d6f2318dbef8951825e46ef5417fe672e1524a3c38a7a490e22c9cab25fd56b525e0ea153b927b29913b96eaab805492ea968b051009f_1280.jpg',
            category: 'combos',
            services: ['Vitamin C Glow Facial', 'Classic Lash Extension', 'Dermaplaning']
        },
        {
            id: 'combo-korean-classic-derma',
            name: 'Korean Glass Skin + Classic Lash + Dermaplaning',
            description: 'Korean skincare method combined with lash extensions and dermaplaning for ultimate glow.',
            originalPrice: 6100,
            discountedPrice: 3500,
            duration: 240,
            image: 'https://pixabay.com/get/g371ff8a7b4a635d2d512ac95ea2127d8ee583b85f44f266279c9beb0ac9ae22979ad0fdae5aab9debe18aad06af39e00b27858ba12df37fc8c04741db11cdc5e_1280.jpg',
            category: 'combos',
            services: ['Korean Glass Skin Facial', 'Classic Lash Extension', 'Dermaplaning']
        },
        {
            id: 'combo-charcoal-classic-derma',
            name: 'Charcoal Detox + Classic Lash + Dermaplaning',
            description: 'Deep cleansing charcoal facial with lash enhancement and skin exfoliation.',
            originalPrice: 6100,
            discountedPrice: 3500,
            duration: 210,
            image: 'https://pixabay.com/get/g975cd6a1ec63cad75e9df23d38bba45c8a65d533fb77b0108ba139e6ad5493698c68ffc79c4f570db9167db498f61abf458a1a4c3322ebcdb7c61c8892648ca9_1280.jpg',
            category: 'combos',
            services: ['Charcoal Detox Facial', 'Classic Lash Extension', 'Dermaplaning']
        },
        {
            id: 'combo-golden-classic-derma',
            name: 'Golden Glow + Classic Lash + Dermaplaning',
            description: 'Luxurious gold facial treatment with natural lash extensions and skin exfoliation.',
            originalPrice: 6100,
            discountedPrice: 3500,
            duration: 225,
            image: 'https://pixabay.com/get/g96aed99773d5a20acf3d1301b3a3f9ecc8506a4b3bdb4e4d8f0fa595f6a627928916fa96a25fba54f9195aa9ae9f041e818f467d566bd1d432781b72bf4e400c_1280.jpg',
            category: 'combos',
            services: ['Golden Glow Facial', 'Classic Lash Extension', 'Dermaplaning']
        },
        {
            id: 'combo-collagen-classic-derma',
            name: 'Collagen Renewal + Classic Lash + Dermaplaning',
            description: 'Anti-aging facial treatment combined with lash extensions and skin exfoliation.',
            originalPrice: 6600,
            discountedPrice: 4000,
            duration: 225,
            image: 'https://pixabay.com/get/ge0a8c406961f1a787b3f75f1ffab01d0061a722b2bc21afcb3a95241f14ebeb9516b95a15631ebef41238285ca605077cd15d8bc03382fda73a6058766a60775_1280.jpg',
            category: 'combos',
            services: ['Collagen Renewal Facial', 'Classic Lash Extension', 'Dermaplaning']
        }
    ]
};

// Search functionality
function searchServices(query) {
    if (!query) return [];
    
    const allServices = [...servicesData.facials, ...servicesData['lash-extensions'], ...servicesData.eyebrows, ...servicesData.addons, ...servicesData.combos];
    return allServices.filter(service => 
        service.name.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase())
    );
}

// Get services by category
function getServicesByCategory(category) {
    return servicesData[category] || [];
}

// Get all services
function getAllServices() {
    return servicesData;
}
