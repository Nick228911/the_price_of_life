document.addEventListener('DOMContentLoaded', function() {
    let storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    let cartContainer = document.getElementById('cartContainer');

    let totalPrice = 0;
    storedCart.forEach(product => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        let cartItemInfo = document.createElement('div');
        cartItemInfo.classList.add('cart-item-info');


        let image = document.createElement('img');
        image.src = product.image; // Замените на реальный путь к изображению
        image.alt = product.name;

        let name = document.createElement('p');
        name.classList.add('cart-item-name');
        name.innerText = product.name;
        cartItemInfo.appendChild(name);

        let price = document.createElement('p');
        price.innerText = 'Цена: ' + product.price*product.quantity + ' руб.';
        cartItemInfo.appendChild(price);

        let quantity = document.createElement('p');
        quantity.innerText = 'Количество: ' + product.quantity;
        cartItemInfo.appendChild(quantity);

        let productPrice = product.price*product.quantity;
        totalPrice += productPrice;

        cartItem.appendChild(image);
        cartItem.appendChild(cartItemInfo);

        cartContainer.appendChild(cartItem);
    });

    let totalCostElement = document.createElement('p');
    totalCostElement.classList.add('total-cost')
    totalCostElement.innerText = 'Итоговая стоимость: ' + totalPrice + ' руб.';

    document.body.appendChild(totalCostElement);
});
