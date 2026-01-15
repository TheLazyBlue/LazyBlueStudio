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
    
    // Build the detail page HTML
    let html = `
        <div class="item-detail">
            <div class="item-detail-header">
                <a href="index.html" class="back-link">← Back to Home</a>
                <h1>${item.title}</h1>
                ${item.category ? `<span class="item-category">${item.category}</span>` : ''}
            </div>
            
            <div class="item-detail-content">
                <div class="item-images-section">
                    <div class="item-main-image">
                        <img src="${item.image}" alt="${item.title}" id="main-image">
                    </div>
                    ${item.additionalImages && item.additionalImages.length > 0 ? `
                    <div class="item-thumbnails">
                        ${item.additionalImages.map((img, index) => `
                            <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${img}">
                                <img src="${img}" alt="${item.title} - View ${index + 1}">
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}
                </div>
                
                <div class="item-info-section">
                    <div class="item-description">
                        <h2>Description</h2>
                        <p class="short-description">${item.description}</p>
                        ${item.detailedDescription ? `<p class="detailed-description">${item.detailedDescription}</p>` : ''}
                    </div>
                    
                    ${item.specifications && Object.keys(item.specifications).length > 0 ? `
                    <div class="item-specifications">
                        <h2>Specifications</h2>
                        <dl class="specs-list">
                            ${Object.entries(item.specifications).map(([key, value]) => `
                                <dt>${key}:</dt>
                                <dd>${value}</dd>
                            `).join('')}
                        </dl>
                    </div>
                    ` : ''}
                    
                    ${item.price ? `
                    <div class="item-price">
                        <span class="price-label">Price:</span>
                        <span class="price-value">$${item.price.toFixed(2)}</span>
                    </div>
                    ` : ''}
                    
                    <div class="item-actions">
                        <a href="contact.html" class="inquiry-btn">Inquire About This Item</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Set up thumbnail image switching
    if (item.additionalImages && item.additionalImages.length > 0) {
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
