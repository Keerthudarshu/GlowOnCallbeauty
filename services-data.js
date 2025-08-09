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
            image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=face',
            category: 'facials'
        },
        {
            id: 'collagen-renewal',
            name: 'Collagen Renewal Facial',
            description: 'Anti-aging treatment that stimulates collagen production. Reduces fine lines and improves skin elasticity.',
            originalPrice: 3500,
            discountedPrice: 2999,
            duration: 75,
            image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop&crop=face',
            category: 'facials'
        },
        {
            id: 'vitamin-c-glow',
            name: 'Vitamin C Glow Facial',
            description: 'Brightening treatment with vitamin C serum. Perfect for dull skin and pigmentation concerns.',
            originalPrice: 3000,
            discountedPrice: 2399,
            duration: 60,
            image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop&crop=face',
            category: 'facials'
        },
        {
            id: 'korean-glass-skin',
            name: 'Korean Glass Skin Facial',
            description: 'Multi-step Korean skincare treatment for glass-like skin finish. Includes double cleansing, exfoliation, and hydration.',
            originalPrice: 3000,
            discountedPrice: 2499,
            duration: 90,
            image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop&crop=face',
            category: 'facials'
        },
        {
            id: 'charcoal-detox',
            name: 'Charcoal Detox Facial',
            description: 'Deep pore cleansing treatment with activated charcoal. Perfect for oily and acne-prone skin.',
            originalPrice: 3000,
            discountedPrice: 2599,
            duration: 60,
            image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=300&fit=crop&crop=face',
            category: 'facials'
        },
        {
            id: 'golden-glow',
            name: 'Golden Glow Facial',
            description: 'Luxurious gold-infused facial treatment. Provides instant radiance and anti-aging benefits.',
            originalPrice: 3000,
            discountedPrice: 2699,
            duration: 75,
            image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop&crop=face',
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
            image: 'https://images.unsplash.com/photo-1583001809137-ca80ce48835c?w=400&h=300&fit=crop&crop=eye',
            category: 'lash-extensions'
        },
        {
            id: 'hybrid-lash',
            name: 'Hybrid Lash Extension',
            description: 'Combination of classic and volume techniques. Offers more fullness while maintaining natural look.',
            originalPrice: 3500,
            discountedPrice: 2999,
            duration: 150,
            image: 'https://images.unsplash.com/photo-1607025952930-4e1b52c4e02e?w=400&h=300&fit=crop&crop=eye',
            category: 'lash-extensions'
        },
        {
            id: 'lash-lift',
            name: 'Lash Lift',
            description: 'Natural lash enhancement that lifts and curls your existing lashes. Lasts 6-8 weeks.',
            originalPrice: 2000,
            discountedPrice: 1500,
            duration: 60,
            image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=300&fit=crop&crop=eye',
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
            image: 'https://images.unsplash.com/photo-1554127960-8f8e9c0b0d4a?w=400&h=300&fit=crop&crop=face',
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
            image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=300&fit=crop&crop=face',
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
            image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=face',
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
            image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=face',
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
            image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop&crop=face',
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
            image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop&crop=face',
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
            image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=300&fit=crop&crop=face',
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
            image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop&crop=face',
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
            image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop&crop=face',
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
