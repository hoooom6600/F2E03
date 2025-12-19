import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  // State
  const items = ref([]);
  // items 結構: [{ id, name, price, quantity }]

  // TODO: Getters
  // totalItems: 所有商品的數量總和
  // totalPrice: 所有商品的價格總和

  // TODO: Actions
  // addItem(product): 新增商品（如果已存在則增加數量）
  // removeItem(productId): 移除商品
  // updateQuantity(productId, quantity): 更新商品數量
  // clearCart(): 清空購物車

  return {
    items,
    // 回傳 getters 和 actions
  };
});
