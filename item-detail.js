// Script to load and display item details on the item detail page

function loadItemDetail() {
    const container = document.getElementById('item-detail-container');
    if (!container || typeof allItems === 'undefined') {
        container.innerHTML = '<p>Error loading item data.</p>';
        return;
    }
    
    // Get item ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = parseInt(urlParams.get('id'));
    
    if (!itemId || !allItems[itemId]) {
        container.innerHTML = `
            <div class="item-not-found">
                <h2>Item Not Found</h2>
                <p>Sorry, the item you're looking for doesn't exist.</p>
                <a href="index.html" class="back-link">Return to Home</a>
            </div>
        `;
        return;
    }
    
    const item = allItems[itemId];
    
    // Determine back link - use referrer if available, otherwise default
    let backLink = 'index.html';
    let backText = 'Home';
    
    if (document.referrer) {
        const referrerUrl = new URL(document.referrer);
        const referrerPath = referrerUrl.pathname;
        
        if (referrerPath.includes('gallery.html')) {
            backLink = 'gallery.html';
            backText = 'Gallery';
        } else if (referrerPath.includes('index.html') || referrerPath.endsWith('/')) {
            backLink = 'index.html';
            backText = 'Home';
        }
    } else if (item.category === 'Event') {
        backLink = 'gallery.html';
        backText = 'Gallery';
    }
    
    // Combine main image with additional images
    const allImages = [item.image, ...(item.additionalImages || [])];
    
    // Build the detail page HTML - simplified with focus on images
    let html = `
        <div class="item-detail">
            <div class="item-detail-header">
                <a href="${backLink}" class="back-link">← Back to ${backText}</a>
            </div>
            
            <div class="item-detail-content">
                <div class="item-images-section">
                    <div class="item-main-image">
                        <img src="${item.image}" alt="${item.title}" id="main-image">
                    </div>
                    ${allImages.length > 1 ? `
                    <div class="item-thumbnails">
                        ${allImages.map((img, index) => `
                            <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${img}">
                                <img src="${img}" alt="${item.title} - View ${index + 1}">
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}
                </div>
                
                <div class="item-info-section">
                    <h1 class="item-title">${item.title}</h1>
                    <div class="item-description">
                        <p class="short-description">${item.description}</p>
                    </div>
                    
                    <div class="item-actions">
                        ${item.category === 'Event' 
                            ? `<a href="contact.html" class="inquiry-btn">Contact Us</a>`
                            : `<a href="https://www.etsy.com" target="_blank" class="inquiry-btn">Visit Store</a>`
                        }
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Set up thumbnail image switching
    if (allImages.length > 1) {
        const thumbnails = container.querySelectorAll('.thumbnail');
        const mainImage = document.getElementById('main-image');
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                // Add active class to clicked thumbnail
                this.classList.add('active');
                // Update main image
                mainImage.src = this.dataset.image;
            });
        });
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadItemDetail);
} else {
    loadItemDetail();
}
