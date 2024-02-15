import { create } from 'zustand';
import { State, Store } from './store.props';

export const initialState: State = {
  cartItems: [],
};

export const useCartStore = create<Store>()((set) => ({
  cartItems: initialState.cartItems,
  resetCart: () => {
    set(initialState);
  },
}));
