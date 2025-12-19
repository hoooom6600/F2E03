<script setup>
import { useCartStore } from "@/stores/practice-cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { items, totalItems, totalPrice } = storeToRefs(cartStore);
const { removeItem, updateQuantity, clearCart } = cartStore;
</script>
<template>
  <div class="cart">
    <h2>購物車</h2>

    <div v-if="items.length === 0" class="empty">購物車是空的</div>

    <div v-else>
      <div v-for="item in items" :key="item.id" class="cart-item">
        <span>{{ item.name }}</span>
        <span>${{ item.price }}</span>
        <input
          type="number"
          :value="item.quantity"
          @change="updateQuantity(item.id, +$event.target.value)"
          min="1"
        />
        <button @click="removeItem(item.id)">刪除</button>
      </div>

      <div class="summary">
        <p>商品數量：{{ totalItems }}</p>
        <p>總價：${{ totalPrice }}</p>
        <button @click="clearCart">清空購物車</button>
      </div>
    </div>
  </div>
</template>
