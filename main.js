document.addEventListener('DOMContentLoaded', function () 
{
    const productsSection = document.getElementById('products');
    const addProductSection = document.getElementById('addProduct');

    if (addProductSection) 
	{
        addProductSection.querySelector('form').addEventListener('submit', function (event) 
		{
            event.preventDefault();
            const productName = event.target.elements.productName.value;

            console.log(`Product added: ${productName}`);
        });
    }

    const editProductSection = document.getElementById('editProduct');
    const loginSection = document.getElementById('login');

    const productsData = 
	[
        { id: 1, name: 'BMX Bike 1', price: '$299.99', image: 'bmx1.jpg' },
        { id: 2, name: 'BMX Bike 2', price: '$249.99', image: 'bmx2.jpg' },
        { id: 3, name: 'BMX Bike 3', price: '$349.99', image: 'bmx3.jpg' },
        { id: 4, name: 'BMX Bike 4', price: '$279.99', image: 'bmx4.jpg' },
        { id: 5, name: 'BMX Bike 5', price: '$319.99', image: 'bmx5.jpg' },
    
    ];

    function displayProducts() 
	{
        const productList = document.getElementById('productList');

        productsData.forEach(product => 
		{
            const listItem = document.createElement('li');
            listItem.classList.add('product-item'); 

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;
            listItem.appendChild(productImage);

            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info'); 
            productInfo.innerHTML = `<p>${product.name}</p><p>${product.price}</p>`;
            listItem.appendChild(productInfo);

            productList.appendChild(listItem);
        });

        productsSection.appendChild(productList);
    }

    if (addProductSection) 
	{
        addProductSection.querySelector('form').addEventListener('submit', function (event) 
		{
            event.preventDefault();
            const productName = event.target.elements.productName.value;

            console.log(`Product added: ${productName}`);
        });
    }


    if (editProductSection) 
	{
        editProductSection.querySelector('form').addEventListener('submit', function (event) 
		{
            event.preventDefault();
            const editedProductName = event.target.elements.editProductName.value;

            console.log(`Product edited: ${editedProductName}`);
        });
    }

	
    if (loginSection) 
	{
        loginSection.querySelector('form').addEventListener('submit', function (event) 
		{
            event.preventDefault();
            const username = event.target.elements.username.value;
            const password = event.target.elements.password.value;

            console.log(`Login attempt with username: ${username} and password: ${password}`);
        });
    }


    displayProducts();
});
