<script>
export default {
  data() {
    return {
      cartItems: [
        { id: 1, name: "鍵盤", price: 2500, quantity: 1 },
        { id: 2, name: "滑鼠", price: 800, quantity: 2 },
        { id: 3, name: "耳機", price: 1500, quantity: 1 },
      ],
    };
  },
  // TODO: 加入 computed 屬性
  // 1. totalQuantity - 所有商品的數量總和
  // 2. totalPrice - 所有商品的價格總和（price * quantity）s
  computed: {
    totalQuantity() {
      return this.cartItems.reduce(
        (sum, currentItem) => sum + currentItem.quantity,
        0
      );
    },
    totalPrice() {
      return this.cartItems.reduce(
        (total, currentItem) =>
          total + currentItem.price * currentItem.quantity,
        0
      );
    },
  },
};
</script>

<template>
  <div class="cart">
    <h2>購物車</h2>

    <div v-for="item in cartItems" :key="item.id" class="item">
      <span>{{ item.name }} - ${{ item.price }}</span>
      <input type="number" v-model.number="item.quantity" min="0" />
    </div>

    <div class="summary">
      <p>商品總數： {{ totalQuantity }} 件</p>
      <p>總價：{{ totalPrice }}</p>
    </div>
  </div>
</template>
