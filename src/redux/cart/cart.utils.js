export const addItemToCart = (cartItems, cartItemAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemAdd.id
    );

    if (existingCartItem){
        return cartItems.map(cartItem => 
          cartItem.id ===cartItemAdd.id 
          ? {...cartItem,quantity: cartItem.quantity + 1}
          :cartItem  
        )
    }
    return [...cartItems, {...cartItemAdd, quantity: 1}]
};