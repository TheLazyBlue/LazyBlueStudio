// Script to render items from items-data.js

// Render featured items on home page
function renderFeaturedItems() {
    const container = document.getElementById('featured-items-container');
    if (!container || typeof featuredItems === 'undefined') return;
    
    container.innerHTML = '';
    
    featuredItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'featured-item';
        
        const imageDiv = document.createElement('div');
        imageDiv.className = 'featured-image';
        
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        img.onerror = function() {
            // Fallback to placeholder if image doesn't exist
            imageDiv.className = 'featured-image-placeholder';
            imageDiv.innerHTML = `<span>${item.title}</span>`;
        };
        
        imageDiv.appendChild(img);
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'featured-item-info';
        
        const title = document.createElement('h3');
        title.textContent = item.title;
        
        const description = document.createElement('p');
        description.textContent = item.description;
        
        infoDiv.appendChild(title);
        infoDiv.appendChild(description);
        
        itemDiv.appendChild(imageDiv);
        itemDiv.appendChild(infoDiv);
        
        container.appendChild(itemDiv);
    });
}

// Render gallery items on gallery page
function renderGalleryItems() {
    const container = document.getElementById('gallery-items-container');
    if (!container || typeof galleryItems === 'undefined') return;
    
    container.innerHTML = '';
    
    galleryItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'gallery-item';
        
        const imageDiv = document.createElement('div');
        imageDiv.className = 'gallery-image';
        
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        img.onerror = function() {
            // Fallback to placeholder if image doesn't exist
            imageDiv.className = 'gallery-image-placeholder';
            imageDiv.innerHTML = `<span>Art Piece ${item.id}</span>`;
        };
        
        imageDiv.appendChild(img);
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'gallery-item-info';
        
        const title = document.createElement('h3');
        title.textContent = item.title;
        
        const description = document.createElement('p');
        description.textContent = item.description;
        
        infoDiv.appendChild(title);
        infoDiv.appendChild(description);
        
        itemDiv.appendChild(imageDiv);
        itemDiv.appendChild(infoDiv);
        
        container.appendChild(itemDiv);
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        renderFeaturedItems();
        renderGalleryItems();
    });
} else {
    renderFeaturedItems();
    renderGalleryItems();
}
