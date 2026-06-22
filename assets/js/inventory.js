const products = [
  {
    id: "bifenthrin-10-ec",
    name: "Bifenthrin 10% EC",
    category: "Insecticide",
    tagline: "Immediate contact and stomach action for sucking and chewing pests.",
    description: "Bifenthrin 10% EC is a highly effective pyrethroid insecticide and miticide that targets pests by disrupting their nervous system. It is formulated to control major crop pests like whiteflies, pink bollworms, and aphids, providing rapid knockdown and long residue control.",
    packshot: "NexGen product images with white background/product_packshot.png",
    composition: "Bifenthrin 10% EC",
    price: 1846,
    sizes: [
      { size: "1 LTR", price: 1846 },
      { size: "500ML", price: 1008 }
    ],
    target: "Whiteflies, Pink Bollworms (Gulabi Sundi), Jassids, Aphids, and Spider Mites in Cotton and Citrus.",
    dosage: [
      { crop: "Cotton (Kapas)", rate: "250-300 ml per acre", water: "100-120 Liters" },
      { crop: "Citrus Orchards", rate: "80 ml per 100L water", water: "Foliar Spray" }
    ],
    safety: [
      "Avoid direct contact with skin and eyes.",
      "Do not spray near water sources or fish ponds.",
      "Wear safety goggles, mask, and rubber boots during application.",
      "Wash hands and face with soap after handling."
    ]
  },
  {
    id: "chlorpyrifos-40-ec",
    name: "Chlorpyrifos 40% EC",
    category: "Insecticide",
    tagline: "Organophosphate insecticide with contact, stomach, and vapor action.",
    description: "Chlorpyrifos 40% EC is an organophosphate insecticide that controls soil insects, termites, and foliage pests. It penetrates plant tissues and provides contact, stomach, and fumigant action for multi-level crop security.",
    packshot: "NexGen product images with white background/chlorpyrifos-40-ec.png",
    composition: "Chlorpyrifos 40% EC",
    price: 1852,
    sizes: [
      { size: "1 LTR", price: 1852 },
      { size: "500ML", price: 1020 }
    ],
    target: "Termites (Deemak), Root Borers, Bollworms, and sucking pests.",
    dosage: [
      { crop: "Sugarcane (Kamad)", rate: "1000-1200 ml per acre", water: "150-200 Liters (Soil drench/flood)" },
      { crop: "Cotton (Kapas)", rate: "500-600 ml per acre", water: "100-120 Liters" }
    ],
    safety: [
      "Highly toxic if swallowed or inhaled.",
      "Always wear gloves, protective coveralls, and a gas mask.",
      "Ensure a minimum 14-day pre-harvest interval (PHI).",
      "Do not contaminate animal feed or drinking water."
    ]
  },
  {
    id: "emamectin-1-9-ec",
    name: "Emamectin 1.9% EC",
    category: "Insecticide",
    tagline: "Elite protection against lepidopterous pests and bollworms.",
    description: "Emamectin benzoate is a modern avermectin class insecticide that provides strong contact and stomach action, halting pest feeding within hours of exposure. It penetrates leaf cuticles via translaminar action, securing long-lasting control of caterpillars.",
    packshot: "NexGen product images with white background/emamectin-1-9-ec.png",
    composition: "Emamectin Benzoate 1.9% EC",
    price: 1722,
    sizes: [
      { size: "1 LTR", price: 1722 },
      { size: "400ML", price: 748 }
    ],
    target: "Armyworm (Lashkari Sundi), Spotted Bollworms, Helicoverpa, and thrips.",
    dosage: [
      { crop: "Cotton (Kapas)", rate: "200 ml per acre", water: "100-120 Liters" },
      { crop: "Vegetables (Aloo, Tomato)", rate: "150 ml per acre", water: "100 Liters" }
    ],
    safety: [
      "Store in a dry, ventilated locked storage cabinet.",
      "Dispose of empty packaging safely in accordance with local regulations.",
      "Wash spray outfits thoroughly after spray application.",
      "Avoid spraying during high bee activity hours."
    ]
  },
  {
    id: "lambdacyhalothrin-2-5-ec",
    name: "Lambdacyhalothrin 2.5% EC",
    category: "Insecticide",
    tagline: "Rapid knockdown pyrethroid for chewing and sucking insects.",
    description: "Lambdacyhalothrin 2.5% EC is a high-performance contact and stomach insecticide. It is renowned for its swift knockdown effect and repellency, which deters pests from returning to treated fields.",
    packshot: "NexGen product images with white background/lambdacyhalothrin-2-5-ec.png",
    composition: "Lambdacyhalothrin 2.5% EC",
    price: 1138,
    sizes: [
      { size: "1 LTR", price: 1138 },
      { size: "250ML", price: 377 }
    ],
    target: "Aphids, Thrips, Bollworms, Leafhoppers, and beetles.",
    dosage: [
      { crop: "Cotton (Kapas)", rate: "250-300 ml per acre", water: "120 Liters" },
      { crop: "Citrus Orchards", rate: "100 ml per 100L water", water: "Thorough foliar drench" }
    ],
    safety: [
      "Toxic to aquatic life; do not spray near fish ponds or open water.",
      "Wear a protective mask and goggles to prevent inhalation.",
      "Wash hands and exposed skin thoroughly before eating or smoking.",
      "Apply during early morning or late afternoon."
    ]
  },
  {
    id: "lufenuron-5-ec",
    name: "Lufenuron 5% EC",
    category: "Insecticide",
    tagline: "Chitin synthesis inhibitor preventing insect larvae development.",
    description: "Lufenuron 5% EC acts as an insect growth regulator (IGR) that inhibits chitin synthesis in larvae, preventing them from molting successfully. This stops the pest cycle at the larval stage without harming beneficial predatory insects.",
    packshot: "NexGen product images with white background/lufenuron-5-ec.png",
    composition: "Lufenuron 5% EC",
    price: 1424,
    sizes: [
      { size: "1 LTR", price: 1424 },
      { size: "400ML", price: 644 }
    ],
    target: "Armyworms, Diamondback Moth, and leaf-folding caterpillars.",
    dosage: [
      { crop: "Cotton (Kapas)", rate: "200 ml per acre", water: "100-120 Liters" },
      { crop: "Vegetables (Gobi, Tomato)", rate: "150 ml per acre", water: "100 Liters" }
    ],
    safety: [
      "Do not apply under hot midday sun.",
      "Store away from heat and open flame in dry rooms.",
      "Keep out of reach of children and pets.",
      "Wear protective gloves and mask when mixing."
    ]
  },
  {
    id: "sega-pest-clear-3-sc",
    name: "Sega Pest Clear 3% SC",
    category: "Insecticide",
    tagline: "Advanced suspension concentrate for clean, systemic crop relief.",
    description: "Sega Pest Clear 3% SC is a suspension concentrate insecticide formulated for maximum dispersion and coverage. It provides systemic protection and knock-down relief against a wide range of sucking and chewing pests.",
    packshot: "NexGen product images with white background/sega-pest-clear-3-sc.png",
    composition: "Sega Pest Clear 3% SC",
    price: 1164,
    sizes: [
      { size: "1 LTR", price: 1164 },
      { size: "400ML", price: 552 }
    ],
    target: "Jassids, Thrips, Aphids, and early-stage larvae.",
    dosage: [
      { crop: "Cotton (Kapas)", rate: "400 ml per acre", water: "120 Liters" },
      { crop: "Vegetables (Chillies, Brinjal)", rate: "300 ml per acre", water: "100-120 Liters" }
    ],
    safety: [
      "Shake the bottle well before mixing with water.",
      "Ensure uniform coverage of plant leaves during spraying.",
      "Wear protective clothing, mask, and goggles during application.",
      "Clean spray equipment thoroughly after use."
    ]
  },
  {
    id: "sudao-11-6-sc",
    name: "Sudao 11.6% SC",
    category: "Insecticide",
    tagline: "High-efficiency contact and systemic solution for sap-sucking pests.",
    description: "Sudao 11.6% SC is a dual-action insecticide designed to penetrate leaf cuticles quickly. It targets and controls stubborn sucking pests by blocking their feeding receptors within hours, ensuring maximum safety for the crop.",
    packshot: "NexGen product images with white background/sudao-11-6-sc.png",
    composition: "Sudao 11.6% SC",
    price: 552,
    sizes: [
      { size: "100ML", price: 552 }
    ],
    target: "Whitefly, Jassids, and Thrips in cotton and vegetables.",
    dosage: [
      { crop: "Cotton (Kapas)", rate: "100 ml per acre", water: "100-120 Liters" },
      { crop: "Chillies / Tomato", rate: "80-100 ml per acre", water: "100 Liters" }
    ],
    safety: [
      "Store in a dry, cool, and locked warehouse.",
      "Avoid contact with skin, eyes, and mouth.",
      "Wash contaminated clothing before reuse.",
      "Do not spray during high wind speeds."
    ]
  },
  {
    id: "alcon-0-4",
    name: "Alcon 0.4%",
    category: "Insecticide",
    tagline: "Systemic soil insecticide for long-lasting root and borer security.",
    description: "Alcon 0.4% (Chlorantraniliprole 0.4% Granules) is a premium soil-applied insecticide that creates a protective root zone barrier. It controls stem borers and root insects, boosting plant structure and maximizing green foliage.",
    packshot: "NexGen product images with white background/alcon-0-4.png",
    composition: "Chlorantraniliprole 0.4% Granules",
    price: 1150,
    sizes: [
      { size: "8 KG", price: 1150 }
    ],
    target: "Stem Borer, Root Borer, and termites in Sugarcane and Rice.",
    dosage: [
      { crop: "Sugarcane (Kamad)", rate: "8 kg per acre (Soil application)", water: "Broadcast in moist soil followed by flooding" },
      { crop: "Rice (Chawal)", rate: "4 kg per acre", water: "Broadcast in standing water" }
    ],
    safety: [
      "Ensure soil has good moisture before broadcasting.",
      "Do not handle granules with bare hands; use rubber gloves.",
      "Keep away from domestic animal feed.",
      "Store in dry, well-ventilated areas."
    ]
  },
  {
    id: "spectral-0-69-g",
    name: "Spectral 0.69% G",
    category: "Insecticide",
    tagline: "Granular soil insecticide for premium root protection.",
    description: "Spectral 0.69% G is a high-performance granular insecticide applied to soil for the control of chewing pests, root feeding insects, and termites. It ensures early plant establishment and crop safety.",
    packshot: "NexGen product images with white background/product_packshot.png",
    composition: "Spectral 0.69% Granules",
    price: 1008,
    sizes: [
      { size: "7 KG", price: 1008 }
    ],
    target: "Termites, Root Borers, and soil insects in Rice and Sugarcane.",
    dosage: [
      { crop: "Rice (Chawal)", rate: "7 kg per acre", water: "Broadcast in moist soil" }
    ],
    safety: [
      "Wear gloves and protection masks when broadcasting.",
      "Store in a dry, ventilated locked space.",
      "Ensure proper disposal of empty bags.",
      "Do not irrigate excessively soon after application."
    ]
  },
  {
    id: "eldron-1-6",
    name: "Eldron 1.6%",
    category: "Insecticide",
    tagline: "Premium systemic granules for stem and root borer control.",
    description: "Eldron 1.6% is a systemic granular formulation providing long-lasting control against damaging root insects and borers. It is absorbed by the crop root system and translocates upward, defending the stem and foliage.",
    packshot: "NexGen product images with white background/product_packshot.png",
    composition: "Eldron 1.6% Granules",
    price: 1410,
    sizes: [
      { size: "6 KG", price: 1410 }
    ],
    target: "Stem Borers, Root Borers, and leaf-curling larvae in sugarcane.",
    dosage: [
      { crop: "Sugarcane (Kamad)", rate: "6 kg per acre", water: "Broadcast in soil followed by watering" }
    ],
    safety: [
      "Ensure the field is irrigated soon after application.",
      "Do not broadcast during heavy winds to prevent drift.",
      "Avoid inhalation of dust during broadcasting.",
      "Wash hands thoroughly after work."
    ]
  },
  {
    id: "burex-26-seed-treatment",
    name: "Burex 26% (Seed Treatment)",
    category: "Seedcare",
    tagline: "Elite systemic seed treatment coating for early seedling security.",
    description: "Burex 26% is a specialized seed dressing flowable concentrate designed to protect sprouting seeds and young seedlings from subterranean insects and soil-borne pathogens. It enhances germination percentage and seedling vigor.",
    packshot: "NexGen product images with white background/burex-26-seed-treatment.png",
    composition: "Burex 26% FS",
    price: 552,
    sizes: [
      { size: "60ML", price: 552 }
    ],
    target: "Termites, Aphids, and damping-off disease in wheat and cotton seeds.",
    dosage: [
      { crop: "Wheat Seed (Gandum)", rate: "60 ml per 50 kg seed", water: "Mix with 500ml water before application" },
      { crop: "Cotton Seed (Kapas)", rate: "100 ml per 100 kg seed", water: "Mix with 1 Liter water" }
    ],
    safety: [
      "Treated seeds must not be used for human or animal consumption.",
      "Wear rubber gloves and protective mask during seed mixing.",
      "Treat seeds in a shaded, well-ventilated area.",
      "Store treated seeds separately from food crops."
    ]
  },
  {
    id: "gengwei-55-sc",
    name: "Gengwei 55% SC",
    category: "Herbicide",
    tagline: "Selective herbicide targeting annual grasses and broadleaf weeds.",
    description: "Gengwei 55% SC is a selective herbicide engineered to control annual weeds in maize and sugarcane fields. It stops weed growth immediately, allowing the crop to establish without competition for soil nutrients and sunlight.",
    packshot: "NexGen product images with white background/gengwei-55-sc.png",
    composition: "Gengwei 55% SC",
    price: 1554,
    sizes: [
      { size: "1 LTR", price: 1554 },
      { size: "500ML", price: 864 }
    ],
    target: "Broadleaf weeds, annual grasses, and sedges in Maize and Sugarcane.",
    dosage: [
      { crop: "Maize (Makai)", rate: "1000 ml per acre", water: "120 Liters" },
      { crop: "Sugarcane (Kamad)", rate: "1000-1200 ml per acre", water: "120-150 Liters" }
    ],
    safety: [
      "Ensure uniform soil moisture before application.",
      "Use flat-fan nozzles for uniform spray distribution.",
      "Do not spray when rain is expected within 4 hours.",
      "Wear protective gear during handling."
    ]
  },
  {
    id: "glyphosate-48-sl",
    name: "Glyphosate 48% SL",
    category: "Herbicide",
    tagline: "Non-selective post-emergence systemic herbicide for total weed control.",
    description: "Glyphosate 48% SL is a systemic, non-selective herbicide designed to kill deep-rooted perennial and annual weeds. It is absorbed through weed foliage and translocates down to the root system, ensuring complete weed elimination.",
    packshot: "NexGen product images with white background/glyphosate-48-sl.png",
    composition: "Glyphosate 48% SL",
    price: 1202,
    sizes: [
      { size: "1 LTR", price: 1202 }
    ],
    target: "All annual and perennial grasses, broadleaf weeds in non-crop areas and pre-planting fields.",
    dosage: [
      { crop: "Pre-planting Weeds", rate: "1.5-2.0 Liters per acre", water: "120-150 Liters" },
      { crop: "Orchards (Inter-row)", rate: "1.0-1.5 Liters per acre", water: "120 Liters" }
    ],
    safety: [
      "Avoid drift to green parts of desirable plants.",
      "Wash sprayer thoroughly with detergent after use.",
      "Wear protective goggles and breathing mask.",
      "Do not apply when wind speed is higher than 5 km/h."
    ]
  },
  {
    id: "paraquat-20-sl",
    name: "Paraquat 20% SL",
    category: "Herbicide",
    tagline: "Fast-acting contact herbicide for rapid weed knockdown.",
    description: "Paraquat 20% SL is a contact herbicide that destroys green weed tissues rapidly upon exposure. It is rain-fast within minutes of application and becomes inactive upon contact with soil, allowing for immediate crop sowing.",
    packshot: "NexGen product images with white background/paraquat-20-sl.png",
    composition: "Paraquat 20% SL",
    price: 1280,
    sizes: [
      { size: "1 LTR", price: 1280 }
    ],
    target: "Broad-spectrum annual weeds and grasses in orchards and potato fields.",
    dosage: [
      { crop: "Potato Fields (Pre-emergence)", rate: "1.0 Liter per acre", water: "100-120 Liters" },
      { crop: "Orchards / Cotton (Inter-row)", rate: "800-1000 ml per acre", water: "120 Liters" }
    ],
    safety: [
      "Highly toxic if swallowed or inhaled.",
      "Always wear double gloves and chemical-resistant outfit.",
      "Wash skin immediately with soap if contact occurs.",
      "Keep out of reach of children and domestic animals."
    ]
  },
  {
    id: "recall-42-sc",
    name: "Recall 42% SC",
    category: "Herbicide",
    tagline: "High-efficiency selective weed control for sugarcane and maize.",
    description: "Recall 42% SC is formulated for pre- and post-emergence control of annual broadleaf weeds and grass weeds. It is highly selective for maize and sugarcane, delivering premium, long-lasting soil residual activity.",
    packshot: "NexGen product images with white background/recall-42-sc.png",
    composition: "Recall 42% SC",
    price: 1228,
    sizes: [
      { size: "800 ML", price: 1228 }
    ],
    target: "Sedges, broadleaf weeds, and annual grass weeds in Sugarcane and Maize.",
    dosage: [
      { crop: "Maize (Makai)", rate: "800 ml per acre", water: "120 Liters" },
      { crop: "Sugarcane (Kamad)", rate: "800-1000 ml per acre", water: "120-150 Liters" }
    ],
    safety: [
      "Apply when soil is moist for maximum activation.",
      "Wear face shield and protective gloves when mixing.",
      "Avoid breathing vapor or spray mist.",
      "Do not discharge wash water into watercourses."
    ]
  },
  {
    id: "bermuda-25-od",
    name: "Bermuda 25% OD",
    category: "Herbicide",
    tagline: "Premium post-emergence oil dispersion herbicide for grass weeds.",
    description: "Bermuda 25% OD utilizes advanced oil dispersion technology to improve leaf penetration. It targets and controls annual grass weeds in cereal crops, ensuring crop vigor and maximizing yield potentials.",
    packshot: "NexGen product images with white background/bermuda-25-od.png",
    composition: "Bermuda 25% OD",
    price: 3185,
    sizes: [
      { size: "860 ML", price: 3185 }
    ],
    target: "Annual grasses and wild oats in cereal crops.",
    dosage: [
      { crop: "Wheat (Gandum)", rate: "860 ml per acre", water: "100-120 Liters" }
    ],
    safety: [
      "Ensure uniform soil coverage during spray.",
      "Apply during active weed growth phase.",
      "Wash eyes with clean water immediately in case of contact.",
      "Store in a cool, dry, and locked storage."
    ]
  },
  {
    id: "sanga-26-od",
    name: "Sanga 26% OD",
    category: "Herbicide",
    tagline: "Systemic post-emergence weed control with high leaf absorption.",
    description: "Sanga 26% OD provides outstanding post-emergence control of broadleaf weeds and annual grass weeds. Its unique formulation ensures quick absorption through the cuticles, stopping weed cell division within hours of spray.",
    packshot: "NexGen product images with white background/sanga-26-od.png",
    composition: "Sanga 26% OD",
    price: 1235,
    sizes: [
      { size: "137ML", price: 1235 }
    ],
    target: "Broadleaf weeds and sedges in rice and cereal crops.",
    dosage: [
      { crop: "Rice (Chawal)", rate: "137 ml per acre", water: "100-120 Liters" }
    ],
    safety: [
      "Apply to moist soil for optimal activity.",
      "Wear safety goggles, mask, and boots during spray.",
      "Store in dry, locked area away from foodstuff.",
      "Wash hands thoroughly after application."
    ]
  },
  {
    id: "terminator-10-wp",
    name: "Terminator 10% WP",
    category: "Herbicide",
    tagline: "Selective pre-emergence herbicide for rice nurseries and fields.",
    description: "Terminator 10% WP is a selective wettable powder herbicide designed to control annual broadleaf weeds and sedges in transplanted rice. It blocks amino acid synthesis, causing weeds to die off within days.",
    packshot: "NexGen product images with white background/terminator-10-wp.png",
    composition: "Pyrazosulfuron-ethyl 10% WP",
    price: 422,
    sizes: [
      { size: "100 GM", price: 422 }
    ],
    target: "Broadleaf weeds, sedges (Deela), and annual grasses in Rice (Chawal).",
    dosage: [
      { crop: "Rice Nurseries", rate: "100 grams per acre", water: "80-100 Liters" },
      { crop: "Transplanted Rice", rate: "100 grams per acre", water: "100-120 Liters (Apply 3-5 days after transplanting)" }
    ],
    safety: [
      "Keep standing water (2-3 inches) in field for 3 days post-application.",
      "Do not inhale wettable powder dust; wear a dust mask.",
      "Dispose of empty packaging safely in a pit.",
      "Avoid skin contact with the wet powder."
    ]
  },
  {
    id: "winsta-30-wp",
    name: "Winsta 30% WP",
    category: "Herbicide",
    tagline: "Selective weed control powder for cereal fields.",
    description: "Winsta 30% WP is a broad-spectrum selective herbicide that penetrates weed roots and leaves quickly. It controls major annual grasses and broadleaf weeds in cereal fields, providing long-term clean field security.",
    packshot: "NexGen product images with white background/product_packshot.png",
    composition: "Winsta 30% WP",
    price: 826,
    sizes: [
      { size: "100 GM", price: 826 }
    ],
    target: "Annual grasses and broadleaf weeds in wheat and rice crops.",
    dosage: [
      { crop: "Wheat (Gandum)", rate: "100 grams per acre", water: "100-120 Liters" }
    ],
    safety: [
      "Ensure uniform spray distribution.",
      "Wear face shield and protective gloves when mixing.",
      "Store between 5Â°C and 35Â°C.",
      "Wash equipment thoroughly after use."
    ]
  },
  {
    id: "yu-man-lou-30-sc",
    name: "Yu Man Lou 30% SC",
    category: "Herbicide",
    tagline: "Elite post-emergence control of broadleaf weeds and grasses in maize.",
    description: "Yu Man Lou 30% SC is an imported top-tier selective post-emergence herbicide. It targets and controls annual grass weeds and tough broadleaf weeds in maize fields without affecting crop health.",
    packshot: "NexGen product images with white background/yu-man-lou-30-sc.png",
    composition: "Topramezone 30% SC",
    price: 800,
    sizes: [
      { size: "35ML", price: 800 }
    ],
    target: "Broadleaf weeds, wild oats, and grasses in Maize (Makai).",
    dosage: [
      { crop: "Maize (Makai)", rate: "35 ml per acre", water: "100-120 Liters" }
    ],
    safety: [
      "Mix with recommended surfactant for best results.",
      "Apply when weeds are at 2-4 leaf stage.",
      "Wear mask and goggles during preparation.",
      "Maintain a 14-day pre-harvest interval."
    ]
  },
  {
    id: "fyzor-80-wg",
    name: "Fyzor 80% WG",
    category: "Fungicide",
    tagline: "Preventive and curative fungicide with water-dispersible granules.",
    description: "Fyzor 80% WG is a premium water-dispersible granular fungicide formulated to control powdery mildew, downy mildew, and leaf spot diseases. Its high-solubility granules ensure a uniform spray barrier on plant foliage.",
    packshot: "NexGen product images with white background/fyzor-80-wg.png",
    composition: "Fyzor 80% WG (Sulphur 80%)",
    price: 923,
    sizes: [
      { size: "1KG", price: 923 }
    ],
    target: "Powdery Mildew, Rust, and leaf spot diseases in field crops.",
    dosage: [
      { crop: "Wheat / Cereals", rate: "1 kg per acre", water: "100-120 Liters" }
    ],
    safety: [
      "Spray at the first appearance of disease symptoms.",
      "Ensure uniform coverage of both leaf sides.",
      "Store in a cool, dry place away from moisture.",
      "Wear protective gloves when handling the product."
    ]
  },
  {
    id: "sulphur-80-ww",
    name: "Sulphur 80% W/W",
    category: "Fungicide",
    tagline: "Preventive fungicide and secondary nutrient supply.",
    description: "Sulphur 80% W/W is a dust/powder formulation that serves as a multi-site preventive fungicide, acaricide, and essential secondary nutrient. It prevents powdery mildew, leaf spots, and controls mite populations.",
    packshot: "NexGen product images with white background/product_packshot.png",
    composition: "Sulphur 80% W/W",
    price: 19175,
    sizes: [
      { size: "25KG", price: 19175 }
    ],
    target: "Powdery Mildew, Rusts, Scab, and Mites in Orchards and Vegetables.",
    dosage: [
      { crop: "Vegetables / Fruits", rate: "2-3 kg per acre", water: "Broadcast or foliar spray" }
    ],
    safety: [
      "Wear a dust mask during weighing and mixing.",
      "Do not apply during high midday temperatures (>32Â°C) to prevent leaf burn.",
      "Keep dry in original packaging.",
      "Keep out of reach of children."
    ]
  },
  {
    id: "definite-10-wdg",
    name: "Definite 10% WDG",
    category: "Fungicide",
    tagline: "Water-dispersible systemic defense against blights and rusts.",
    description: "Definite 10% WDG (Difenoconazole 10% Water Dispersible Granules) is a systemic fungicide that offers preventative and curative action against leaf spots, blights, and rust diseases, enhancing crop health and yield.",
    packshot: "NexGen product images with white background/product_packshot.png",
    composition: "Difenoconazole 10% WDG",
    price: 507,
    sizes: [
      { size: "300 GM", price: 507 }
    ],
    target: "Early Blight, Late Blight, Yellow Rust, and leaf spots.",
    dosage: [
      { crop: "Potato / Tomato", rate: "300 grams per acre", water: "100 Liters" },
      { crop: "Wheat (Gandum)", rate: "300 grams per acre", water: "120 Liters" }
    ],
    safety: [
      "Apply at early disease onset.",
      "Do not mix with highly alkaline compounds.",
      "Ensure minimum 14-day pre-harvest interval.",
      "Wash hands and face with soap after application."
    ]
  },
  {
    id: "zinc-10",
    name: "Zinc 10%",
    category: "Specialty Nutrition",
    tagline: "Chelated liquid zinc for rapid foliage correction and root vigor.",
    description: "Zinc 10% is a highly bioavailable chelated zinc formulation that corrects zinc deficiency (Khaira disease) in crops, boosting chlorophyll synthesis, enzyme activation, and overall root establishment.",
    packshot: "NexGen product images with white background/product_packshot.png",
    composition: "Chelated Zinc 10% Liquid",
    price: 5460,
    sizes: [
      { size: "20 LTR", price: 5460 },
      { size: "200 LTR", price: 52000 }
    ],
    target: "Zinc deficiency, leaf yellowing, chlorosis, and stunted growth in Rice and Wheat.",
    dosage: [
      { crop: "Rice (Chawal)", rate: "2-3 Liters per acre (via irrigation)", water: "Flood irrigation" },
      { crop: "All Crops (Foliar)", rate: "500-1000 ml per acre", water: "100-120 Liters" }
    ],
    safety: [
      "Shake well before mixing with water.",
      "Avoid foliar spray during direct midday sunlight.",
      "Compatible with most fertilizers; test mix before application.",
      "Store in a shaded place."
    ]
  },
  {
    id: "potash-30",
    name: "Potash 30%",
    category: "Specialty Nutrition",
    tagline: "Concentrated liquid potash for grain fill and stress tolerance.",
    description: "Potash 30% is a liquid potassium fertilizer formulated for fast foliar absorption. It improves vascular flow, crop drought resistance, and accelerates carbohydrate translocation, producing heavy, uniform grain fill.",
    packshot: "NexGen product images with white background/product_packshot.png",
    composition: "Potassium 30% Liquid Concentrate",
    price: 6370,
    sizes: [
      { size: "10 LTR", price: 6370 },
      { size: "20 LTR", price: 11180 },
      { size: "200 LTR", price: 110500 }
    ],
    target: "Grain weight, crop structural strength, stress tolerance, and export-grade fruit sizing.",
    dosage: [
      { crop: "Rice / Wheat", rate: "2-3 Liters per acre (at grain fill stage)", water: "Flood irrigation" },
      { crop: "Citrus / Mangoes", rate: "4-5 Liters per acre", water: "Soil drench or flood" }
    ],
    safety: [
      "Apply during vegetative or post-flowering stages.",
      "Ensure adequate soil moisture before application.",
      "Do not exceed recommended dosage.",
      "Store in a cool, dry area."
    ]
  },
  {
    id: "sop-25kg",
    name: "SOP 25KG (Imported)",
    category: "Specialty Nutrition",
    tagline: "Premium imported Sulphate of Potash for premium crop yields.",
    description: "SOP 25KG is a highly soluble Sulphate of Potash fertilizer imported for commercial farmers. It delivers potassium and sulphur, promoting starch formation, oil synthesis in oilseeds, and improving crop resistance to diseases.",
    packshot: "NexGen product images with white background/product_packshot.png",
    composition: "Sulphate of Potash (K2O 50%, S 18%)",
    price: 12090,
    sizes: [
      { size: "25 KG", price: 12090 }
    ],
    target: "Yield optimization, sugar formation in sugarcane, and potassium correction.",
    dosage: [
      { crop: "All Crops", rate: "25 kg per acre (at sowing or vegetative stage)", water: "Broadcast or fertigation" }
    ],
    safety: [
      "Keep bag sealed in dry storage.",
      "Wash hands after handling.",
      "Use recommended protection gear during application.",
      "Avoid contact with eyes."
    ]
  },
  {
    id: "humic-acid-13-5",
    name: "Humic Acid 13.5%",
    category: "Bio-Stimulants",
    tagline: "Active soil conditioner enhancing nutrient uptake and root structure.",
    description: "Humic Acid 13.5% is a premium organic soil conditioner designed to restore soil health, improve soil aggregation, and increase Cation Exchange Capacity (CEC). It unlocks bound nutrients like phosphorus and zinc, ensuring root absorption.",
    packshot: "NexGen product images with white background/product_packshot.png",
    composition: "Humic Acid 13.5% + Fulvic Acid 1.5%",
    price: 1722,
    sizes: [
      { size: "8 KG", price: 1722 }
    ],
    target: "Soil compaction, low organic matter, and low root nutrient absorption.",
    dosage: [
      { crop: "All Crops", rate: "8 kg per acre (via broadcast or flooding)", water: "Soil broadcast followed by flooding" }
    ],
    safety: [
      "Store in cool and dry warehouse.",
      "Broadcast evenly across the field.",
      "Wash hands with soap after application.",
      "Keep out of reach of children."
    ]
  },
  {
    id: "gibberellic-acid-10",
    name: "Gibberellic Acid 10%",
    category: "Bio-Stimulants",
    tagline: "phytohormone trigger for cell division and growth.",
    description: "Gibberellic Acid 10% (GA3-T) is a highly concentrated plant growth regulator that stimulates cell division and elongation. It triggers uniform flowering, increases fruit set, and accelerates vegetative growth in cereals and vegetables.",
    packshot: "NexGen product images with white background/product_packshot.png",
    composition: "Gibberellic Acid 10% Soluble Powder",
    price: 228,
    sizes: [
      { size: "10 GM", price: 228 }
    ],
    target: "Flowering, cell elongation, vegetative growth, and fruit set.",
    dosage: [
      { crop: "Rice (Basmati)", rate: "10 grams per acre", water: "100-120 Liters (Apply at panicle initiation)" },
      { crop: "Vegetables / Fruits", rate: "1 gram per 10-15 Liters water", water: "Foliar Spray" }
    ],
    safety: [
      "Do not exceed recommended dose to avoid weak, elongated stems.",
      "Ensure uniform spraying on the crop canopy.",
      "Apply during early morning hours.",
      "Store in cool, dark place."
    ]
  },
  {
    id: "damdar-plus",
    name: "Damdar Plus",
    category: "Biologicals",
    tagline: "Liquid organic soil conditioner and crop bio-activator.",
    description: "Damdar Plus is a liquid bio-active formulation containing 13.5% humic acid. It stimulates soil microbes, boosts seed germination, and promotes root elongation, making it a powerful biological solution for crop vitality.",
    packshot: "NexGen product images with white background/product_packshot.png",
    composition: "Humic Acid 13.5% Liquid formulation",
    price: 812,
    sizes: [
      { size: "4 LTR", price: 812 },
      { size: "20 LTR", price: 3250 },
      { size: "200 LTR", price: 31200 }
    ],
    target: "Root structure development, seedling establishment, and soil organic enrichment.",
    dosage: [
      { crop: "Wheat / Cotton", rate: "4 Liters per acre (via flood irrigation)", water: "Flood irrigation / Fertigation" }
    ],
    safety: [
      "Shake well before use.",
      "Can be tank-mixed with liquid fertilizers.",
      "Store in a shaded place between 5Â°C and 35Â°C.",
      "Wash hands after work."
    ]
  }
];

window.productsData = products;


