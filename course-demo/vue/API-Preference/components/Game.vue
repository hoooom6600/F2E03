<script setup>
import { ref, reactive } from "vue";

// 1. 定義角色狀態 (用 reactive 因為是物件)
let hero = reactive({
  name: "蒼藍星",
  hp: 100,
  level: 1,
});

// 2. 定義一個計時器 (用 ref 因為是單一數字)
const timer = ref(0);

// --- 功能函數 ---

// [Bug 1] 受傷功能
// 為了方便寫程式，這裡解構了 hp
const takeDamage = () => {
  let { hp } = hero;
  hp -= 10;
  console.log("目前血量:", hp); // console 有印出 90，但畫面沒變？
};

// [Bug 2] 升級功能
const levelUp = () => {
  // 這裡試圖用 .value，因為這工程師有點混亂了
  hero.level.value++;
  console.log("升級了！"); // 程式直接報錯，為什麼？
};

// [Bug 3] 重置功能
const resetHero = () => {
  // 直接把一個新的物件塞回去，想說這樣最快
  hero = reactive({
    name: "蒼藍星",
    hp: 100,
    level: 1,
  });
  console.log("角色已重置"); // console 有印，但畫面上的數值完全沒變回去？
};
</script>
