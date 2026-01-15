// Items data for Lazy Blue Studio
// Add, edit, or remove items by modifying the arrays below

// Combine all items for easy lookup by ID
const allItems = {};

// Featured items shown on the home page
const featuredItems = [
    {
        id: 1,
        title: "Heart Vase",
        description: "Heart shaped vase with forever roses and lilies",
        image: "images/item1.jpg",  // Main image
        detailedDescription: "This beautiful heart-shaped vase features carefully arranged forever roses and lilies. Perfect for expressing love and affection, it makes an ideal gift for special occasions. The elegant design complements any decor style.",
        additionalImages: [
            "images/item1.jpg",  // Add more images here
            "images/item1.jpg"   // You can add item1_detail1.jpg, item1_detail2.jpg, etc.
        ],
        price: null,  // Add price if desired
        category: "Vases",
        specifications: {
            "Material": "3D Printed",
            "Dimensions": "Customizable",
            "Color Options": "Various available"
        }
    },
    {
        id: 2,
        title: "Valentines Vase",
        description: "Sriped valentines vase with forever roses and lilies",
        image: "images/item2.jpg",
        detailedDescription: "A stunning striped Valentine's vase featuring a romantic design perfect for the holiday of love. This piece comes with forever roses and lilies arranged beautifully, making it a memorable gift that lasts.",
        additionalImages: [
            "images/item2.jpg",
            "images/item2.jpg"
        ],
        price: null,
        category: "Vases",
        specifications: {
            "Material": "3D Printed",
            "Dimensions": "Customizable",
            "Color Options": "Various available"
        }
    },
    {
        id: 3,
        title: "Wavy Vase",
        description: "Wavy vase with forever roses and lilies",
        image: "images/item3.jpg",
        detailedDescription: "This unique wavy vase design adds a modern twist to traditional flower arrangements. Featuring forever roses and lilies, it creates an eye-catching centerpiece that brings elegance to any space.",
        additionalImages: [
            "images/item3.jpg",
            "images/item3.jpg"
        ],
        price: null,
        category: "Vases",
        specifications: {
            "Material": "3D Printed",
            "Dimensions": "Customizable",
            "Color Options": "Various available"
        }
    }
];

// Add featured items to allItems
featuredItems.forEach(item => {
    allItems[item.id] = item;
});

// Gallery items shown on the gallery page
const galleryItems = [
    {
        id: 4,  // Starting with ID 4 since 1-3 are featured items
        title: "Custom 3D Printed Sculpture",
        description: "Handcrafted design",
        image: "images/gallery1.jpg",
        detailedDescription: "A beautifully handcrafted 3D printed sculpture showcasing intricate details and precision. Each piece is carefully designed and printed to ensure the highest quality finish.",
        additionalImages: ["images/gallery1.jpg"],
        price: null,
        category: "Sculptures",
        specifications: {
            "Material": "3D Printed",
            "Dimensions": "Customizable"
        }
    },
    {
        id: 5,
        title: "Decorative Trinket",
        description: "Unique piece",
        image: "images/gallery2.jpg",
        detailedDescription: "A unique decorative trinket that adds character to any space. Each piece is one-of-a-kind, making it a special addition to your collection.",
        additionalImages: ["images/gallery2.jpg"],
        price: null,
        category: "Trinkets",
        specifications: {
            "Material": "3D Printed"
        }
    },
    {
        id: 6,
        title: "3D Printed Decoration",
        description: "Custom design",
        image: "images/gallery3.jpg",
        detailedDescription: "Custom-designed 3D printed decoration that can be personalized to match your style and preferences.",
        additionalImages: ["images/gallery3.jpg"],
        price: null,
        category: "Decorations",
        specifications: {
            "Material": "3D Printed",
            "Customizable": "Yes"
        }
    },
    {
        id: 7,
        title: "Personalized Item",
        description: "Made to order",
        image: "images/gallery4.jpg",
        detailedDescription: "This personalized item is made to order according to your specifications. Perfect for custom gifts or unique decor pieces.",
        additionalImages: ["images/gallery4.jpg"],
        price: null,
        category: "Personalized",
        specifications: {
            "Made to Order": "Yes",
            "Personalization": "Available"
        }
    },
    {
        id: 8,
        title: "Unique Art Piece",
        description: "One of a kind",
        image: "images/gallery5.jpg",
        detailedDescription: "A one-of-a-kind art piece that showcases creativity and craftsmanship. This unique creation is sure to be a conversation starter.",
        additionalImages: ["images/gallery5.jpg"],
        price: null,
        category: "Art",
        specifications: {
            "Uniqueness": "One of a kind"
        }
    },
    {
        id: 9,
        title: "Custom Trinket",
        description: "Handcrafted detail",
        image: "images/gallery6.jpg",
        detailedDescription: "A custom trinket featuring handcrafted details that demonstrate our attention to quality and design.",
        additionalImages: ["images/gallery6.jpg"],
        price: null,
        category: "Trinkets",
        specifications: {
            "Handcrafted": "Yes"
        }
    },
    {
        id: 10,
        title: "3D Printed Art",
        description: "Precision crafted",
        image: "images/gallery7.jpg",
        detailedDescription: "Precision-crafted 3D printed art piece that combines technology with artistic expression.",
        additionalImages: ["images/gallery7.jpg"],
        price: null,
        category: "Art",
        specifications: {
            "Precision": "High",
            "Material": "3D Printed"
        }
    },
    {
        id: 11,
        title: "Decorative Piece",
        description: "Custom creation",
        image: "images/gallery8.jpg",
        detailedDescription: "A custom decorative piece created to enhance your living space with style and elegance.",
        additionalImages: ["images/gallery8.jpg"],
        price: null,
        category: "Decorations",
        specifications: {
            "Custom": "Yes"
        }
    },
    {
        id: 12,
        title: "Unique Decoration",
        description: "Specialty item",
        image: "images/gallery9.jpg",
        detailedDescription: "A specialty decoration item that stands out with its unique design and quality craftsmanship.",
        additionalImages: ["images/gallery9.jpg"],
        price: null,
        category: "Decorations",
        specifications: {
            "Specialty": "Yes"
        }
    }
];

// Add gallery items to allItems
galleryItems.forEach(item => {
    allItems[item.id] = item;
});

// Past events shown in the top section of the gallery page
const pastEvents = [
    {
        id: 20,
        title: "Art Fair 2024",
        description: "Showcasing our collection at the local art fair",
        image: "images/gallery1.jpg",  // Add event images here
        detailedDescription: "We participated in the 2024 Art Fair, displaying our finest 3D printed creations and custom decorations. It was an amazing experience sharing our work with the community.",
        additionalImages: ["images/gallery1.jpg"],
        eventDate: "March 2024",
        location: "Community Arts Center",
        category: "Event"
    },
    {
        id: 21,
        title: "Holiday Market",
        description: "Special holiday-themed items and decorations",
        image: "images/gallery2.jpg",
        detailedDescription: "Our holiday market featured special seasonal decorations and custom holiday-themed 3D printed items. Perfect gifts for the holiday season.",
        additionalImages: ["images/gallery2.jpg"],
        eventDate: "December 2023",
        location: "Downtown Market",
        category: "Event"
    },
    {
        id: 22,
        title: "Craft Show Spring",
        description: "Spring collection showcase",
        image: "images/gallery3.jpg",
        detailedDescription: "Spring craft show featuring our latest collection of custom decorations and unique trinkets with seasonal themes.",
        additionalImages: ["images/gallery3.jpg"],
        eventDate: "May 2023",
        location: "Spring Festival",
        category: "Event"
    }
];

// Add past events to allItems
pastEvents.forEach(item => {
    allItems[item.id] = item;
});
