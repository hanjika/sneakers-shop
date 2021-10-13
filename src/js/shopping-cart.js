let cartTotal = 0;
let shoppingCart = [];

export function toggleShoppingCart(cart) {
    cart.classList.toggle('show-cart')
}

export function openShoppingCart(cart) {
    cart.classList.add('show-cart')
}

export function increaseQuantity(product) {
    shoppingCart =  [];

    for(let i = 0; i < product.length; i++) {
        product[i].quantity  +=1
        return product[i].quantity 
    }
}

export function decreaseQuantity(product) {
    shoppingCart =  [];
    
    for(let i = 0; i < product.length; i++) {
        if(product[i].quantity > 0)  {
            product[i].quantity  -=1
        }
        return product[i].quantity 
    }
}

export function addToCart(product) {
    cartTotal = 0;

    for(let i  = 0; i < product.length; i++) {
        shoppingCart.push(product[i].price * product[i].quantity)

        for(let i = 0; i < shoppingCart.length; i++) {
            cartTotal += shoppingCart[i]
        }

        renderProductInCart(product[i])
    }
}

function renderProductInCart (product) {
    const orderSummary =  document.querySelector('.order-summary')

    const cartProduct = document.createElement('div')
    const cartProductImage = document.createElement('img')
    const cartProductInfo = document.createElement('div')
    const cartProductTitle = document.createElement('h4')
    const cartProductPriceDetails = document.createElement('div')
    const cartProductPrice = document.createElement('span')
    const cartProductQuantity =  document.createElement('span')
    const cartProductTotal = document.createElement('span')
    const cartProductRemoveBtn =  document.createElement('button')
    const cartCheckout = document.createElement('button')

    cartProduct.classList.add('cart-product')
    cartProductImage.classList.add('cart-product-image')
    cartProductInfo.classList.add('cart-product-info')
    cartProductTitle.classList.add('cart-product-title')
    cartProductPriceDetails.classList.add('cart-product-price-details')
    cartProductPrice.classList.add('cart-product-price')
    cartProductQuantity.classList.add('cart-product-quantity')
    cartProductTotal.classList.add('cart-product-total')
    cartProductRemoveBtn.classList.add('cart-product-remove-btn')
    cartCheckout.classList.add('cart-checkout')

    cartProductInfo.appendChild(cartProductTitle)
    cartProductInfo.appendChild(cartProductPriceDetails)

    cartProductPriceDetails.appendChild(cartProductPrice)
    cartProductPriceDetails.appendChild(cartProductQuantity)
    cartProductPriceDetails.appendChild(cartProductTotal)

    cartProduct.appendChild(cartProductImage)
    cartProduct.appendChild(cartProductInfo)
    cartProduct.appendChild(cartProductRemoveBtn)

    cartProductImage.src = product.gallery[0].thumbnail
    cartProductTitle.textContent = product.title
    cartProductPrice.textContent = `$${product.price}`
    cartProductQuantity.textContent = `x${product.quantity}`
    cartProductTotal.textContent = `$${product.price * product.quantity}`

    cartCheckout.textContent = 'Checkout'

    orderSummary.innerHTML = ''
    orderSummary.appendChild(cartProduct)
    orderSummary.appendChild(cartCheckout)
}