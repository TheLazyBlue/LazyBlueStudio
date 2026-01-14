# How to Add/Edit Items

This website uses a data-driven system to manage items. To add, edit, or remove items, simply edit the `items-data.js` file.

## File Structure

- **`items-data.js`** - Contains all item data (titles, descriptions, image paths)
- **`render-items.js`** - Automatically renders items from the data file
- **HTML files** - Use containers that are populated by JavaScript

## Adding Items

### Featured Items (Home Page)

Edit the `featuredItems` array in `items-data.js`:

```javascript
const featuredItems = [
    {
        id: 1,
        title: "Your Item Title",
        description: "Your item description",
        image: "images/your-image.jpg"  // Path to your image file
    },
    // Add more items...
];
```

### Gallery Items (Gallery Page)

Edit the `galleryItems` array in `items-data.js`:

```javascript
const galleryItems = [
    {
        id: 1,
        title: "Your Item Title",
        description: "Your item description",
        image: "images/your-image.jpg"  // Path to your image file
    },
    // Add more items...
];
```

## Item Properties

Each item has the following properties:

- **`id`** (number) - Unique identifier for the item
- **`title`** (string) - The item's title/name
- **`description`** (string) - Description text shown below the title
- **`image`** (string) - Path to the image file (e.g., "images/item1.jpg")

## Image Setup

1. Create an `images` folder in your project directory (if it doesn't exist)
2. Add your image files to the `images` folder
3. Update the `image` property in `items-data.js` to point to your image file
4. If an image is missing, a gradient placeholder will be displayed automatically

## Examples

### Adding a Featured Item

```javascript
{
    id: 4,
    title: "Custom 3D Printed Vase",
    description: "A beautiful handcrafted vase perfect for any space.",
    image: "images/vase.jpg"
}
```

### Removing Items

Simply remove the item object from the array. For example, to remove the second featured item:

```javascript
const featuredItems = [
    {
        id: 1,
        title: "First Item",
        // ...
    },
    // Remove this item:
    // {
    //     id: 2,
    //     title: "Second Item",
    //     // ...
    // },
    {
        id: 3,
        title: "Third Item",
        // ...
    }
];
```

### Editing an Existing Item

Find the item in the array and update its properties:

```javascript
{
    id: 1,
    title: "Updated Title",  // Changed
    description: "Updated description",  // Changed
    image: "images/new-image.jpg"  // Changed
}
```

## Notes

- Changes to `items-data.js` will automatically appear on the website after refreshing the page
- Images should be optimized for web use (JPEG, PNG, or WebP format recommended)
- If an image file is missing, a gradient placeholder will be shown with the item's title
- There's no limit to the number of items you can add
