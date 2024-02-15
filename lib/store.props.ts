// TODO: cart item interface, add amount
interface CartItem {}

export type State = {
  cartItems: CartItem[];
};
// TODO: add to cart an item, if already in cart, increase amount
// TODO: if decrease and amount is 1, remove from cart
// TODO: reset == remove all from cart
export type Actions = {
  // addItemToCart: (item: CartItem) => void;
  // removeItemFromCart: () => void;
  resetCart: () => void;
};

export type Store = State & Actions;
