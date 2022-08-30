import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want, but it's best to use the name of the store and surround it with `use` and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const cartStore = defineStore('cart', {
  state: () => ({
    cartItem: [],
    cartTotal: 0,
    products: [],
  }),
  getters: {
    getTotalAmount: (state) => {
      let subtotal=0;
      state.cartItem.map(item => {
        let cartProduct = state.products.find(product => product.id === item.id)
        subtotal=subtotal + cartProduct.price * item.quantity
      })
      return subtotal;
    },
    getCartItems: (state) => {
      let cartitems = [];
      state.cartItem.map(item => {
        let cartProduct = state.products.find(product => product.id === item.id)
        let itemObj = {
          id: cartProduct.id,
          name: cartProduct.title,
          price: cartProduct.price * item.quantity,
          quantity: item.quantity,
        }
        cartitems.push(itemObj)
      })
      return cartitems;
    }
  },
  actions: {
    addToCart(id) {
      let cid = this.cartItem.findIndex((item) => item.id === id)
      if (cid === -1) {
        this.cartItem = [...this.cartItem, { id, quantity: 1 }]
      } else {
        this.cartItem[cid].quantity++
      }
      this.cartTotal = this.cartItem.reduce((acc, item) => {
        return acc + item.quantity
      }, 0)

    },
    removeCartItem(id) {
      this.cartItem = this.cartItem.filter(item => item.id !== id)
      this.cartTotal = this.cartItem.reduce((acc, item) => {
        return acc + item.quantity
      }, 0)
    },
    async getProduct() {
      let response = await fetch('https://fakestoreapi.com/products')
      let result = await response.json()

      if (response.status === 200) {
        this.products = result
        return { result, error: false, loading: false };
      }
      return { result: null, error: true, loading: true };

    }
  }
})