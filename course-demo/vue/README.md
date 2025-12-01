# Vue.js 教學專案

這是一個漸進式的 Vue.js 教學專案，從基礎 JavaScript 到 Vue.js 的各個重要概念都有涵蓋。

## 課程結構

本課程按照以下順序漸進式學習：

1. **基礎 JavaScript (00-js)**
   - JavaScript 基礎概念

2. **關注點分離 (01-SOC)**
   - 學習程式碼組織和關注點分離的概念

3. **CDN 方式建立 Vue 應用 (02-creating-app-cdn)**
   - 使用 CDN 方式快速開始 Vue 開發

4. **從 JS 到 Vue 的轉換 (03-js-to-vue)**
   - 理解如何將普通 JavaScript 程式轉換為 Vue 應用

5. **Vue 指令 (05-directives)**
   - 文字渲染 (v-text, v-html)
   - 條件渲染 (v-if, v-show)
   - 列表渲染 (v-for)
   - 事件處理 (v-on, @)
   - 表單綁定 (v-model)
   - 屬性綁定 (v-bind, :)

6. **生命週期 (06-lifecycle-options, 09-lifecycle-composition)**
   - Options API 生命週期
   - Composition API 生命週期

7. **計算屬性 (07-computed)**
   - 學習使用計算屬性最佳化程式碼

8. **監聽器 (08-watch)**
   - 使用 watch 監聽數據變化

9. **元件化開發 (010-component)**
   - Props 傳遞
   - 事件發送 (Emit)
   - 插槽使用 (Slots)

10. **依賴注入 (011-provide)**
   - Provide/Inject 使用
   - 多語系範例實作

11. **狀態管理 (012-pinia)**
    - Pinia 狀態管理工具的使用

## 環境設定

請安裝 Node.js 版本至少在 18.3 或以上。

### 專案設定
每個子專案都可以獨立運行，進入對應資料夾後：

```bash
# 安裝依賴
npm install

# 開發環境運行
npm run dev

# 生產環境建置
npm run build
```

## 注意事項

1. **漸進式學習**：
   - 建議按照資料夾編號順序學習
   - 每個概念都建立在前面的基礎之上

2. **兩種 API 風格**：
   - 專案同時展示了 Options API 和 Composition API 的使用方式
   - 可以比較兩種風格的差異和適用場景

3. **練習建議**：
   - 每個主題都包含了實作範例
   - 建議動手跟著範例練習
   - 可以嘗試修改範例來深入理解概念

4. **相依性管理**：
   - 較早期的範例使用 CDN 方式引入 Vue
   - 後面的範例使用 npm 套件管理
   - 請確保按照各專案的 README 說明安裝必要依賴

5. **開發工具**：
   - 建議安裝 [Vue DevTools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) 擴充功能
   - 使用 VSCode + [Vue - Offical](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 獲得最佳開發體驗

## 學習資源

- [Vue 3 官方文件](https://vuejs.org/)
- [Vue Router 文件](https://router.vuejs.org/)
- [Pinia 文件](https://pinia.vuejs.org/)
