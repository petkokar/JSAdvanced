function solve() {
   const addButtons = document.getElementsByClassName('add-product');
   const arrayAddButton = Array.from(addButtons);
   const checkoutButton = document.querySelector('.checkout');
   const cartTextArea = document.querySelector('textarea');
   let cartItems = [];

   for(let button of arrayAddButton) {
      button.addEventListener('click', (event) => {
         const product = event.currentTarget.closest('.product');
         console.log(product)
         const productName = product.querySelector('.product-title').textContent;
         const productPrice = Number(product.querySelector('.product-line-price').textContent);

         const cartItem = { name: productName, price: productPrice};
         cartItems.push(cartItem);

         cartTextArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      });
   }

   checkoutButton.addEventListener('click', () => {
      const uniqueProducts = [];
      const totalPrice = cartItems.reduce(function (sum, item) {
            return sum + item.price;
      }, 0).toFixed(2); 

      for(let item of cartItems) {
         if (!uniqueProducts.includes(item.name)) {
            uniqueProducts.push(item.name);
         }
      }

      const productList = uniqueProducts.join(', ');
      cartTextArea.value += `You bought ${productList} for ${totalPrice}.\n`;
      disableButtons();
   })

   function disableButtons() {
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => button.disabled = true);
   }
}