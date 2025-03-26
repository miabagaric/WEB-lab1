document.addEventListener("DOMContentLoaded", () => {
    const categoryContainer = document.querySelector('.category-container');
    const productContainer = document.querySelector('.product-container');
    const currentCategoryElement = document.getElementById('current-category');
    const heroImage = document.getElementById('hero-image');
    const cartCountElement = document.getElementById('cart-count');

    let currentImage = 1;
    let cart = {};

    // Function to display products of a selected category
    function displayProducts(categoryName) {
        // Clear previous products
        productContainer.innerHTML = ''; 

        const category = data.categories.find(cat => cat.name === categoryName);
        if (!category) return;

        // Update current category display
        currentCategoryElement.textContent = categoryName;

        // Create product elements
        category.products.forEach(product => {
            const productElement = createProductElement(product);
            productContainer.appendChild(productElement);
            updateProductQuantity(product.name)
        });
    }

    // Function to create a single product element
    function createProductElement(product) {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        // Product image
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.className = "product-image";
        productElement.appendChild(productImage);

        // Product name
        const productName = document.createElement('h3');
        productName.textContent = product.name;
        productName.className = "product-name"
        productElement.appendChild(productName);

        // Product price
        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;
        productPrice.className = "product-price";
        productElement.appendChild(productPrice);

        // Cart icon
        const cartIcon = document.createElement('img');
        cartIcon.src = './images/cart_icon.png';
        cartIcon.alt = 'Add to Cart';
        cartIcon.classList.add('cart-icon');
        cartIcon.addEventListener('click', () => addToCart(product));
        productElement.appendChild(cartIcon);

        // Quantity badge
        const quantityBadge = document.createElement('span');
        quantityBadge.classList.add('quantity-badge');
        quantityBadge.textContent = cart[product.name] || 0;
        quantityBadge.style.display = 'none';
        productElement.appendChild(quantityBadge);

        return productElement;
    }

    // Function to add product to cart
    function addToCart(product) {
        cart[product.name] = (cart[product.name] || 0) + 1;
        updateCartCount();
        updateProductQuantity(product.name);
    }

    // Function to update cart count
    function updateCartCount() {
        const totalItems = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
        cartCountElement.textContent = totalItems;
    }

    // Function to update product quantity badge
    function updateProductQuantity(productName) {
        const productElements = document.querySelectorAll('.product');
        
        productElements.forEach(productElement => {
            const productTitle = productElement.querySelector('h3').textContent;
            
            if (productTitle === productName) {
                const quantityBadge = productElement.querySelector('.quantity-badge');
                const quantity = cart[productName];
                
                quantityBadge.textContent = quantity;
                quantityBadge.style.display = quantity > 0 ? 'flex' : 'none';
            }
        });
    }

    // Populate categories
    function initializeCategories() {
        data.categories.forEach(category => {
            const categoryElement = document.createElement('button');
            categoryElement.classList.add('category-button');
            categoryElement.textContent = category.name;
            categoryElement.addEventListener('click', () => displayProducts(category.name));
            categoryContainer.appendChild(categoryElement);
        });

        // Display first category by default
        if (data.categories.length > 0) {
            displayProducts(data.categories[0].name);
        }
    }

    // Hero image carousel
    function initializeHeroImageCarousel() {
        setInterval(() => {
            currentImage = currentImage === 1 ? 2 : 1;
            
            heroImage.classList.add('fade-out');
            
            setTimeout(() => {
                heroImage.src = `./images/store${currentImage}.jpg`;
                heroImage.classList.remove('fade-out');
                heroImage.classList.add('fade-in');
            }, 500);
            
            setTimeout(() => {
                heroImage.classList.remove('fade-in');
            }, 1000);
        }, 5000);
    }

    // Initialize the page
    initializeCategories();
    initializeHeroImageCarousel();
    currentCategoryElement.textContent = categoryName;
});