import cartItem from "../../components/cart-item/cart-item";

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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity ===1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem =>
        cartItem.id === cartItemToRemove.id ? 
        { ...cartItem, quantity: cartItem.quantity -1}
        : cartItem
    )
}