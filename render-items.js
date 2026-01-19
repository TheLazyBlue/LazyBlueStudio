// Script to render items from items-data.js

// Render featured items on home page
function renderFeaturedItems() {
    const container = document.getElementById('featured-items-container');
    if (!container || typeof featuredItems === 'undefined') return;
    
    container.innerHTML = '';
    
    featuredItems.forEach(item => {
        const link = document.createElement('a');
        link.href = `item-detail.html?id=${item.id}`;
        link.className = 'featured-item-link';
        
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
        
        link.appendChild(itemDiv);
        container.appendChild(link);
    });
}

// Render gallery items on gallery page
function renderGalleryItems() {
    const container = document.getElementById('gallery-items-container');
    if (!container || typeof galleryItems === 'undefined') return;
    
    container.innerHTML = '';
    
    galleryItems.forEach(item => {
        const link = document.createElement('a');
        link.href = `item-detail.html?id=${item.id}`;
        link.className = 'gallery-item-link';
        
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
        
        link.appendChild(itemDiv);
        container.appendChild(link);
    });
}

// Render past events as vertical scrolling list
function renderPastEvents() {
    const container = document.getElementById('past-events-container');
    if (!container || typeof pastEvents === 'undefined') return;
    
    container.innerHTML = '';
    
    pastEvents.forEach(item => {
        const link = document.createElement('a');
        link.href = `item-detail.html?id=${item.id}`;
        link.className = 'event-item-link';
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'event-item';
        
        const imageDiv = document.createElement('div');
        imageDiv.className = 'event-item-image';
        
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        img.onerror = function() {
            // Fallback to placeholder if image doesn't exist
            imageDiv.className = 'event-item-image-placeholder';
            imageDiv.innerHTML = `<span>${item.title}</span>`;
        };
        
        imageDiv.appendChild(img);
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'event-item-info';
        
        const title = document.createElement('h3');
        title.textContent = item.title;
        
        const description = document.createElement('p');
        description.textContent = item.detailedDescription || item.description;
        
        if (item.eventDate) {
            const dateDiv = document.createElement('div');
            dateDiv.className = 'event-date';
            dateDiv.innerHTML = `<strong>Date:</strong> ${item.eventDate}`;
            infoDiv.appendChild(dateDiv);
        }
        
        if (item.location) {
            const locationDiv = document.createElement('div');
            locationDiv.className = 'event-location';
            locationDiv.innerHTML = `<strong>Location:</strong> ${item.location}`;
            infoDiv.appendChild(locationDiv);
        }
        
        const viewDetailsDiv = document.createElement('div');
        viewDetailsDiv.className = 'event-view-details';
        viewDetailsDiv.textContent = 'View Details →';
        
        infoDiv.appendChild(title);
        infoDiv.appendChild(description);
        infoDiv.appendChild(viewDetailsDiv);
        
        itemDiv.appendChild(imageDiv);
        itemDiv.appendChild(infoDiv);
        
        link.appendChild(itemDiv);
        container.appendChild(link);
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        renderFeaturedItems();
        renderGalleryItems();
        renderPastEvents();
    });
} else {
    renderFeaturedItems();
    renderGalleryItems();
    renderPastEvents();
}
