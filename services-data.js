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
            category: 'facials',
            benefits: ['Deep hydration', 'Removes blackheads', 'Instant glow', 'Non-invasive'],
            procedure: 'Cleanse → Extract → Hydrate → Protect',
            idealFor: 'All skin types, especially dry and congested skin'
        },
        {
            id: 'collagen-renewal',
            name: 'Collagen Renewal Facial',
            description: 'Anti-aging treatment that stimulates collagen production. Reduces fine lines and improves skin elasticity.',
            originalPrice: 3500,
            discountedPrice: 2999,
            duration: 75,
            image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop&crop=face',
            category: 'facials',
            benefits: ['Reduces fine lines', 'Firms skin', 'Boosts collagen', 'Anti-aging'],
            procedure: 'Deep cleanse → Collagen mask → LED therapy → Moisturize',
            idealFor: 'Mature skin, fine lines, loss of elasticity'
        },
        {
            id: 'vitamin-c-glow',
            name: 'Vitamin C Glow Facial',
            description: 'Brightening treatment with vitamin C serum. Perfect for dull skin and pigmentation concerns.',
            originalPrice: 3000,
            discountedPrice: 2399,
            duration: 60,
            image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop&crop=face',
            category: 'facials',
            benefits: ['Brightens skin', 'Reduces dark spots', 'Antioxidant protection', 'Even skin tone'],
            procedure: 'Cleanse → Vitamin C serum → Brightening mask → Sun protection',
            idealFor: 'Dull skin, dark spots, uneven skin tone'
        },
        {
            id: 'korean-glass-skin',
            name: 'Korean Glass Skin Facial',
            description: 'Multi-step Korean skincare treatment for glass-like skin finish. Includes double cleansing, exfoliation, and hydration.',
            originalPrice: 3000,
            discountedPrice: 2499,
            duration: 90,
            image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop&crop=face',
            category: 'facials',
            benefits: ['Glass-like glow', 'Deep hydration', 'Poreless appearance', 'Dewy finish'],
            procedure: 'Double cleanse → Exfoliate → Essence → Mask → Seal moisture',
            idealFor: 'All skin types seeking the Korean glass skin effect'
        },
        {
            id: 'charcoal-detox',
            name: 'Charcoal Detox Facial',
            description: 'Deep pore cleansing treatment with activated charcoal. Perfect for oily and acne-prone skin.',
            originalPrice: 3000,
            discountedPrice: 2599,
            duration: 60,
            image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=300&fit=crop&crop=face',
            category: 'facials',
            benefits: ['Deep pore cleansing', 'Removes toxins', 'Controls oil', 'Purifies skin'],
            procedure: 'Steam → Charcoal mask → Extraction → Soothing serum',
            idealFor: 'Oily skin, acne-prone skin, clogged pores'
        },
        {
            id: 'golden-glow',
            name: 'Golden Glow Facial',
            description: 'Luxurious gold-infused facial treatment. Provides instant radiance and anti-aging benefits.',
            originalPrice: 3000,
            discountedPrice: 2699,
            duration: 75,
            image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop&crop=face',
            category: 'facials',
            benefits: ['Luxurious experience', 'Anti-aging', 'Radiant glow', 'Improves circulation'],
            procedure: 'Cleanse → Gold mask → Massage → Hydrating serum',
            idealFor: 'Special occasions, mature skin, dull complexion'
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
            category: 'lash-extensions',
            benefits: ['Natural look', 'Long-lasting', 'Waterproof', 'No mascara needed'],
            procedure: 'Cleanse → Isolate → Apply extensions → Set',
            idealFor: 'First-time users, natural everyday look'
        },
        {
            id: 'hybrid-lash',
            name: 'Hybrid Lash Extension',
            description: 'Combination of classic and volume techniques. Offers more fullness while maintaining natural look.',
            originalPrice: 3500,
            discountedPrice: 2999,
            duration: 150,
            image: 'https://images.unsplash.com/photo-1607025952930-4e1b52c4e02e?w=400&h=300&fit=crop&crop=eye',
            category: 'lash-extensions',
            benefits: ['Fuller lashes', 'Natural + glamorous', 'Customizable density', 'Long-lasting'],
            procedure: 'Cleanse → Map design → Classic + volume application → Seal',
            idealFor: 'Those wanting more fullness than classic but less than volume'
        },
        {
            id: 'lash-lift',
            name: 'Lash Lift',
            description: 'Natural lash enhancement that lifts and curls your existing lashes. Lasts 6-8 weeks.',
            originalPrice: 2000,
            discountedPrice: 1500,
            duration: 60,
            image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=300&fit=crop&crop=eye',
            category: 'lash-extensions',
            benefits: ['Natural enhancement', 'Low maintenance', 'No extensions needed', 'Curl lasts 6-8 weeks'],
            procedure: 'Cleanse → Apply lifting solution → Set curl → Tint (optional)',
            idealFor: 'Those with natural lashes wanting lift and curl'
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
            isAddon: true,
            benefits: ['Enhanced definition', 'Long-lasting color', 'Natural look', 'Fills sparse areas'],
            procedure: 'Clean → Apply tint → Process → Remove excess',
            idealFor: 'Light or sparse eyebrows, special occasions'
        },
        {
            id: 'eyebrow-lamination',
            name: 'Eyebrow Lamination',
            description: 'Semi-permanent treatment that creates fuller, more defined eyebrows by setting the hairs in place.',
            originalPrice: 2000,
            discountedPrice: 1499,
            duration: 45,
            image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=300&fit=crop&crop=face',
            category: 'eyebrows',
            benefits: ['Fuller appearance', 'Lasts 6-8 weeks', 'Tames unruly hairs', 'Low maintenance'],
            procedure: 'Cleanse → Lifting solution → Neutralize → Set',
            idealFor: 'Unruly brows, those wanting fuller brow look'
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
            isAddon: true,
            benefits: ['Smooth skin', 'Better product absorption', 'Removes peach fuzz', 'Instant results'],
            procedure: 'Cleanse → Dermaplaning → Soothing serum → Moisturize',
            idealFor: 'All skin types, pre-event treatment'
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
    ],
    
    waxing: [
        {
            id: 'full-body-wax',
            name: 'Full Body Waxing',
            description: 'Complete body hair removal service using premium wax for smooth, hair-free skin that lasts weeks.',
            originalPrice: 3500,
            discountedPrice: 2799,
            duration: 120,
            image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
            category: 'waxing',
            benefits: ['Long-lasting results', 'Smooth skin', 'Professional technique', 'Premium wax'],
            procedure: 'Prep skin → Apply wax → Remove hair → Soothe with lotion',
            idealFor: 'Those wanting complete hair removal'
        },
        {
            id: 'full-legs-wax',
            name: 'Full Legs Waxing',
            description: 'Professional leg waxing service for silky smooth legs. Includes both upper and lower legs.',
            originalPrice: 1500,
            discountedPrice: 1199,
            duration: 60,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
            category: 'waxing',
            benefits: ['Smooth legs', 'Long-lasting', 'Professional service', 'Gentle technique'],
            procedure: 'Cleanse → Apply wax → Remove hair → Moisturize',
            idealFor: 'Regular maintenance and special occasions'
        },
        {
            id: 'bikini-wax',
            name: 'Bikini Waxing',
            description: 'Professional bikini area waxing with attention to comfort and hygiene.',
            originalPrice: 1200,
            discountedPrice: 899,
            duration: 45,
            image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop',
            category: 'waxing',
            benefits: ['Hygienic process', 'Professional approach', 'Comfortable experience', 'Clean results'],
            procedure: 'Sanitize → Apply wax → Remove hair → Apply soothing gel',
            idealFor: 'Beach season, special occasions'
        },
        {
            id: 'underarms-wax',
            name: 'Underarms Waxing',
            description: 'Quick and efficient underarm hair removal for smooth, confident arms.',
            originalPrice: 400,
            discountedPrice: 299,
            duration: 20,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
            category: 'waxing',
            benefits: ['Quick service', 'Smooth results', 'Long-lasting', 'Gentle process'],
            procedure: 'Clean area → Apply wax → Remove hair → Apply lotion',
            idealFor: 'Regular maintenance, sleeveless outfits'
        }
    ],
    
    threading: [
        {
            id: 'eyebrow-threading',
            name: 'Eyebrow Threading',
            description: 'Precise eyebrow shaping using traditional threading technique for perfect arch and clean lines.',
            originalPrice: 300,
            discountedPrice: 249,
            duration: 20,
            image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=300&fit=crop',
            category: 'threading',
            benefits: ['Precise shaping', 'Natural technique', 'Long-lasting', 'Perfect arch'],
            procedure: 'Map brows → Thread excess hair → Shape arch → Apply soothing gel',
            idealFor: 'Regular eyebrow maintenance, sensitive skin'
        },
        {
            id: 'upper-lip-threading',
            name: 'Upper Lip Threading',
            description: 'Gentle hair removal from upper lip area using threading for smooth, hair-free skin.',
            originalPrice: 150,
            discountedPrice: 129,
            duration: 10,
            image: 'https://images.unsplash.com/photo-1554127960-8f8e9c0b0d4a?w=400&h=300&fit=crop',
            category: 'threading',
            benefits: ['Gentle method', 'Precise removal', 'No chemicals', 'Quick process'],
            procedure: 'Cleanse → Thread unwanted hair → Apply soothing gel',
            idealFor: 'Sensitive skin, quick touch-ups'
        },
        {
            id: 'full-face-threading',
            name: 'Full Face Threading',
            description: 'Complete facial hair removal using threading technique for smooth, glowing skin.',
            originalPrice: 800,
            discountedPrice: 649,
            duration: 45,
            image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop',
            category: 'threading',
            benefits: ['Complete hair removal', 'Smooth skin', 'Natural technique', 'Glowing results'],
            procedure: 'Cleanse → Thread all areas → Shape brows → Apply soothing treatment',
            idealFor: 'Special events, complete grooming'
        }
    ],
    
    'hair-treatment': [
        {
            id: 'keratin-treatment',
            name: 'Keratin Hair Treatment',
            description: 'Professional keratin treatment to smooth, strengthen and add shine to your hair.',
            originalPrice: 4500,
            discountedPrice: 3599,
            duration: 180,
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
            category: 'hair-treatment',
            benefits: ['Smooth hair', 'Reduces frizz', 'Adds shine', 'Strengthens hair'],
            procedure: 'Wash → Apply keratin → Blow dry → Seal with heat',
            idealFor: 'Frizzy hair, damaged hair, special occasions'
        },
        {
            id: 'hair-spa',
            name: 'Hair Spa Treatment',
            description: 'Deep conditioning spa treatment to nourish and revitalize your hair from roots to tips.',
            originalPrice: 2500,
            discountedPrice: 1899,
            duration: 90,
            image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
            category: 'hair-treatment',
            benefits: ['Deep nourishment', 'Repairs damage', 'Soft hair', 'Healthy scalp'],
            procedure: 'Scalp massage → Hair mask → Steam → Rinse → Style',
            idealFor: 'Dry hair, damaged hair, regular maintenance'
        },
        {
            id: 'scalp-treatment',
            name: 'Scalp Treatment',
            description: 'Specialized scalp treatment to address dandruff, oiliness, and promote healthy hair growth.',
            originalPrice: 2000,
            discountedPrice: 1599,
            duration: 60,
            image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=300&fit=crop',
            category: 'hair-treatment',
            benefits: ['Healthy scalp', 'Reduces dandruff', 'Promotes growth', 'Controls oil'],
            procedure: 'Scalp analysis → Apply treatment → Massage → Steam → Rinse',
            idealFor: 'Scalp issues, hair thinning, dandruff'
        },
        {
            id: 'oil-massage',
            name: 'Hot Oil Hair Massage',
            description: 'Relaxing hot oil massage to nourish hair and scalp while promoting circulation.',
            originalPrice: 1500,
            discountedPrice: 1199,
            duration: 45,
            image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
            category: 'hair-treatment',
            benefits: ['Relaxing massage', 'Nourishes hair', 'Improves circulation', 'Stress relief'],
            procedure: 'Warm oil → Scalp massage → Hair massage → Steam → Gentle wash',
            idealFor: 'Stress relief, dry hair, regular maintenance'
        }
    ],
    
    'spa-at-home': [
        {
            id: 'full-body-massage',
            name: 'Full Body Relaxation Massage',
            description: 'Complete body massage using aromatic oils to relax muscles and rejuvenate your body.',
            originalPrice: 3500,
            discountedPrice: 2799,
            duration: 90,
            image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
            category: 'spa-at-home',
            benefits: ['Full body relaxation', 'Stress relief', 'Muscle tension relief', 'Improved circulation'],
            procedure: 'Setup ambiance → Warm oils → Full body massage → Relaxation time',
            idealFor: 'Stress relief, muscle tension, special occasions'
        },
        {
            id: 'aromatherapy-session',
            name: 'Aromatherapy Session',
            description: 'Therapeutic aromatherapy session using essential oils to relax mind and body.',
            originalPrice: 2500,
            discountedPrice: 1999,
            duration: 60,
            image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop',
            category: 'spa-at-home',
            benefits: ['Mental relaxation', 'Aromatherapy benefits', 'Stress reduction', 'Mood enhancement'],
            procedure: 'Essential oil selection → Diffusion → Gentle massage → Meditation',
            idealFor: 'Stress relief, anxiety, mental wellness'
        },
        {
            id: 'body-wrap',
            name: 'Detox Body Wrap',
            description: 'Detoxifying body wrap treatment to cleanse, firm and hydrate your skin.',
            originalPrice: 3000,
            discountedPrice: 2399,
            duration: 75,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
            category: 'spa-at-home',
            benefits: ['Skin detox', 'Firming effect', 'Deep hydration', 'Smooth skin'],
            procedure: 'Body scrub → Apply wrap → Relax time → Remove wrap → Moisturize',
            idealFor: 'Skin detox, special events, self-care'
        },
        {
            id: 'reflexology',
            name: 'Foot Reflexology',
            description: 'Therapeutic foot massage focusing on pressure points to promote overall wellness.',
            originalPrice: 1800,
            discountedPrice: 1399,
            duration: 45,
            image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
            category: 'spa-at-home',
            benefits: ['Improved circulation', 'Stress relief', 'Better sleep', 'Overall wellness'],
            procedure: 'Foot soak → Pressure point massage → Relaxation techniques → Moisturize',
            idealFor: 'Tired feet, stress relief, wellness'
        }
    ],
    
    'pedicure-manicure': [
        {
            id: 'classic-pedicure',
            name: 'Classic Pedicure',
            description: 'Complete pedicure service with nail care, cuticle treatment, and relaxing foot massage.',
            originalPrice: 1200,
            discountedPrice: 899,
            duration: 60,
            image: 'https://images.unsplash.com/photo-1552046122-03184de85e08?w=400&h=300&fit=crop',
            category: 'pedicure-manicure',
            benefits: ['Clean nails', 'Soft feet', 'Relaxing massage', 'Professional care'],
            procedure: 'Foot soak → Nail care → Cuticle treatment → Massage → Polish',
            idealFor: 'Regular maintenance, special occasions'
        },
        {
            id: 'classic-manicure',
            name: 'Classic Manicure',
            description: 'Professional manicure with nail shaping, cuticle care, and hand massage.',
            originalPrice: 800,
            discountedPrice: 649,
            duration: 45,
            image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop',
            category: 'pedicure-manicure',
            benefits: ['Shaped nails', 'Soft hands', 'Professional finish', 'Relaxing experience'],
            procedure: 'Hand soak → Nail shaping → Cuticle care → Hand massage → Polish',
            idealFor: 'Regular grooming, professional look'
        },
        {
            id: 'gel-manicure',
            name: 'Gel Manicure',
            description: 'Long-lasting gel manicure with UV curing for chip-resistant, glossy nails.',
            originalPrice: 1500,
            discountedPrice: 1199,
            duration: 75,
            image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop',
            category: 'pedicure-manicure',
            benefits: ['Long-lasting', 'Chip-resistant', 'High gloss', 'Professional finish'],
            procedure: 'Nail prep → Base coat → Color → Top coat → UV cure',
            idealFor: 'Long-lasting results, special events'
        },
        {
            id: 'mani-pedi-combo',
            name: 'Manicure + Pedicure Combo',
            description: 'Complete hand and foot care combo package for total nail and skin care.',
            originalPrice: 2000,
            discountedPrice: 1499,
            duration: 105,
            image: 'https://images.unsplash.com/photo-1552046122-03184de85e08?w=400&h=300&fit=crop',
            category: 'pedicure-manicure',
            benefits: ['Complete care', 'Value package', 'Professional service', 'Relaxing experience'],
            procedure: 'Hand & foot soak → Nail care → Massage → Polish → Finishing touches',
            idealFor: 'Complete grooming, value seekers'
        }
    ],
    
    'hair-products': [
        {
            id: 'hair-serum-argan',
            name: 'Moroccan Argan Hair Serum',
            description: 'Premium argan oil hair serum for deep nourishment and shine. Controls frizz and adds natural luster.',
            originalPrice: 1299,
            discountedPrice: 999,
            duration: 0,
            image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
            category: 'hair-products',
            benefits: ['Reduces frizz', 'Adds shine', 'Deep nourishment', 'Heat protection'],
            ingredients: 'Argan oil, Vitamin E, Silk protein',
            usage: 'Apply 2-3 drops to damp hair before styling'
        },
        {
            id: 'hair-mask-keratin',
            name: 'Keratin Repair Hair Mask',
            description: 'Professional keratin hair mask for damaged hair. Repairs and strengthens hair from root to tip.',
            originalPrice: 1599,
            discountedPrice: 1199,
            duration: 0,
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
            category: 'hair-products',
            benefits: ['Repairs damage', 'Strengthens hair', 'Smooths texture', 'Reduces breakage'],
            ingredients: 'Hydrolyzed keratin, Coconut oil, Shea butter',
            usage: 'Apply to clean hair, leave for 15-20 minutes, rinse thoroughly'
        },
        {
            id: 'shampoo-sulfate-free',
            name: 'Sulfate-Free Moisturizing Shampoo',
            description: 'Gentle sulfate-free shampoo that cleanses without stripping natural oils. Perfect for all hair types.',
            originalPrice: 899,
            discountedPrice: 699,
            duration: 0,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
            category: 'hair-products',
            benefits: ['Gentle cleansing', 'Maintains moisture', 'Color-safe', 'No harsh chemicals'],
            ingredients: 'Coconut-derived cleansers, Aloe vera, Glycerin',
            usage: 'Apply to wet hair, massage gently, rinse thoroughly'
        }
    ],
    
    'body-products': [
        {
            id: 'body-lotion-vitamin-e',
            name: 'Vitamin E Body Lotion',
            description: 'Rich vitamin E body lotion for deep moisturization. Keeps skin soft and hydrated all day long.',
            originalPrice: 799,
            discountedPrice: 599,
            duration: 0,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
            category: 'body-products',
            benefits: ['24-hour moisture', 'Vitamin E nourishment', 'Non-greasy formula', 'Smooth skin'],
            ingredients: 'Vitamin E, Shea butter, Jojoba oil, Glycerin',
            usage: 'Apply to clean skin, massage until absorbed'
        },
        {
            id: 'body-scrub-coffee',
            name: 'Arabica Coffee Body Scrub',
            description: 'Exfoliating coffee scrub that removes dead skin cells and improves circulation for smoother skin.',
            originalPrice: 1099,
            discountedPrice: 849,
            duration: 0,
            image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
            category: 'body-products',
            benefits: ['Exfoliates dead skin', 'Improves circulation', 'Reduces cellulite', 'Natural caffeine'],
            ingredients: 'Ground coffee, Brown sugar, Coconut oil, Vitamin E',
            usage: 'Apply to damp skin, massage in circular motions, rinse with warm water'
        },
        {
            id: 'body-wash-moisturizing',
            name: 'Moisturizing Body Wash',
            description: 'Gentle moisturizing body wash that cleanses while keeping skin hydrated and soft.',
            originalPrice: 649,
            discountedPrice: 499,
            duration: 0,
            image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop',
            category: 'body-products',
            benefits: ['Gentle cleansing', 'Maintains moisture', 'Soft skin', 'Pleasant fragrance'],
            ingredients: 'Mild cleansers, Glycerin, Aloe vera, Natural fragrances',
            usage: 'Apply to wet skin with loofah, lather and rinse'
        },
        {
            id: 'body-oil-coconut',
            name: 'Pure Coconut Body Oil',
            description: 'Cold-pressed coconut oil for deep skin nourishment. Multi-purpose oil for body and hair.',
            originalPrice: 899,
            discountedPrice: 699,
            duration: 0,
            image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
            category: 'body-products',
            benefits: ['Deep nourishment', 'Multi-purpose use', 'Natural moisturizer', 'Anti-aging properties'],
            ingredients: '100% Pure cold-pressed coconut oil',
            usage: 'Apply to slightly damp skin, massage until absorbed'
        }
    ],
    
    'face-products': [
        {
            id: 'face-serum-vitamin-c',
            name: 'Vitamin C Brightening Serum',
            description: 'Powerful vitamin C serum that brightens skin and reduces dark spots. Anti-aging formula with antioxidants.',
            originalPrice: 1499,
            discountedPrice: 1199,
            duration: 0,
            image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop',
            category: 'face-products',
            benefits: ['Brightens complexion', 'Reduces dark spots', 'Anti-aging', 'Antioxidant protection'],
            ingredients: 'Vitamin C (20%), Hyaluronic acid, Vitamin E, Ferulic acid',
            usage: 'Apply 2-3 drops to clean face, follow with moisturizer and sunscreen'
        },
        {
            id: 'face-cleanser-foam',
            name: 'Gentle Foaming Face Cleanser',
            description: 'pH-balanced foaming cleanser that removes impurities without over-drying. Suitable for all skin types.',
            originalPrice: 699,
            discountedPrice: 549,
            duration: 0,
            image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop',
            category: 'face-products',
            benefits: ['Gentle cleansing', 'Removes impurities', 'pH-balanced', 'Non-drying formula'],
            ingredients: 'Mild surfactants, Glycerin, Chamomile extract, Aloe vera',
            usage: 'Apply to wet face, massage gently, rinse with lukewarm water'
        },
        {
            id: 'face-moisturizer-hydra',
            name: 'Hydrating Face Moisturizer',
            description: 'Lightweight yet deeply hydrating moisturizer with hyaluronic acid. Perfect for daily use.',
            originalPrice: 999,
            discountedPrice: 799,
            duration: 0,
            image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
            category: 'face-products',
            benefits: ['Deep hydration', 'Lightweight formula', 'Non-comedogenic', 'All-day moisture'],
            ingredients: 'Hyaluronic acid, Ceramides, Niacinamide, Squalane',
            usage: 'Apply to clean face and neck, morning and evening'
        },
        {
            id: 'face-mask-clay',
            name: 'Purifying Clay Face Mask',
            description: 'Deep-cleansing clay mask that draws out impurities and controls excess oil. Weekly treatment mask.',
            originalPrice: 799,
            discountedPrice: 599,
            duration: 0,
            image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=300&fit=crop',
            category: 'face-products',
            benefits: ['Deep cleansing', 'Controls oil', 'Minimizes pores', 'Purifies skin'],
            ingredients: 'Bentonite clay, Kaolin clay, Tea tree oil, Witch hazel',
            usage: 'Apply thin layer to clean face, leave 10-15 minutes, rinse with warm water'
        },
        {
            id: 'face-sunscreen-spf50',
            name: 'Broad Spectrum SPF 50 Sunscreen',
            description: 'Lightweight, non-greasy sunscreen with broad spectrum protection. Perfect for daily use under makeup.',
            originalPrice: 899,
            discountedPrice: 699,
            duration: 0,
            image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop',
            category: 'face-products',
            benefits: ['SPF 50 protection', 'Lightweight formula', 'Non-greasy', 'Makeup-friendly'],
            ingredients: 'Zinc oxide, Titanium dioxide, Hyaluronic acid, Vitamin E',
            usage: 'Apply generously 15 minutes before sun exposure, reapply every 2 hours'
        }
    ]
};

// Search functionality
function searchServices(query) {
    if (!query) return [];
    
    const allServices = [
        ...servicesData.facials, 
        ...servicesData['lash-extensions'], 
        ...servicesData.eyebrows, 
        ...servicesData.addons, 
        ...servicesData.combos,
        ...servicesData.waxing,
        ...servicesData.threading,
        ...servicesData['hair-treatment'],
        ...servicesData['spa-at-home'],
        ...servicesData['pedicure-manicure'],
        ...servicesData['hair-products'],
        ...servicesData['body-products'],
        ...servicesData['face-products']
    ];
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
