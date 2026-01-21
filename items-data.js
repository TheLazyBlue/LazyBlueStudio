// Items data for Lazy Blue Studio
// Add, edit, or remove items by modifying the arrays below

// Combine all items for easy lookup by ID
const allItems = {};

// Featured items shown on the home page
const featuredItems = [
    {
        id: 1,
        title: "Heart Vase",
        description: "Heart shaped vase",
        image: "images/items/item1/main.jpg",  // Main image
        detailedDescription: "This beautiful heart-shaped vase is perfect for expressing love and affection, making it an ideal gift for special occasions. The elegant design complements any decor style.",
        additionalImages: [
            "images/items/item1/image1.jpg",  // Add more images here
            "images/items/item1/image2.jpg"   // You can add more images as needed
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
        description: "Striped valentines vase",
        image: "images/items/item2/main.jpg",
        detailedDescription: "A stunning striped Valentine's vase featuring a romantic design perfect for the holiday of love. This piece makes a memorable gift that lasts.",
        additionalImages: [
            "images/items/item2/image1.jpg",
            "images/items/item2/image2.jpg"
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
        description: "Wavy vase",
        image: "images/items/item3/main.jpg",
        detailedDescription: "This unique wavy vase design adds a modern twist to traditional decor. It creates an eye-catching centerpiece that brings elegance to any space.",
        additionalImages: [
            "images/items/item3/image1.jpg",
            "images/items/item3/image2.jpg"
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
        title: "Knitted Heart Keychain Charm",
        description: "Handcrafted knitted heart keychain charm",
        image: "images/items/item4/main.jpg",
        detailedDescription: "A beautifully handcrafted knitted heart keychain charm showcasing intricate details and precision. Each piece is carefully designed and crafted to ensure the highest quality finish.",
        additionalImages: ["images/items/item4/image1.jpg"],
        price: null,
        category: "Accessories",
        specifications: {
            "Material": "Knitted",
            "Dimensions": "Customizable"
        }
    },
    {
        id: 5,
        title: "Jewelry Tree",
        description: "Elegant jewelry tree for organizing your collection",
        image: "images/items/item5/main.jpg",
        detailedDescription: "An elegant jewelry tree designed to organize and display your jewelry collection beautifully. Each piece is one-of-a-kind, making it a special addition to your space.",
        additionalImages: ["images/items/item5/image1.jpg"],
        price: null,
        category: "Organization",
        specifications: {
            "Material": "3D Printed"
        }
    },
    {
        id: 6,
        title: "F1 Teams Hardshell Notebook",
        description: "Custom F1 teams themed hardshell notebook",
        image: "images/items/item6/main.jpg",
        detailedDescription: "A custom-designed F1 teams themed hardshell notebook that can be personalized to match your style and preferences. Perfect for racing enthusiasts.",
        additionalImages: ["images/items/item6/image1.jpg"],
        price: null,
        category: "Notebooks",
        specifications: {
            "Material": "Hardshell",
            "Customizable": "Yes"
        }
    },
    {
        id: 7,
        title: "Knitted Otter",
        description: "Handcrafted knitted otter plush",
        image: "images/items/item7/main.jpg",
        detailedDescription: "An adorable handcrafted knitted otter plush made to order according to your specifications. Perfect for custom gifts or unique decor pieces.",
        additionalImages: ["images/items/item7/image1.jpg"],
        price: null,
        category: "Plush Toys",
        specifications: {
            "Made to Order": "Yes",
            "Material": "Knitted"
        }
    },
    {
        id: 8,
        title: "Knitted Teddy Bear",
        description: "Handcrafted knitted teddy bear",
        image: "images/items/item8/main.jpg",
        detailedDescription: "A charming handcrafted knitted teddy bear that showcases creativity and craftsmanship. This unique creation is sure to be a conversation starter and perfect companion.",
        additionalImages: ["images/items/item8/image1.jpg"],
        price: null,
        category: "Plush Toys",
        specifications: {
            "Material": "Knitted",
            "Handcrafted": "Yes"
        }
    },
];

// Add gallery items to allItems
galleryItems.forEach(item => {
    allItems[item.id] = item;
});

// Past events shown in the top section of the gallery page
const pastEvents = [
    {
        id: 20,
        title: "Women In Distress Margaretville Starfish Gala Fundraiser 2025",
        description: "Custom glowing ocean themed decor for the Women In Distress Starfish Gala hosted at Margaretville Hollywood Fl 2025",
        image: "images/events/event1/main.jpg",  // Add event images here
        detailedDescription: "Fundraiser for WID 2025.",
        additionalImages: [
            "images/events/event1/image1.jpg",
            "images/events/event1/image2.jpg",
            "images/events/event1/image3.jpg"
        ],
        eventDate: "May 2025",
        location: "Margaretville",
        category: "Event"
    },
    {
        id: 21,
        title: "Holiday Market",
        description: "Special holiday-themed items and decorations",
        image: "images/events/event2/main.jpg",
        detailedDescription: "Our holiday market featured special seasonal decorations and custom holiday-themed 3D printed items. Perfect gifts for the holiday season.",
        additionalImages: ["images/events/event2/image1.jpg"],
        eventDate: "December 2023",
        location: "Downtown Market",
        category: "Event"
    },
    {
        id: 22,
        title: "Craft Show Spring",
        description: "Spring collection showcase",
        image: "images/events/event3/main.jpg",
        detailedDescription: "Spring craft show featuring our latest collection of custom decorations and unique trinkets with seasonal themes.",
        additionalImages: ["images/events/event3/image1.jpg"],
        eventDate: "May 2023",
        location: "Spring Festival",
        category: "Event"
    }
];

// Add past events to allItems
pastEvents.forEach(item => {
    allItems[item.id] = item;
});
