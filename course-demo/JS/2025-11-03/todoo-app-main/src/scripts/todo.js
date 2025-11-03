// import { initPages } from "./pages"
// initPages()

// 程式碼寫在這裡
import Alpine from "alpinejs"
import { active } from "./active.js"

window.Alpine = Alpine

Alpine.data("active", active)

Alpine.start()
