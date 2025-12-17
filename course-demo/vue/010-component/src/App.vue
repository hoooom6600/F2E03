<script setup>
import BlogList from "./components/PropsExample/BlogList.vue";
import CardContainer from "./components/SlotExample/CardContainer.vue";
import UseItemList from "./components/ScopedSlotExample/UseItemList.vue";
import UseLayout from "./components/ScopedSlotExample/UseLayout.vue";
import Message from "./components/practice_props/Message.vue";
import CollapsePanel from "./components/practice_slot/CollapsePanel.vue";
import Counter from "./components/emit/Counter.vue";
import FormParent from "./components/emit/FormParent.vue";
import Cart from "./components/emit/Cart.vue";
import Card from "./components/practice_slot/Card.vue";
</script>

<template>
  <main>
    <!-- <BlogList /> -->
    <!-- <CardContainer /> -->
    <!-- <UseItemList /> -->
    <!-- <UseLayout /> -->
    <!-- <Counter /> -->
    <!-- <FormParent /> -->
    <!-- <Cart /> -->

    <!-- 元件練習 -->
    <!-- <Message type="success" title="Hello" content="Nice to meet you" />
    <Message type="success" title="World" content="" />
    <Message type="warning" title="Hi" />
    <Message type="error" /> -->

    <!-- 插槽練習 -->
    <Card>
      <template #header></template>
      <template #default>This is body</template>
      <template v-slot:footer></template>
    </Card>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
