import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  // State
  const items = ref([
    { id: 1, name: "蘋果", price: 10, quantity: 5 },
    { id: 2, name: "香蕉", price: 30, quantity: 2 },
  ]);
  // items 結構: [{ id, name, price, quantity }]

  // TODO: Getters
  // totalItems: 所有商品的數量總和
  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0);
  });
  // totalPrice: 所有商品的價格總和
  const totalPrice = computed(() => {
    return items.value.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  });
  // TODO: Actions
  // addItem(product): 新增商品（如果已存在則增加數量）
  function addItem(product) {}
  // removeItem(productId): 移除商品
  function removeItem(productId) {
    const targetIndex = items.value.findIndex((item) => item.id == productId);
    if (targetIndex >= 0) {
      items.value.splice(targetIndex, 1);
    }
  }
  // updateQuantity(productId, quantity): 更新商品數量
  function updateQuantity(productId, quantity) {
    const targetItem = items.value.find((item) => item.id == productId);
    if (targetItem) {
      targetItem.quantity = quantity;
    }
  }
  // clearCart(): 清空購物車
  function clearCart() {
    items.value = [];
  }

  return {
    items,
    // 回傳 getters 和 actions
    // getters
    totalItems,
    totalPrice,

    // actions
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
});
