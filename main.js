document.addEventListener('DOMContentLoaded', function () 
{
    // Main product data (can be extended with backend/API)
    const productsData = [
        { id: 1, name: 'BMX Bike 1', price: '299.99', image: 'bmx1.jpg', desc: 'Durable bike for city riding.' },
        { id: 2, name: 'BMX Bike 2', price: '249.99', image: 'bmx2.jpg', desc: 'Lightweight frame, perfect for tricks.' },
        { id: 3, name: 'BMX Bike 3', price: '349.99', image: 'bmx3.jpg', desc: 'Professional model for advanced riders.' },
        { id: 4, name: 'BMX Bike 4', price: '279.99', image: 'bmx4.jpg', desc: 'Great choice for beginners.' },
        { id: 5, name: 'BMX Bike 5', price: '319.99', image: 'bmx5.jpg', desc: 'Solid and stylish BMX bike.' }
    ];

    // Render products with lazy loading images
    function renderProducts(list = productsData) {
        const productList = document.getElementById('productList');
        if (!productList) return;
        productList.innerHTML = '';
        if (list.length === 0) {
            productList.innerHTML = '<li>No products match your criteria.</li>';
            return;
        }
        list.forEach(product => {
            const li = document.createElement('li');
            li.className = 'product-item';
            li.tabIndex = 0;
            // Lazy loading image
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.name;
            img.loading = 'lazy';
            img.setAttribute('data-loaded', 'false');
            img.addEventListener('load', () => img.setAttribute('data-loaded', 'true'));
            li.appendChild(img);

            const info = document.createElement('div');
            info.className = 'product-info';
            info.innerHTML = `
                <p><strong>${product.name}</strong></p>
                <p class="product-price">${product.price} EUR</p>
                <p>${product.desc}</p>
            `;
            li.appendChild(info);
            productList.appendChild(li);
        });
    }

    // Product search
    function setupSearch() {
        const searchForm = document.getElementById('searchForm');
        if (!searchForm) return;
        searchForm.addEventListener('submit', e => {
            e.preventDefault();
            const query = document.getElementById('searchInput').value.trim().toLowerCase();
            const filtered = productsData.filter(p =>
                p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query)
            );
            renderProducts(filtered);
        });
    }

    // Contact modal with validation
    function setupContactModal() {
        const contactBtn = document.getElementById('contactBtn');
        const modal = document.getElementById('contactModal');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const contactForm = document.getElementById('contactForm');
        const contactError = document.getElementById('contactError');

        if (!contactBtn || !modal || !closeModalBtn || !contactForm) return;

        // Open modal
        contactBtn.addEventListener('click', () => {
            modal.hidden = false;
            setTimeout(() => modal.querySelector('input,textarea').focus(), 100);
        });
        // Close modal
        closeModalBtn.addEventListener('click', () => { modal.hidden = true; });
        modal.addEventListener('click', e => {
            if (e.target === modal) modal.hidden = true;
        });
        // Close ESC
        document.addEventListener('keydown', e => {
            if (!modal.hidden && e.key === 'Escape') modal.hidden = true;
        });

        // Contact form validation
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            contactError.textContent = '';
            const name = contactForm.contactName.value.trim();
            const email = contactForm.contactEmail.value.trim();
            const msg = contactForm.contactMsg.value.trim();
            if (!name || !email || !msg) {
                contactError.textContent = 'All fields are required.';
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                contactError.textContent = 'Please enter a valid email address.';
                return;
            }
            contactError.textContent = 'Message sent! Thank you for contacting us.';
            contactForm.reset();
            setTimeout(() => { modal.hidden = true; contactError.textContent = ''; }, 1500);
        });
    }

    // Form validation: add, edit, login
    function setupForms() {
        // Add product
        const addProductSection = document.getElementById('addProduct');
        if (addProductSection) {
            addProductSection.querySelector('form').addEventListener('submit', function (event) {
                event.preventDefault();
                const productName = event.target.elements.productName.value.trim();
                if (!productName) {
                    alert('Product name is required.');
                    return;
                }
                alert(`Product "${productName}" has been added!`);
                event.target.reset();
            });
        }
        // Edit product
        const editProductSection = document.getElementById('editProduct');
        if (editProductSection) {
            editProductSection.querySelector('form').addEventListener('submit', function (event) {
                event.preventDefault();
                const editedProductName = event.target.elements.editProductName.value.trim();
                if (!editedProductName) {
                    alert('Product name is required.');
                    return;
                }
                alert(`Product has been updated to "${editedProductName}"!`);
            });
        }
        // Login
        const loginSection = document.getElementById('login');
        if (loginSection) {
            loginSection.querySelector('form').addEventListener('submit', function (event) {
                event.preventDefault();
                const username = event.target.elements.username.value.trim();
                const password = event.target.elements.password.value.trim();
                if (!username || !password) {
                    alert('Enter username and password.');
                    return;
                }
                alert(`Logged in as: ${username}`);
            });
        }
    }

    // Lazy loading images (fallback for older browsers)
    function lazyLoadImages() {
        if ('loading' in HTMLImageElement.prototype) return; // native support
        const imgs = document.querySelectorAll('img[loading="lazy"]');
        imgs.forEach(img => {
            if (!img.src) img.src = img.dataset.src;
        });
    }

    renderProducts();
    setupSearch();
    setupContactModal();
    setupForms();
    lazyLoadImages();
});
