export interface ServiceCategory {
  slug: string;
  navLabel: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSummary: string;
  heroImage: string;
  heroImageAlt: string;
  introParagraphs: string[];
  serviceGroups: {
    groupTitle: string;
    description: string;
    items: string[];
  }[];
  idealFor: string[];
  galleryIds: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  scopeNote?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  categorySlug:
    | "bathrooms-kitchens"
    | "flooring-tiling"
    | "painting-plastering"
    | "outdoor-improvements"
    | "handyman-services"
    | "property-maintenance";
  categoryLabel: string;
  workType: string;
  aspect: "landscape" | "portrait" | "square";
  featuredOnHome?: boolean;
}

export const BUSINESS_INFO = {
  name: "M-Tech Property Solutions",
  shortName: "M-Tech Solutions",
  tagline: "Property Maintenance, Handyman Services & Home Improvements",
  principalLocation: "Twickenham",
  widerCoverage: "South West London & Surrey",
  address: {
    street: "York Street",
    town: "Twickenham",
    postcode: "TW1 3JZ",
    country: "United Kingdom",
    full: "York Street, Twickenham, TW1 3JZ, UK",
  },
  phone: {
    display: "07586 254347",
    telHref: "tel:07586254347",
    intlHref: "tel:+447586254347",
    whatsappNumber: "447586254347",
    whatsappHref:
      "https://wa.me/447586254347?text=Hello%20M-Tech%20Property%20Solutions%2C%20I%20would%20like%20to%20enquire%20about%20a%20quote.",
  },
  email: {
    display: "michael.mtech.solutions@gmail.com",
    mailtoHref: "mailto:michael.mtech.solutions@gmail.com",
  },
  hours: {
    primaryDisplay: "Monday – Sunday: 08:00 – 20:30",
    extendedNote:
      "Published as 08:00–20:30 daily on Yell (with extended 06:00–23:30 contact hours listed on Nextdoor).",
    days: "7 days a week",
  },
  publishedClaims: [
    "Free Quotes",
    "Affordable Prices",
    "Small Jobs to Full Renovations",
    "Domestic, Landlord & Commercial Work",
  ],
  profiles: {
    nextdoor: "https://nextdoor.co.uk/pages/mp-handyman-twickenham-gb-eng",
    yell: "https://www.yell.com/biz/m-tech-property-solutions-twickenham-10973795",
    cylex:
      "https://twickenham.cylex-uk.co.uk/company/m-tech-property-solutions-28888194.html",
    instagram: "https://www.instagram.com/mtech.solutions",
    facebook: "https://www.facebook.com/share/1Cr9KL4hQK",
    googleBusiness: "https://share.google/2rip6sC0NMpZdX5pF",
  },
  logoUrl: "/images/mtech/logo.png",
  coverBannerUrl: "/images/mtech/cover.png",
  servicesBannerUrl: "/images/mtech/post_banner.png",
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "photo-20",
    src: "/images/mtech/gallery/photo_20.jpeg",
    alt: "Modern handleless white gloss kitchen unit installation and wood-effect flooring by M-Tech Property Solutions",
    title: "Modern Handleless Kitchen & Flooring Installation",
    categorySlug: "bathrooms-kitchens",
    categoryLabel: "Bathrooms & Kitchens",
    workType: "Kitchen units, worktops, appliances & wood-effect flooring",
    aspect: "landscape",
    featuredOnHome: true,
  },
  {
    id: "photo-55",
    src: "/images/mtech/gallery/photo_55.jpeg",
    alt: "Large timber garden decking and balustrade railing installation",
    title: "Timber Garden Decking & Balustrade Construction",
    categorySlug: "outdoor-improvements",
    categoryLabel: "Outdoor Improvements",
    workType: "Decking installation, timber railing & treatment",
    aspect: "landscape",
    featuredOnHome: true,
  },
  {
    id: "photo-51",
    src: "/images/mtech/gallery/photo_51.jpeg",
    alt: "Custom fitted living room alcove shelving, media cabinetry and recessed ceiling spotlights",
    title: "Bespoke Fitted Shelving, Cabinetry & Lighting",
    categorySlug: "handyman-services",
    categoryLabel: "Handyman & Joinery",
    workType: "Custom cabinetry installation, shelving & interior finishing",
    aspect: "landscape",
    featuredOnHome: true,
  },
  {
    id: "photo-40",
    src: "/images/mtech/gallery/photo_40.jpeg",
    alt: "Completed recessed coffered ceiling with integrated LED trough lighting and smooth plastered walls",
    title: "Recessed Coffered Ceiling Plastering & LED Lighting",
    categorySlug: "painting-plastering",
    categoryLabel: "Painting & Plastering",
    workType: "Plastering, ceiling feature construction & decorating",
    aspect: "landscape",
    featuredOnHome: true,
  },
  {
    id: "photo-22",
    src: "/images/mtech/gallery/photo_22.jpeg",
    alt: "Raised natural stone patio paving with block edging in rear garden",
    title: "Raised Natural Stone Patio & Edging",
    categorySlug: "outdoor-improvements",
    categoryLabel: "Outdoor Improvements",
    workType: "Patio construction, natural stone paving & levelling",
    aspect: "landscape",
    featuredOnHome: true,
  },
  {
    id: "photo-32",
    src: "/images/mtech/gallery/photo_32.jpeg",
    alt: "Open-plan living room with newly installed wood-effect flooring and freshly plastered walls",
    title: "Open-Plan Wood-Effect Flooring & Room Refurbishment",
    categorySlug: "flooring-tiling",
    categoryLabel: "Flooring & Tiling",
    workType: "Flooring installation, subfloor preparation & interior finish",
    aspect: "portrait",
    featuredOnHome: true,
  },
  {
    id: "photo-29",
    src: "/images/mtech/gallery/photo_29.jpg",
    alt: "Contemporary two-tone fitted kitchen with gloss wall cabinets, dark base units and timber flooring",
    title: "Two-Tone Kitchen Fitting & Worktop Installation",
    categorySlug: "bathrooms-kitchens",
    categoryLabel: "Bathrooms & Kitchens",
    workType: "Kitchen cabinet installation, worktops, sink & tap fitting",
    aspect: "portrait",
    featuredOnHome: true,
  },
  {
    id: "photo-46",
    src: "/images/mtech/gallery/photo_46.jpeg",
    alt: "Wide-plank grey LVT and laminate flooring installed in bright garden-facing room",
    title: "Wide-Plank Grey Flooring Installation",
    categorySlug: "flooring-tiling",
    categoryLabel: "Flooring & Tiling",
    workType: "Laminate / LVT flooring & skirting finishing",
    aspect: "landscape",
    featuredOnHome: true,
  },
  {
    id: "photo-41",
    src: "/images/mtech/gallery/photo_41.jpeg",
    alt: "Countertop vessel washbasin installed on timber vanity unit with mosaic tiled splashback",
    title: "Countertop Washbasin, Vanity & Mosaic Splashback",
    categorySlug: "bathrooms-kitchens",
    categoryLabel: "Bathrooms & Kitchens",
    workType: "Washbasin installation, tap connection & mosaic tiling",
    aspect: "portrait",
  },
  {
    id: "photo-42",
    src: "/images/mtech/gallery/photo_42.jpeg",
    alt: "Large-format dark marble-effect floor tiling installation using precision levelling clips",
    title: "Large-Format Floor Tiling & Subfloor Alignment",
    categorySlug: "flooring-tiling",
    categoryLabel: "Flooring & Tiling",
    workType: "Precision floor tiling & levelling system installation",
    aspect: "landscape",
  },
  {
    id: "photo-06",
    src: "/images/mtech/gallery/photo_06.jpeg",
    alt: "Indian sandstone garden patio paving freshly laid and pointed",
    title: "Sandstone Garden Patio Paving & Repointing",
    categorySlug: "outdoor-improvements",
    categoryLabel: "Outdoor Improvements",
    workType: "Paving, patio construction & joint repointing",
    aspect: "landscape",
  },
  {
    id: "photo-30",
    src: "/images/mtech/gallery/photo_30.jpeg",
    alt: "Close-board timber garden fencing installed with slotted concrete posts and gravel boards",
    title: "Timber Fencing, Concrete Posts & Gravel Boards",
    categorySlug: "outdoor-improvements",
    categoryLabel: "Outdoor Improvements",
    workType: "Fence installation & boundary improvements",
    aspect: "landscape",
  },
  {
    id: "photo-18",
    src: "/images/mtech/gallery/photo_18.jpeg",
    alt: "Vaulted roof extension interior with four skylight windows and freshly skimmed plaster walls",
    title: "Vaulted Roof Extension Plastering & Renovation",
    categorySlug: "property-maintenance",
    categoryLabel: "Property Maintenance & Renovations",
    workType: "Full room renovation, plastering & skylight reveals",
    aspect: "portrait",
  },
  {
    id: "photo-17",
    src: "/images/mtech/gallery/photo_17.jpeg",
    alt: "Black panelled front entrance door and white architrave surround",
    title: "Front Entrance Door & Exterior Frame Finishing",
    categorySlug: "handyman-services",
    categoryLabel: "Handyman & Joinery",
    workType: "Door hardware, frame preparation & exterior decorating",
    aspect: "portrait",
  },
  {
    id: "photo-04",
    src: "/images/mtech/gallery/photo_04.jpeg",
    alt: "Upholstered ottoman bed frame assembled on timber bedroom floor",
    title: "Flat-Pack Bedroom Furniture Assembly",
    categorySlug: "handyman-services",
    categoryLabel: "Handyman & Joinery",
    workType: "Flat-pack furniture assembly & room setup",
    aspect: "portrait",
  },
  {
    id: "photo-15",
    src: "/images/mtech/gallery/photo_15.jpeg",
    alt: "Compact cloakroom toilet and washbasin installation with wall tiling",
    title: "Cloakroom WC & Hand Basin Installation",
    categorySlug: "bathrooms-kitchens",
    categoryLabel: "Bathrooms & Kitchens",
    workType: "Toilet installation, compact basin & tiling",
    aspect: "portrait",
  },
  {
    id: "photo-38",
    src: "/images/mtech/gallery/photo_38.jpg",
    alt: "Hexagonal feature mosaic tiling in progress inside walk-in shower enclosure",
    title: "Walk-In Shower Hexagonal Mosaic Wall Tiling",
    categorySlug: "bathrooms-kitchens",
    categoryLabel: "Bathrooms & Kitchens",
    workType: "Bathroom tiling, waterproofing & shower preparation",
    aspect: "portrait",
  },
  {
    id: "photo-27",
    src: "/images/mtech/gallery/photo_27.jpeg",
    alt: "Shaker-style wall cabinets fitted against painted dark feature kitchen wall",
    title: "Shaker Kitchen Wall Cabinet Installation",
    categorySlug: "bathrooms-kitchens",
    categoryLabel: "Bathrooms & Kitchens",
    workType: "Kitchen unit installation & wall decorating",
    aspect: "landscape",
  },
  {
    id: "photo-11",
    src: "/images/mtech/gallery/photo_11.jpeg",
    alt: "Timber apex garden shed installed alongside feather-edge garden fencing",
    title: "Garden Shed Assembly & Base Preparation",
    categorySlug: "outdoor-improvements",
    categoryLabel: "Outdoor Improvements",
    workType: "Shed installation, outdoor timber work & fencing",
    aspect: "portrait",
  },
  {
    id: "photo-43",
    src: "/images/mtech/gallery/photo_43.jpeg",
    alt: "Front garden paved pathway, decorative white gravel and rendered low boundary walls",
    title: "Front Garden Paving, Gravel & Rendered Planter Walls",
    categorySlug: "outdoor-improvements",
    categoryLabel: "Outdoor Improvements",
    workType: "Front garden landscaping, paving & masonry rendering",
    aspect: "portrait",
  },
  {
    id: "photo-44",
    src: "/images/mtech/gallery/photo_44.jpeg",
    alt: "Painted grey timber garden gate with latches and overhead trellis",
    title: "Side Access Timber Gate & Latch Installation",
    categorySlug: "outdoor-improvements",
    categoryLabel: "Outdoor Improvements",
    workType: "Garden gate installation, hardware & fencing repair",
    aspect: "portrait",
  },
  {
    id: "photo-58",
    src: "/images/mtech/gallery/photo_58.jpeg",
    alt: "Freshly rendered and painted white front garden boundary walls along residential street",
    title: "Rendered & Painted Front Boundary Walls",
    categorySlug: "outdoor-improvements",
    categoryLabel: "Outdoor Improvements",
    workType: "Exterior rendering, masonry painting & kerb appeal",
    aspect: "landscape",
  },
  {
    id: "photo-01",
    src: "/images/mtech/gallery/photo_01.jpg",
    alt: "Recessed ceiling feature and wall plastering preparation in large reception room",
    title: "Recessed Ceiling Plastering & Surface Preparation",
    categorySlug: "painting-plastering",
    categoryLabel: "Painting & Plastering",
    workType: "Plastering, ceiling repairs & surface making good",
    aspect: "portrait",
  },
  {
    id: "photo-07",
    src: "/images/mtech/gallery/photo_07.jpeg",
    alt: "Smooth plastered and freshly painted white staircase walls",
    title: "Staircase & Hallway Plastering and Decorating",
    categorySlug: "painting-plastering",
    categoryLabel: "Painting & Plastering",
    workType: "Interior painting, decorating & stairwell preparation",
    aspect: "portrait",
  },
  {
    id: "photo-14",
    src: "/images/mtech/gallery/photo_14.jpeg",
    alt: "Interior panelled doors prepared and painted white on work trestles",
    title: "Interior Door Preparation, Sanding & Painting",
    categorySlug: "painting-plastering",
    categoryLabel: "Painting & Plastering",
    workType: "Woodwork preparation, sanding & painting",
    aspect: "landscape",
  },
  {
    id: "photo-23",
    src: "/images/mtech/gallery/photo_23.jpg",
    alt: "Plasterboarding and jointing around vaulted ceiling beams and skylights",
    title: "Skylight Reveal & Vaulted Ceiling Plastering",
    categorySlug: "painting-plastering",
    categoryLabel: "Painting & Plastering",
    workType: "Drylining, skimming & ceiling plastering",
    aspect: "landscape",
  },
  {
    id: "photo-25",
    src: "/images/mtech/gallery/photo_25.jpeg",
    alt: "Laser level alignment during ceiling boarding and plastering preparation",
    title: "Laser-Guided Ceiling Boarding & Drylining",
    categorySlug: "painting-plastering",
    categoryLabel: "Painting & Plastering",
    workType: "Precision ceiling levelling & surface preparation",
    aspect: "landscape",
  },
  {
    id: "photo-31",
    src: "/images/mtech/gallery/photo_31.jpg",
    alt: "Bespoke recessed wall shelving niches plastered and painted crisp white",
    title: "Recessed Wall Niches & Fine Plaster Finishing",
    categorySlug: "painting-plastering",
    categoryLabel: "Painting & Plastering",
    workType: "Boxing-in, recessed shelving & smooth finish plastering",
    aspect: "portrait",
  },
  {
    id: "photo-56",
    src: "/images/mtech/gallery/photo_56.jpg",
    alt: "Botanical feature mural wallpaper hung along interior hallway wall",
    title: "Feature Mural Wallpapering & Hallway Decorating",
    categorySlug: "painting-plastering",
    categoryLabel: "Painting & Plastering",
    workType: "Wallpapering, surface preparation & interior decorating",
    aspect: "portrait",
  },
  {
    id: "photo-02",
    src: "/images/mtech/gallery/photo_02.jpeg",
    alt: "Natural oak-effect flooring laid in loft room during refurbishment",
    title: "Loft Room Timber Flooring & Drylining",
    categorySlug: "flooring-tiling",
    categoryLabel: "Flooring & Tiling",
    workType: "Wood flooring installation & room preparation",
    aspect: "landscape",
  },
  {
    id: "photo-10",
    src: "/images/mtech/gallery/photo_10.jpg",
    alt: "Textured stone-effect feature wall tiling installed around interior doorway",
    title: "Feature Stone-Effect Wall Tiling",
    categorySlug: "flooring-tiling",
    categoryLabel: "Flooring & Tiling",
    workType: "Wall tiling & decorative surface installation",
    aspect: "portrait",
  },
  {
    id: "photo-19",
    src: "/images/mtech/gallery/photo_19.jpeg",
    alt: "Smooth self-levelling compound applied to subfloor prior to floor covering installation",
    title: "Subfloor Preparation & Self-Levelling Compound",
    categorySlug: "flooring-tiling",
    categoryLabel: "Flooring & Tiling",
    workType: "Subfloor levelling, preparation & moisture protection",
    aspect: "portrait",
  },
  {
    id: "photo-45",
    src: "/images/mtech/gallery/photo_45.jpg",
    alt: "Hallway laminate flooring installation with neat threshold and skirting boards",
    title: "Hallway Flooring & Threshold Finishing",
    categorySlug: "flooring-tiling",
    categoryLabel: "Flooring & Tiling",
    workType: "Laminate flooring installation & trim work",
    aspect: "portrait",
  },
  {
    id: "photo-24",
    src: "/images/mtech/gallery/photo_24.jpg",
    alt: "Concealed cistern boxing-in and moisture-resistant boarding with recessed niche",
    title: "Bathroom Boxing-In & Moisture-Resistant Boarding",
    categorySlug: "bathrooms-kitchens",
    categoryLabel: "Bathrooms & Kitchens",
    workType: "Concealed toilet framing, waterproofing & niche construction",
    aspect: "portrait",
  },
  {
    id: "photo-35",
    src: "/images/mtech/gallery/photo_35.jpeg",
    alt: "Tall bathroom storage unit assembled and fitted beside shower enclosure",
    title: "Bathroom Cabinet Assembly & Fitting",
    categorySlug: "bathrooms-kitchens",
    categoryLabel: "Bathrooms & Kitchens",
    workType: "Bathroom furniture assembly & installation",
    aspect: "portrait",
  },
  {
    id: "photo-53",
    src: "/images/mtech/gallery/photo_53.jpeg",
    alt: "Bath installation with glass shower screen, mixer tap and tiled surround",
    title: "Bath, Glass Screen & Mixer Tap Installation",
    categorySlug: "bathrooms-kitchens",
    categoryLabel: "Bathrooms & Kitchens",
    workType: "Bath fitting, silicone sealing & plumbing connections",
    aspect: "portrait",
  },
  {
    id: "photo-48",
    src: "/images/mtech/gallery/photo_48.jpeg",
    alt: "Timber handrail mounted along decorated staircase wall",
    title: "Staircase Handrail Mounting & Decorating",
    categorySlug: "handyman-services",
    categoryLabel: "Handyman & Joinery",
    workType: "Wall mounting, carpentry & staircase refresh",
    aspect: "portrait",
  },
  {
    id: "photo-16",
    src: "/images/mtech/gallery/photo_16.jpeg",
    alt: "Refurbished interior hallway with recessed downlights and newly plastered walls",
    title: "Property Refurbishment & Lighting Upgrade",
    categorySlug: "property-maintenance",
    categoryLabel: "Property Maintenance & Renovations",
    workType: "Rental / occupancy preparation, plastering & lighting",
    aspect: "portrait",
  },
  {
    id: "photo-39",
    src: "/images/mtech/gallery/photo_39.jpeg",
    alt: "Multi-foil thermal insulation installed across pitched roof rafters",
    title: "Thermal Roof Insulation Installation",
    categorySlug: "property-maintenance",
    categoryLabel: "Property Maintenance & Renovations",
    workType: "Insulation installation & conversion preparation",
    aspect: "landscape",
  },
  {
    id: "photo-59",
    src: "/images/mtech/gallery/photo_59.jpg",
    alt: "Refurbished garden room with exposed ceiling beams, feature brickwork and timber flooring",
    title: "Full Room Refurbishment, Flooring & Feature Brickwork",
    categorySlug: "property-maintenance",
    categoryLabel: "Property Maintenance & Renovations",
    workType: "Room renovation, timber beams & wood flooring",
    aspect: "landscape",
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "handyman-services",
    navLabel: "Handyman Services",
    title: "Handyman Services & General Repairs in Twickenham",
    shortTitle: "Handyman Services",
    metaTitle:
      "Handyman Services in Twickenham | Repairs, Assembly & Mounting | M-Tech Property Solutions",
    metaDescription:
      "Practical handyman services in Twickenham and South West London. Flat-pack furniture assembly, TV mounting, shelving, blinds, door repairs and everyday household installations. Free quotes.",
    heroEyebrow: "Handyman & Installations • Twickenham & South West London",
    heroHeadline:
      "Practical Handyman Services, Assembly & Everyday Home Repairs",
    heroSummary:
      "From flat-pack furniture assembly and secure wall mounting to door repairs, curtain rails and bespoke shelving — get reliable help with your household job list.",
    heroImage: "/images/mtech/gallery/photo_51.jpeg",
    heroImageAlt:
      "Bespoke fitted shelving and living room cabinetry installed by M-Tech Property Solutions",
    introParagraphs: [
      "Not every property job requires a separate trade contractor. M-Tech Property Solutions helps homeowners, tenants, landlords and local businesses in Twickenham and South West London tackle practical repairs, installations and everyday fittings efficiently.",
      "Whether you have a single urgent repair — such as a sticking internal door or a loose handle — or a full day's list of furniture assembly, television mounting, curtain poles, mirrors and shelving after moving into a property, you can book a convenient visit and get everything sorted properly.",
    ],
    serviceGroups: [
      {
        groupTitle: "Furniture Assembly & Room Setup",
        description:
          "Neat, sturdy assembly of domestic and commercial furniture without the stress of complex flat-pack instructions.",
        items: [
          "Assembly of flat-pack bedroom, living room and storage furniture",
          "Assembly of office desks, chairs and commercial furniture",
          "Full property furniture setup for newly purchased or let homes",
          "Furniture moving, repositioning and secure wall anchoring",
        ],
      },
      {
        groupTitle: "Wall Mounting & Hanging",
        description:
          "Accurate, level fixing into plasterboard, brick or masonry using appropriate heavy-duty fixings.",
        items: [
          "Television installation and wall bracket mounting",
          "Shelf installation, floating shelves and alcove shelving units",
          "Mirror installation and heavy frame hanging",
          "Picture, gallery wall and artwork installation",
          "Installation of curtains, curtain poles, tracks and rails",
          "Installation of roller, Venetian and Roman blinds",
        ],
      },
      {
        groupTitle: "Doors, Hardware & Household Fittings",
        description:
          "Everyday carpentry adjustments, safety fittings and general household maintenance.",
        items: [
          "Door-handle, latch, lock and hinge installation and repair",
          "Internal and external door repairs, easing and adjustment",
          "Child-safety gate installation at stairs and doorways",
          "Staircase handrail mounting and balustrade repairs",
          "Installation of household equipment, accessories and fittings",
          "Minor household repairs and snagging lists",
        ],
      },
    ],
    idealFor: [
      "Homeowners with a growing list of small household jobs",
      "New movers needing flat-pack assembly, TVs mounted and blinds fitted",
      "Landlords and tenants sorting snagging items between tenancies",
      "Offices and local shops needing furniture assembly or wall fittings",
    ],
    galleryIds: ["photo-51", "photo-04", "photo-17", "photo-48"],
    faqs: [
      {
        question: "Can I book M-Tech for several small handyman jobs in a single visit?",
        answer:
          "Yes. Many customers send a list of tasks — such as assembling a bed, hanging mirrors, fitting curtain poles and adjusting a door — so everything can be planned and completed during one appointment.",
      },
      {
        question: "Can I send photos of the items or walls before you quote?",
        answer:
          "Yes. Sending a quick photo or flat-pack product link via WhatsApp (07586 254347) or our enquiry form helps us confirm the right fixings and provide a clear, free quotation.",
      },
      {
        question: "Do you assemble both home and office furniture?",
        answer:
          "Yes. M-Tech Property Solutions advertises both domestic flat-pack furniture assembly and commercial/office furniture assembly and setup.",
      },
    ],
  },
  {
    slug: "property-maintenance",
    navLabel: "Property Maintenance",
    title: "Property Maintenance, Landlord & Commercial Services in Twickenham",
    shortTitle: "Property Maintenance",
    metaTitle:
      "Property Maintenance Twickenham | Landlord, End-of-Tenancy & Commercial Repairs | M-Tech",
    metaDescription:
      "Comprehensive property maintenance in Twickenham and South West London. Preventive maintenance, landlord & letting agent services, end-of-tenancy preparation, commercial repairs and renovations.",
    heroEyebrow: "Homeowners, Landlords, Letting Agents & Commercial Premises",
    heroHeadline:
      "Dependable Property Maintenance, Turnaround & Refurbishment Services",
    heroSummary:
      "Practical ongoing maintenance, end-of-tenancy preparation, commercial repairs and larger renovation works across Twickenham, South West London and Surrey.",
    heroImage: "/images/mtech/gallery/photo_18.jpeg",
    heroImageAlt:
      "Interior property renovation and vaulted skylight plastering by M-Tech Property Solutions",
    introParagraphs: [
      "Keeping a residential or commercial property in good order requires prompt, practical maintenance across multiple trades. M-Tech Property Solutions supports homeowners, landlords, letting agents and business premises with scheduled maintenance, responsive repairs and pre-occupation property turnarounds.",
      "From end-of-tenancy make-good work and damp or water-damage restoration to larger room refurbishments, insulation upgrades and commercial office fit-outs, our multi-disciplinary approach provides a straightforward point of contact.",
    ],
    serviceGroups: [
      {
        groupTitle: "Landlord, Letting Agent & Occupancy Preparation",
        description:
          "Fast, reliable turnarounds to get rental and residential properties ready for incoming tenants, buyers or owners.",
        items: [
          "End-of-tenancy repairs, redecoration and making good",
          "Preparing properties for letting or new occupation",
          "Property preparation and improvement for landlords and letting agents",
          "Preventive property maintenance programmes",
          "General property repairs and routine upkeep",
          "Full property setup, furniture assembly and fixture installation",
        ],
      },
      {
        groupTitle: "Damage, Damp, Restoration & Urgent Repairs",
        description:
          "Practical remedial work to resolve leaks, moisture issues, surface damage and urgent property faults.",
        items: [
          "Emergency repairs and fault finding (enquire to confirm current availability)",
          "Water-damage repair and interior restoration work",
          "Damp-related services and damp-proofing solutions",
          "Mould treatment, remediation and prevention",
          "Leak repairs and ceiling/wall restoration after leaks",
        ],
      },
      {
        groupTitle: "Commercial Premises, Renovations & Specialist Works",
        description:
          "Broader building, refurbishment and commercial property services advertised across M-Tech profiles.",
        items: [
          "General commercial repairs and workplace maintenance",
          "Office fit-out, upgrades and commercial furniture installation",
          "Shopfront sign installation and commercial frontage repairs",
          "Full room renovations, conversions and extensions",
          "Structural alterations, staircase refurbishment and custom boxing-in",
          "Thermal insulation installation and ceiling works",
          "Plumbing, drainage, drain unblocking and electrical/extractor-fan work (scope confirmed per enquiry)",
        ],
      },
    ],
    scopeNote:
      "Note on Specialist Works & Emergency Attendance: Where a project involves regulated electrical, gas, plumbing, drainage or structural work, please share your project requirements when enquiring so we can confirm the exact scope, arrangements and any required trade certifications before work begins. For urgent or emergency repairs, please call 07586 254347 directly to check immediate availability.",
    idealFor: [
      "Landlords preparing a flat or house between tenancies",
      "Letting agents and property managers needing a responsive local maintenance contact",
      "Homeowners planning multi-room refurbishments or water-damage restoration",
      "Offices, retail units and commercial premises in Twickenham and South West London",
    ],
    galleryIds: ["photo-18", "photo-16", "photo-39", "photo-59"],
    faqs: [
      {
        question: "Do you work with landlords and letting agents in Twickenham?",
        answer:
          "Yes. M-Tech Property Solutions specifically advertises property preparation, end-of-tenancy repairs, redecoration and ongoing maintenance for landlords, letting agents and property managers.",
      },
      {
        question: "Can you handle both small repairs and larger room renovations?",
        answer:
          "Yes. Our advertised services span everything from minor snagging lists and fixture replacements to full room renovations, plastering, flooring, kitchens, bathrooms and outdoor improvements.",
      },
      {
        question: "How do I check availability for an urgent or emergency repair?",
        answer:
          "For urgent property issues such as leaks or sudden damage, please telephone or WhatsApp 07586 254347 directly so we can confirm current availability and response timing.",
      },
    ],
  },
  {
    slug: "painting-plastering",
    navLabel: "Painting & Plastering",
    title: "Painting, Decorating & Plastering in Twickenham",
    shortTitle: "Painting & Plastering",
    metaTitle:
      "Painting, Decorating & Plastering in Twickenham | Wall & Ceiling Repairs | M-Tech",
    metaDescription:
      "Interior and exterior painting, decorating, wallpapering, plastering and wall or ceiling repairs in Twickenham and South West London. Clean preparation and smooth finishes.",
    heroEyebrow: "Interior & Exterior Finishing • Twickenham & SW London",
    heroHeadline:
      "Clean Painting, Decorating, Plastering & Surface Restoration",
    heroSummary:
      "Thorough surface preparation, smooth plastering, wall and ceiling repairs, wallpapering and crisp interior or exterior paintwork for homes and rental properties.",
    heroImage: "/images/mtech/gallery/photo_40.jpeg",
    heroImageAlt:
      "Smooth plastered room with recessed coffered LED ceiling and crisp white decoration by M-Tech Property Solutions",
    introParagraphs: [
      "A lasting paint or wallpaper finish depends on the quality of the preparation underneath. M-Tech Property Solutions carries out complete surface preparation, plastering, skimming, drylining and repairs alongside full interior and exterior decorating.",
      "Whether you need damaged plaster repaired after a leak, a staircase and hallway refreshed, interior doors stripped and painted, or an entire property redecorated prior to sale or letting, we focus on tidy working practices and clean, durable results.",
    ],
    serviceGroups: [
      {
        groupTitle: "Plastering, Ceiling & Wall Repairs",
        description:
          "Restoring damaged, cracked or uneven walls and ceilings to a smooth, paint-ready finish.",
        items: [
          "Plastering, skimming and drylining / plasterboarding",
          "Wall repairs, crack filling and damaged surface restoration",
          "Ceiling repairs, recessed ceiling features and cornicing",
          "Surface repairs and making good after electrical, plumbing or structural work",
          "Custom boxing-in and recessed wall niche construction",
        ],
      },
      {
        groupTitle: "Interior & Exterior Painting and Decorating",
        description:
          "Complete decoration for single rooms, hallways, woodwork and full properties.",
        items: [
          "Interior painting of walls, ceilings, hallways and reception rooms",
          "Exterior painting and masonry rendering finishes",
          "Wallpapering and feature mural installation",
          "Stripping, sanding and thorough surface preparation",
          "Repair and painting of window frames, window sills, doors and skirting",
        ],
      },
    ],
    idealFor: [
      "Homeowners refreshing living rooms, bedrooms, staircases and hallways",
      "Properties requiring plastering and making good after rewiring, leaks or building work",
      "Landlords needing clean, neutral end-of-tenancy redecoration",
      "Exterior boundary walls, doors and window frames needing weather-resistant painting",
    ],
    galleryIds: [
      "photo-40",
      "photo-01",
      "photo-07",
      "photo-14",
      "photo-23",
      "photo-25",
      "photo-31",
      "photo-56",
    ],
    faqs: [
      {
        question: "Do you repair walls and ceilings before painting?",
        answer:
          "Yes. We handle plastering, crack repairs, ceiling repairs, sanding and surface preparation so the final paint or wallpaper finish goes onto a sound, smooth surface.",
      },
      {
        question: "Can you paint woodwork, doors and window frames as well as walls?",
        answer:
          "Yes. Our decorating work includes stripping, sanding, repairing and painting internal and external doors, window sills, window frames, staircases and skirting boards.",
      },
    ],
  },
  {
    slug: "flooring-tiling",
    navLabel: "Flooring & Tiling",
    title: "Flooring Installation & Tiling Services in Twickenham",
    shortTitle: "Flooring & Tiling",
    metaTitle:
      "Flooring & Tiling in Twickenham | Laminate, Wood, LVT & Subfloor Levelling | M-Tech",
    metaDescription:
      "Flooring installation and tiling in Twickenham and South West London. Laminate, engineered wood, herringbone, LVT, subfloor levelling, floor repairs and wall or floor tiling.",
    heroEyebrow: "Timber, Laminate, LVT & Ceramic/Porcelain Tiling",
    heroHeadline:
      "Precision Flooring Installation, Subfloor Preparation & Tiling",
    heroSummary:
      "Expertly laid laminate, wood, herringbone and LVT flooring alongside subfloor levelling, floor repairs and wall or floor tiling for kitchens, bathrooms and living spaces.",
    heroImage: "/images/mtech/gallery/photo_46.jpeg",
    heroImageAlt:
      "Wide-plank grey flooring installed in a bright reception room by M-Tech Property Solutions",
    introParagraphs: [
      "New flooring or tiling transforms the look and practicality of a room — provided the subfloor is properly prepared and every board or tile is set out accurately. M-Tech Property Solutions installs a wide range of residential and commercial flooring systems across Twickenham and South West London.",
      "From pouring self-levelling compound and repairing uneven subfloors to laying laminate, engineered wood, herringbone patterns, luxury vinyl tile (LVT) and large-format porcelain tiles, we handle the full preparation and installation process.",
    ],
    serviceGroups: [
      {
        groupTitle: "Timber, Laminate & Specialist Flooring Systems",
        description:
          "Supply-and-fit or installation-only support across modern domestic and heavy-duty floor coverings.",
        items: [
          "Laminate flooring installation across living areas, bedrooms and hallways",
          "Engineered wood and solid timber flooring",
          "Herringbone and parquet-style flooring layouts",
          "LVT (Luxury Vinyl Tile) and composite flooring installation",
          "Protective, gym and sports flooring installation",
        ],
      },
      {
        groupTitle: "Subfloor Preparation, Repairs & Tiling",
        description:
          "Essential groundwork, levelling and precision ceramic, porcelain or stone tiling.",
        items: [
          "Subfloor preparation, boarding and moisture protection",
          "Subfloor levelling and self-levelling compound application",
          "Flooring repairs, board replacement and threshold trims",
          "Complete flooring replacement and uplift of old coverings",
          "Wall and floor tiling for kitchens, bathrooms, hallways and feature walls",
          "Tile regrouting, sealing and grout refurbishment",
        ],
      },
    ],
    idealFor: [
      "Open-plan living spaces, hallways and lofts upgrading to wood, laminate or LVT",
      "Uneven floors requiring professional subfloor levelling prior to installation",
      "Kitchens, bathrooms and entrance halls needing durable floor or wall tiling",
      "Home gyms, studios and commercial spaces requiring protective or sports flooring",
    ],
    galleryIds: [
      "photo-46",
      "photo-32",
      "photo-42",
      "photo-19",
      "photo-02",
      "photo-10",
      "photo-45",
    ],
    faqs: [
      {
        question: "Do you level uneven subfloors before laying new flooring?",
        answer:
          "Yes. Subfloor preparation and self-levelling are core parts of our flooring service, ensuring laminate, wood, LVT or tiles sit flat and do not creak or flex.",
      },
      {
        question: "What types of flooring do you install?",
        answer:
          "We install laminate, wood flooring, herringbone flooring, LVT (luxury vinyl tile), composite flooring, protective/gym flooring, as well as ceramic, porcelain and stone tiling.",
      },
    ],
  },
  {
    slug: "bathrooms-kitchens",
    navLabel: "Bathrooms & Kitchens",
    title: "Bathroom & Kitchen Installation and Upgrades in Twickenham",
    shortTitle: "Bathrooms & Kitchens",
    metaTitle:
      "Bathrooms & Kitchens Twickenham | Fitting, Upgrades, Tiling & Sealing | M-Tech",
    metaDescription:
      "Bathroom and kitchen installation, upgrades and renovation services in Twickenham and South West London. Showers, baths, basins, kitchen units, worktops, tiling and leak repairs.",
    heroEyebrow: "Kitchen & Bathroom Fitting • Upgrades & Renovations",
    heroHeadline:
      "Bathroom & Kitchen Installations, Practical Upgrades & Renovations",
    heroSummary:
      "From replacing taps, sinks, silicone and shower enclosures to fitting complete kitchen units, worktops and full bathroom refurbishments.",
    heroImage: "/images/mtech/gallery/photo_20.jpeg",
    heroImageAlt:
      "Modern white handleless kitchen installation by M-Tech Property Solutions",
    introParagraphs: [
      "Kitchens and bathrooms are the hardest-working rooms in any property. Whether you are planning a full refurbishment or simply need targeted upgrades — such as a new shower enclosure, replacement worktops, fresh waterproof silicone sealing or a cloakroom WC refresh — M-Tech Property Solutions delivers neat, practical workmanship.",
      "Because our work covers carpentry, cabinetry, plumbing connections, tiling, plastering, waterproofing and decorating, we can coordinate the multiple stages of a bathroom or kitchen project without you having to juggle separate trades.",
    ],
    serviceGroups: [
      {
        groupTitle: "Bathrooms, Shower Rooms & Cloakrooms",
        description:
          "Sanitaryware installation, waterproofing, tiling and complete bathroom upgrades.",
        items: [
          "Shower, bath, toilet and washbasin installation",
          "Shower-enclosure and glass bath screen fitting",
          "Concealed cistern framing, boxing-in and vanity unit installation",
          "Bathroom tiling, sealing, waterproofing and silicone replacement",
          "Leak repairs, damp-related and mould-related bathroom services",
          "Bathroom upgrades and complete bathroom renovations",
        ],
      },
      {
        groupTitle: "Kitchen Fitting & Upgrades",
        description:
          "Precision cabinet installation, worktops, sinks and practical kitchen improvements.",
        items: [
          "Kitchen-unit and kitchen-cabinet installation and replacement",
          "Worktop installation, cutting and adjustment",
          "Sink installation and plumbing connections",
          "Tap replacement (including mixer and boiling-water taps)",
          "Kitchen wall tiling, splashbacks and flooring installation",
          "General kitchen upgrades and layout refreshes",
        ],
      },
    ],
    idealFor: [
      "Homeowners planning a modern bathroom, en-suite, cloakroom or kitchen refurbishment",
      "Targeted upgrades such as new worktops, replacement taps, sinks or shower screens",
      "Resolving leaking seals, tired grout, silicone degradation or bathroom damp/mould",
      "Landlords upgrading rental kitchens and bathrooms to attract quality tenants",
    ],
    galleryIds: [
      "photo-20",
      "photo-29",
      "photo-27",
      "photo-41",
      "photo-15",
      "photo-38",
      "photo-24",
      "photo-35",
      "photo-53",
    ],
    faqs: [
      {
        question: "Do you take on smaller bathroom or kitchen jobs as well as full renovations?",
        answer:
          "Yes. Alongside complete bathroom and kitchen installations, we regularly handle focused jobs such as tap replacements, sink installations, silicone resealing, shower screens and cabinet replacements.",
      },
      {
        question: "Can you also complete the tiling, plastering and flooring in a kitchen or bathroom?",
        answer:
          "Yes. M-Tech Property Solutions provides wall and floor tiling, waterproofing, plastering, boxing-in, decorating and flooring installation as part of a coordinated kitchen or bathroom project.",
      },
    ],
  },
  {
    slug: "outdoor-improvements",
    navLabel: "Outdoor Improvements",
    title: "Outdoor Improvements, Decking, Fencing & Patios in Twickenham",
    shortTitle: "Outdoor Improvements",
    metaTitle:
      "Decking, Fencing & Patios in Twickenham | Outdoor & Garden Improvements | M-Tech",
    metaDescription:
      "Outdoor improvements and garden work in Twickenham and South West London. Timber decking, fencing installation and repairs, natural stone patios, paving, sheds and landscaping.",
    heroEyebrow: "Patios, Decking, Fencing & Garden Structures",
    heroHeadline:
      "Durable Outdoor Improvements, Patios, Decking & Fencing",
    heroSummary:
      "Extend and protect your outdoor space with solidly built timber decking, natural stone patios, secure fencing, garden sheds and boundary wall improvements.",
    heroImage: "/images/mtech/gallery/photo_55.jpeg",
    heroImageAlt:
      "Timber garden decking and balustrade installed by M-Tech Property Solutions",
    introParagraphs: [
      "Well-built outdoor features add usable living space, privacy and kerb appeal to your property. M-Tech Property Solutions undertakes hard landscaping, timber structures and exterior property maintenance for gardens and frontages across Twickenham, South West London and Surrey.",
      "Whether storm-damaged fence panels need replacing with concrete posts and gravel boards, a tired lawn is being upgraded with a natural sandstone patio or timber deck, or a front boundary wall needs rendering and painting, we build outdoor improvements designed for British weather.",
    ],
    serviceGroups: [
      {
        groupTitle: "Decking, Patios & Paving",
        description:
          "Level, well-drained outdoor surfaces for dining, relaxing and garden access.",
        items: [
          "Timber decking installation, balustrades and steps",
          "Decking repairs, board replacement and protective treatment",
          "Patio construction and natural stone or slab paving",
          "Ground levelling work, sub-base preparation and edging",
          "Patio repointing, joint repair and exterior surface restoration",
        ],
      },
      {
        groupTitle: "Fencing, Sheds & Garden Improvements",
        description:
          "Secure boundaries, outdoor storage buildings and front- or rear-garden upgrades.",
        items: [
          "Fence installation (close-board, panel fencing, concrete posts and gravel boards)",
          "Fence repairs, post replacement and side access gate fitting",
          "Garden shed installation, base preparation and shed repairs",
          "Front and rear garden landscaping, gravel paths and boundary wall rendering",
          "General garden maintenance and seasonal outdoor refresh",
        ],
      },
    ],
    idealFor: [
      "Homeowners creating a new garden patio or timber decked seating area",
      "Replacing leaning or storm-damaged garden fencing and side gates",
      "Installing a new garden shed or timber outbuilding on a level base",
      "Improving front-of-house kerb appeal with pathways, gravel and rendered boundary walls",
    ],
    galleryIds: [
      "photo-55",
      "photo-22",
      "photo-06",
      "photo-30",
      "photo-11",
      "photo-43",
      "photo-44",
      "photo-58",
    ],
    faqs: [
      {
        question: "Do you both install new decking/fencing and repair existing structures?",
        answer:
          "Yes. We carry out full new decking, patio and fence installations as well as targeted decking repairs, fence post replacements, patio repointing and shed repairs.",
      },
      {
        question: "Can you help with front garden walls and pathways?",
        answer:
          "Yes. Our outdoor work includes front garden paving, decorative gravel landscaping, side gates, and rendering and painting exterior boundary walls.",
      },
    ],
  },
];

export const CUSTOMER_TYPES = [
  {
    title: "Homeowners & Occupiers",
    description:
      "From mounting a TV, assembling flat-pack furniture or repairing a wall to upgrading your kitchen, bathroom, flooring or garden patio.",
    highlights: [
      "Single jobs or multi-task day lists",
      "Interior & exterior home improvements",
      "Clear communication & free quotes",
    ],
  },
  {
    title: "Landlords & Property Investors",
    description:
      "Practical, cost-effective property preparation, end-of-tenancy turnarounds, redecoration and responsive repairs between or during tenancies.",
    highlights: [
      "End-of-tenancy refreshes & snagging",
      "Durable flooring, painting & fixture upgrades",
      "Leak, damp & mould remedial work",
    ],
  },
  {
    title: "Letting Agents & Property Managers",
    description:
      "A single multi-disciplinary local contact associated with Twickenham and South West London able to handle varied maintenance instructions.",
    highlights: [
      "Pre-occupation readiness & setup",
      "Preventive & reactive maintenance",
      "Photo updates & straightforward quoting",
    ],
  },
  {
    title: "Commercial & Business Premises",
    description:
      "General commercial repairs, office furniture assembly, office fit-outs, shopfront sign installation and workplace refurbishment.",
    highlights: [
      "Office fit-outs & commercial furniture",
      "Shopfront signage & general repairs",
      "Flexible scheduling seven days a week",
    ],
  },
];

export const COVERAGE_DATA = {
  principalArea: {
    name: "Twickenham",
    postcodePrefix: "TW1 / TW2",
    addressListed: "York Street, Twickenham, TW1 3JZ",
    summary:
      "Twickenham is the principal location consistently associated with M-Tech Property Solutions across its public business profiles and directory listings.",
  },
  advertisedRegions: [
    {
      name: "South West London",
      summary:
        "Publicly advertised coverage area stated in M-Tech Property Solutions' Nextdoor promotional posts for domestic, landlord and commercial property improvement work.",
    },
    {
      name: "Surrey",
      summary:
        "Publicly advertised coverage alongside South West London in M-Tech's Nextdoor updates for property maintenance, outdoor works and renovations.",
    },
  ],
  nearbyEnquiryLocations: [
    "Whitton",
    "Teddington",
    "Hampton",
    "Richmond",
    "Kingston upon Thames",
    "Isleworth",
  ],
};

export const PUBLIC_PROFILE_HIGHLIGHTS = {
  nextdoor: {
    platform: "Nextdoor Business Page",
    profileName: "M-Tech Property Solutions",
    url: "https://nextdoor.co.uk/pages/mp-handyman-twickenham-gb-eng",
    categories: ["General contractor", "Property manager", "Handyman"],
    faveCount: 33,
    galleryCount: "58+ work & profile photos",
    publicRecommendation: {
      quote: "Polite and speedy responses. Quality work",
      author: "C. B.",
      context: "Public Nextdoor recommendation (Nextdoor Whitton)",
    },
  },
  yell: {
    platform: "Yell Business Directory",
    profileName: "M-Tech Property Solutions",
    url: "https://www.yell.com/biz/m-tech-property-solutions-twickenham-10973795",
    publishedClaims: ["Free Quotes", "Affordable Prices"],
    publishedHours: "08:00 – 20:30, Monday to Sunday",
  },
};

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((s) => s.slug === slug);
}

export function getGalleryByCategory(categorySlug?: string): GalleryItem[] {
  if (!categorySlug || categorySlug === "all") return GALLERY_ITEMS;
  return GALLERY_ITEMS.filter((item) => item.categorySlug === categorySlug);
}
