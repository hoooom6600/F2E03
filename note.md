# HTML

## 標籤（僅列出主題重點與個人不熟悉的）

- Block vs Inline elements
- 語意化
  - 提升 SEO
  - 程式碼維護與可讀性高
  - 代碼更加有結構
  - 使用者可及性高（無障礙體驗）
    - 也能提升 SEO
    - 螢幕閱讀器
- 表格

  - `<colgroup>`: 將表格的 col 群組化
    - 在簡單表格結構中，對 SEO 和無障礙加分幾乎沒效果，若要設定樣式，針對格子寫新的 CSS 檔案。所以幾乎可以棄用此標籤
      - `<colgroup>` 也可以下 class 然後設定樣式在 CSS，但既然都要寫在 CSS 了，再寫 `<colgroup>` 很多此一舉
    - 若為複雜表格，可以保留以提高結構及維護性，但這只是對於開發者的好處，對使用者的無障礙和 SEO 仍無感
    - 其實實務上也不常用 `<colgroup>`

- 多媒體嵌入

  - 圖片
    - `<img>`: 顯示圖片本身
    - `<figure>` vs `<figcaption>`
      - 包裹 `<img>` 標籤 → 語意化提升，結構提升，SEO 也提升
    - `<picture>`
      - 包裹 `<img>` 標籤 → 語意化提升，結構提升，SEO 也提升
      - 螢幕不同大小時，顯示不同大小的圖片
      - 支援不同圖片格式，可以讓瀏覽器自行選擇哪個比較容易解析
  - 影片
    - `<video>`
    - `<track>`: 影片字幕
  - 聲音
    - `<audio>`
  - 圖片、影片、聲音資料來源
    - `<source>`: 用於 `<video>`、`<picture>` 和 `<audio>` 內
      - type 屬性標示檔案格式
  - 網頁或外部檔案
    - `<iframe>`: 在當前頁面內嵌入另一個 HTML 頁面
    - `<object>`
      - type 屬性為內容類型，如：圖片、影片、**_PDF_** 文件...etc

- 圖片標籤比較

|      項目      |                 <img\>                 |                  <figure\>                  |               <picture\>                |
| :------------: | :------------------------------------: | :-----------------------------------------: | :-------------------------------------: |
|      語意      | O，但沒有圖片說明，除非破圖的 alt 屬性 | ∆ 部分語意，與 <figcaption\> 搭配才比較完整 | X，本身沒語意，語意來自內部 <img\> 標籤 |
|    結尾標籤    |              ∆（自閉合）               |                      O                      |                    O                    |
|    display     |                 inline                 |                    block                    |                 inline                  |
|  如何顯示圖片  |          自己本身就是圖片標籤          |            子層插入 <img\> 標籤             |          子層插入 <img\> 標籤           |
|      目的      |              插入單一圖片              |             包含圖片與說明文字              |          響應式圖片、格式切換           |
|   無障礙支援   |    使用 alt 屬性（圖片損毀時顯示）     |          可搭配 <figcaption\> 說明          |   可與 <figure\> + <figcaption\> 搭配   |
| 是否支援多來源 |                   X                    |                      X                      |           O（透過 <source\>）           |
|    常見用途    |                靜態圖片                |          圖片附說明、插圖、表格等           |      響應式設計、不同螢幕大小支援       |

\*註: 實務操作上，幾乎都是直接 <img\> 下去

- 表單

  - `<form>`

    - action 屬性: 要把表單送去哪裡
      - 若為空值，則代表將表單送至表單所屬頁面
    - method 屬性方法
      - get
      - post
      - dialog
      - 目前 HTML 只支援以上三種（未來更新說不定會跟上進度）
      - 若後端格式用其他 REST，前端只能在 HTML 表單藏一個隱藏，以 patch 為例: `<input type="hidden" name="_method" value="_patch">`
      - REST 有很多方法，但 HTML 只支援幾種，這是 HTML 的限制與缺點，並不是 REST 設計太多，因為其他程式語言是可以使用的，比如 JS
    - 傳遞敏感資料通常是放在 headers，比較不容易被看到，但有心人士要翻還是能找到

  - `<fieldset>`: 將表單群組化，有語意
    - `<legend>`: 替群組化的表格定標題
  - `<progress>`: 進度條
  - `<output>`
  - 提交
    - `<input>`: `autocomplete` 屬性
    - `<input>` 和 `<button>` type 比較
      - | input  |     |  button  |
        | :----: | :-: | :------: |
        | button |  =  | \*button |
        | submit |  =  |  submit  |
        | image  |  =  |  submit  |
        | reset  |  =  |  reset   |

- 其他個人常忘記或少用的
  - `<address>`: 聯絡資訊地址
  - `<blockquote>` vs `<q>`
  - `<code>`
  - `<time>`: 內有 datetime 屬性。機器可以解析的標籤，提升 SEO
  - `<mark>`: 螢光筆效果
  - `<details>` 與 `<summary>`: HTML 內建區塊收合
    - `<details>`: `open` 屬性
  - `<svg>`: 文字程式碼的向量圖
    - 優點
      - 增加 SEO
      - 檔案小
      - 可以做透明，有透明度
      - 可做動畫
      - 可以直接放在程式碼上
      - 也可以製作成一個 svg 檔案然後在 HTML 以 `<img>` 帶入
    - 常見 svg 內的**_子元素_**
      - `rect`: 矩形
      - `circle`: 圓形
      - `line`: 線條
      - `path`: 複雜圖形
      - `polyon`: 多邊形
    - 常見屬性
      - `stroke`: 邊框色
      - `stroke-width`: 邊框寬度
      - `fill`: 圖形顏色
  - `<canvas>`: 動態內容、互動處理，要用 JS 繪製內容
  - dataset 屬性: `data-*`
    - 常見使用情境: ~~不會用前端的後端~~，或者前後端交換資料，若沒有建立 API
    - 請後端把資料丟到 HTML dataset，然後前端自己去撈

# CSS（僅列出主題重點與個人不熟悉的）

- 各家瀏覽器預設樣式不同
  - 比如複雜的表格，每格 rowspan 數量不一樣，高度會依不同瀏覽器設定而異，以這個例子而言，CSS 規範並沒有對這種表格有明確的高度說明。
- CSS reset
  - [Tailwind](https://tailwindcss.com/docs/preflight): 根據需要的元素，自己複製做重置
  - [Eric Meyer](https://meyerweb.com/eric/tools/css/reset/): 全面重置
- 瀏覽器預設
  - 字體大小: 16px
    - 但標籤的預設渲染是用 em
  - 字體系列設定 inherit
- 命名規則
- 選取器

  - 各種符號搭配
  - 偽類

    - child 系列: 根據父元素下的**_所有子元素順序_**來匹配，而不管子元素的標籤類型是什麼

      - :fitst-child:
      - :last-child: 透過 Live Server 選不到 <body\> 內最後一個元素，因為套件自動插入 <script\>
      - :nth-child()

    - type 系列: 每個同層的第一個同型。**_先看類型再看順序_**
      - :first-of-type
      - :last-of-type
      - :nth-of-type()
    - nth 參數
      - `n`: 任意整數
      - `odd`: 奇數 = `2n+1`
      - `even`: 偶數 = `2n`
      - 自寫公式
    - 互動
      - :visited
        - 清除快取就可以取消這個偽類
      - :focus
        - 通常用在 input, button, a 標籤，其中以 input 最最最常見
        - tab 鍵來 focus，或者無障礙閱讀器
      - :hover
      - :active: 相當於 JS mousedown 的時機

  - 優先級
    - 分數計算
      - 標籤: 1
      - class、屬性、偽類: 10
      - id: 100
      - inline CSS: 1000
      - !important: 10000
      - 同分時，看編輯位置誰排序較後。後者覆蓋前者。
      - `+`, `~`, `>` 不用計分
  - [CSS 選取小遊戲](https://flukeout.github.io/)

- 單位

  - 絕對單位

    - 通常使用場景: 間距
    - px
      - 套用在 font-size 中，代表的是字高大小，不是字寬也不是行高
    - pt
    - pc

  - 相對單位
    - em: 以父層為基準，父層沒設定就會找祖父層
    - rem: 以根元素為基準
    - ex
    - ch
    - %: 通常使用在寬度
    - vw: 如果有卷軸，也會算在 vh 內
    - vh: 通常使用在側邊攔 (side bar)
    - vmax
    - vmin
    - fr: grid 用
  - inherit: 繼承
    - 繼承父層設定，假如父層用相對單位，則子層繼承的是父層相對單位計算出來的絕對單位
    - inherit 繼承父層的「結果」，不是父層的「寫法」。

- 寬度與高度
  - 高度是根據內容撐開的
    - 內容是純文字者，高度不會是`行數 x 字體大小`，因為還有行高的存在
  - 訂寬不訂高，不過 <header\> 可以考慮訂高
  - 內外距
    - padding: 百分比以**_父層 content 寬度_**為基準
    - margin: 百分比以**_父層內容空間_**為基準
      - Block Formatting Context (BFC)
        - 兄弟元素間的左右 margin 不會重疊
        - 兄弟元素間的上下 margin 會重疊
        - 父元素與長子元素間的上 margin 會重疊
        - 父元素與次子元素間的下 margin 會重疊
  - 容器計算
    - `box-sizing`
      - `content-box`: 預設值。設定 width 只給內容本體
      - `border-box`
  - 衝突時: min > max > 一般
- 文字
  - 字體
    - [字型](https://fonts.google.com/)
      - 通常開發專案不太會用引入的 font-family，因為樣式是設計師創作的，會請他提供字型檔案
    - [icon - Font Awesome](https://fontawesome.com/)
      - 注意語法及版本號要相符
      - **_不可更改字型!!!!!_**
    - font-size 有關鍵字可以用，但實務很少用到
    - font-weight: 預設 400 = 關鍵字 normal
  - 底線
    - text-decoration = text-decoration-line + text-decoration-color + text-decoration-style
      - 參數順序沒有固定
  - line-height: 行高
    - 垂直置中好方法之一
  - text-indent: **_首行_**縮排
    - 正數: 內推
    - 負數: 外擠
  - 間距
    - letter-spacing: 字元之間，包含空白字元，**_換行會被解析為空白字元_**
    - word-sapcing: 空白字元寬度，中文無感，因為中文單字常見顯示方式不是用空白字元
  - 對齊
    - direction: 影響的是**_元素內_**的靠左或靠右
    - text-align
    - vertical-align
- 背景

  - 顏色
  - 圖片

    - 可以疊很多張圖，前者蓋住後者
    - repeat: 填滿
      - X 軸
      - Y 軸
    - 漸層: linear-gradient(to <目標方向>, <起始色彩>, <結束色彩>);
    - 尺寸
      - cover: 裁切
      - contain: 不裁切
    - 一行屬性可以設定多張圖片，記得用 `,` 隔開
    - 簡寫: `background: <image> <repeat> <background-position> / <size> <color>;`

  - 層級: 背景圖 = 漸層 > 背景色

- 邊線

  - border (邊框線)
    - 參數沒有固定順序，依照自己 coding style 就好
    - border-style: 瀏覽器預設 none
    - border-collapse
      - collapse
      - separate
    - border-spacing: 僅適用於 border-collapse: separate 狀況
    - border-radius
      - 水平半徑 / 垂直半徑
  - outline (外框線 / 輪廓線)
    - outline-offset
      - 正數往外走，負數往內縮
  - |   項目   |     border     |                     outline                      |
    | :------: | :------------: | :----------------------------------------------: |
    | 空間佔據 |       O        |                 X<br>算在 margin                 |
    | 單邊設計 |       O        |                        X                         |
    | 常見用途 | 邊界和佈局排版 | 元素的聚焦 (focus) 互動<br>常見於: input, button |

- 列表

  - list-style-image
    - 不能透過 CSS 改變圖片大小
  - list-style-type
  - 樣式優先級: list-style-image > list-style-type

- 圖片常用搭配技
  - `width`
  - `aspect-ratio`: 圖片比例（較新的 CSS，注意支援度）
  - `object-fit`: 如何將圖片放入適應容器
    - fill: 預設值
    - cover: 最常用。等比例放大圖片，但不會改變圖片本身比例，但有可能看不到超出容器的區塊
    - contain: 不改變原始圖片比例，當長邊碰到容器尺寸，則停止縮放
    - none: 原本多大就顯示多大
- 瀏覽器兼容: 不同瀏覽器的 CSS 支援進度不一致，有這些前綴就可以在該瀏覽器實驗階段提前試用
  - `-webki`: Chrome, Safari
  - `-moz`: Firefox
  - `ms`: IE, Edge
  - `o`: Opera
- 佈局排版

  - 浮動 (float)
    - float
    - clear
    - 文繞圖
  - display

    - inline-block
      - 注意空白字元問題
      - 當元素沒有寫死寬度時，同層內其中一個元素超出剩餘寬度，則不會自適應縮窄以並排
    - flex
      - 父層
        - justify-content
          - star, end 是依據文字走向 (CSS 的 direction，或者 HTML 的 dir 屬性) 而論
          - flex-star, flex-end 才是依據 justify-content 的主軸去走
        - align-content 預設值: normal，效果等同 stretch
      - 子層
        - order
          - 預設值為 0，不是 1
          - 數值相同時，看 HTML 結構順序如何
        - flex-grow: 預設值 0
        - flex-shrink: 預設值 1
          - 實務上，要改變 shrink 的值，通常是改成 0，表示不要收縮
        - flex-basis
          - 優先序: flex-basis > width / height (是寬還高，依主軸而定)
      - [青蛙遊戲](https://flexboxfroggy.com/)
    - grid
      - 父層
        - grid-template = grid-template-areas + grid-template-columns
        - grid-template-
          - columns
          - rows
          - areas
            - 需搭配子層 grid-area
            - 字串，自訂命名。通常會縮排
            - `.`: 格子留白
            - 只能命名格子只能是矩形，不可為 L 或其他形狀
        - grid-auto-flow ≒ flex-direction
        - gap
        - 尺寸設定
          - fr
          - repeat(n 次, 尺寸)
          - minmax(min,max)
      - 子層
        - grid- (記得後綴沒有 s)
          - column-
            - start
            - end
          - row-
            - start
            - end
          - area
            - 告訴 CSS 選取的元素是父層 areas 命名的哪個。屬性值不用 `"` 包字串
            - 座標: <grid-row-start\> / <grid-column-start\> / <grid-row-end\> / <grid-column-end\>
          - 第 n 條線
            - 數字
            - /
            - span
      - [花園遊戲](https://codepip.com/games/grid-garden/)

  - 排版演變史
    - table → float → inline-block → flex
  - 定位 (position)

    - 上右下左偏移 == inset 簡寫
      - 某側不偏移時，在 inset 為 `auto`，非 0
    - z-index: 預設值為 auto，**_0 ≠ auto_**
      - `-1` 容易出意外，實務上通常以正數表達
      - 被遮蓋的元素**_高機率_**點擊不了（不是完全無法觸發），所以很少這樣設計
    - 絕對定位 (absolute) 的祖先層沒有非 static 者，則以**瀏覽器視窗**為基準
      - 最祖先不是 <html\>，而是瀏覽器視窗（但它是<html\>的 ICB, Initial Containing Block）
      - 純絕對定位，沒有給定偏移，則是從原始位置浮起來。有偏移但祖父沒定位，則依據瀏覽器視窗
      - 依據祖先的 **_content box_**
    - fixed
      - 沒有設定偏移時
        - 元素會從原本文檔流的位置「浮起來」，不再佔據空間；<br>但如果原本的位置剛好在瀏覽器視窗之外，那元素就會不可見。
      - 有設定偏移時
        - 元素的位置會以瀏覽器視窗（viewport）為基準固定，不受滾動影響。
      - 不想被 fixed 物件遮蓋時，通常最優解是用內外距。相對定位 + 偏移也可以，但會影響後續文檔流。以最上方元素，甚至可以將內外距設在 <body\>
    - sticky
      - 偏移表示 viewport 距離多少時就黏住，滑動到超出其父層元素時則流走，即作用範圍被父層限制

- 多邊形製作

  - HTML: svg, ~~偷懶用特殊符號~~
  - CSS: clip-path, border (僅限三角形)
  - [clip-path 工具](https://bennettfeely.com/clippy/)

- 函數

  - calc()
  - var()
    - 也有作用域問題，外層元素定義的 CSS 變數可以被內層訪問到
    - 不過通常變數 CSS 會放在 `:root`
    - |   項目   |              :root               |               \*               |
      | :------: | :------------------------------: | :----------------------------: |
      | 選取區域 |             <html\>              |            所有標籤            |
      | 權重分數 |             0, 1, 0              |            0, 0, 0             |
      |   繼承   | O，把<html\>的變數繼承給所有物件 | X，直接賦值給所有元素，非繼承  |
      |   意義   |             繼承變數             |    每個標籤都有某 CSS 變數     |
      |   取用   |              var()               | var()，不會像一般 CSS 自動套用 |

- 顯示
  |項目|opacity: 0|visibility: hidden|display: none|
  |:--:|:--:|:--:|:--:|
  |占據文檔流|O|O|X|
  |可見性|X|X|X|
  |互動|O|X|X|
  |子元素可見|X|O，子元素要再各自設定 visible|X|
  |漸進動畫|X|∆|X|
  |SEO|O|∆|X|

- Transition: 轉場

  - `all` 的前提是 `duration` 時間只有一個值
  - `delay` 可以達成同一元素但不同屬性轉場分開進行
    - `delay` 接受負值，即吃掉原始 `duration` 對應時間的變化
  - [`timing-function`](https://cubic-bezier.com/#.17,.67,.83,.67): 轉場速度模式
  - **_不適用於 `display: none;`_**

- Animation: 動畫

  - animation-iteration-count: 重複次數預設為 1
  - [animation 套件](https://css-loaders.com/)

- |   項目   | Transition |        Animation         |
  | :------: | :--------: | :----------------------: |
  | 控制方式 |  自動播放  |         觸發事件         |
  | 動態內容 |  複雜步驟  | 起與始，沒有中間其他變化 |

- 好朋友 CSS (粗體為後續 CSS 屬性的啟動者)
  - **flex** + justify-content + align-item
  - **position** + inset (top, right, bottom, left) + z-index
  - z-index + (**flex** || **grid**)

# Git

## 基本觀念

- 協同開發
- 分散式版本控制
  - 分散式: 每個協同開發者都會有一樣且完整的歷史紀錄，含： commit, branch ...etc
  - 版本控制: 哆啦 A 夢的時光機，可以切換到任何歷史紀錄點的檔案狀態
- 不用網路也能使用（若要協同交換 commit，需手動交換，如：匯出 commit 歷史紀錄到 USB 隨身碟）

## 介面

- 文字介面
  - 終端機
  - 程式碼內
    - GitLens (VS Code 內的套件): 每一行會顯示誰更改了什麼內容
- 圖形介面
  - Git Graph (VS Code 內的套件): 把終端機的處理變成圖形介面來顯示與操作

## 狀態

- 修改中（Modified）→ 工作目錄（Working Directory）
- 已暫存（Staged）→ 暫存區（Staging Area）
- 已提交（Committed）→ Git 倉庫（Repository）

## 指令

### 設定

- `git config --global`
  - 必填，不然 commit 會被 blame
    - username
    - email
  - 選填
    - init.defaultBranch `<branch name>`
- `git config list`

### 本地操作

- `q`: 終端機 Git 文末出現 `(END)` 或 `:` 字樣，按 `q` 離開
- `.`: 代表 here，注意執行路徑謹慎使用
- `git status`
- `git add <file>`: 把工作目錄的檔案丟到暫存區
  - 工作目錄是還沒 add 的狀態區域
- `git commit -m <comment>`: 把暫存區的檔案丟到 Git 倉庫 (Repository)
  - [Git 約定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
- `git rm <file>`: 刪除檔案並被 Git 偵測到
- `git mv <old file name> <new file name>`: 更改檔案名稱並被 Git 偵測到
- 直接手動對檔案刪存與改名會造成 Git 以為是新檔案

---

- branch: 分支，可以想像成一張貼紙
  - `git branch <new branch name>`: 在目前 HEAD 所在處加分支
  - `git branch -d <branch name>`: 刪除分支
  - `git branch <new branch name> <commit ID>`: 在特定位置開分支
  - `git branch <old branch name> <commit ID>`: 把指定既有 branch 貼紙貼到特定位置
  - branch 名字可以帶有斜線，只是會被視為資料夾。
    - 對於作業系統而言，資料夾和檔案沒有差異。所以已有同名檔案無法建立同名資料夾，反之亦然。
- HEAD `(*)`: 定位現在在哪個 commit，哪個 branch
  - 當同一個 commit ID 位置有多個 branch，會以 HEAD 所指的 branch 長出新的斷點
- `git switch <branch name / commit ID>` = `git checkout <branch name / commit ID>`
  - 都是切換分支或斷點
  - switch 是新版本 Git 才推出的
- `git merge`
  - 誰 merge 誰，以結果而言 ⮕ 沒差<br>
    以過程而言，差異在於 HEAD 在哪個 branch 就是誰 fast-forward (快轉)
- `git rebase <branch A> <branch B>`: 以 A 為基底，將 B 接到 A 之後
- `git reflog`: HEAD 的移動紀錄
- `git reset`: 請把 reset 用 become 來理解

  - 參數

    - 從誰開始回推
      - HEAD
      - branch name
      - commit ID
        - 40 個字元，每一字元值 0 - 16(0 - F)，所以很難出現重複狀況
    - 符號（回推多少）
      - `^`: 回到 上 N 層。可以連續使用，有幾個 `^` 就可以回到前 N 層
        - `^` 後通常會省略數字 (parent)，該數字預設為 1
        - parent: 有時候某斷點的源頭不只一個斷點，比如 merge 之後。parent 是多少，看 Git Graph 的標示。Git Graph parent 第一行為 1，以此類推
      - `~ N`: 退回 N 層
      - `^` 和 `~` 可以搭配使用成為組合技，但通常使用情境很少
    - 保留暫存區(git add)嗎?
      - `-- mixed`: 預設值。暫存區清空（未 add 狀態），保留工作目錄
      - `-- soft`: 回到有 add 的暫存區
      - `-- hard`: 不管 add 暫存區，全部砍掉，但 reflog 不會消失
        - 但其實不會真的砍掉，只是讓你看不到，<br>
          因為 Git 只會新增紀錄，不會直接刪除。<br>
          若要刪除 Git 紀錄，需手動處理，或者超過預設保存期限（通常是 90 天）。
        - `reset --hard` 殘酷在「讓你看不見」，但 Git 的良心（reflog）讓你暫時還能回頭。
    - ORIG_HEAD: 只記錄 merge / rebase 之前的 HEAD，記憶前一動的 HEAD，而且只會記憶一個。所以可以搭配 reset 撤銷 merge / rebase
      - ORIG\*HEAD 會移動的常見指令只有 merge/ rebase / reset，**_commit 不會_**

- merge VS rebase
  | 項目 | merge | rebase |
  | :------: | :---: | :----: |
  | 歷史紀錄 | 詳細 | 簡潔 |
  | 學習成本 | 低 | 高 |
  |回到上一動|reset|要調 reflog|

- stash
  - 應用場合: 正在處理某專案，但臨時被主管叫去做其他專案
    - `git stash`: 藏。把目前還沒 commit 的東西先存起來
  - 應用場合: 其他專案做好了，要回來把原本 stash 的檔案開出來繼續用
  - `git stash pop`: 拿出來，但刪掉 stash
    - stash 本身沒有 branch 的觀念，在任何分支上都能 pop 跨分支取出 stash
  - `git stash apply`: 拿出來，但留著 stash
  - 取用
    - 預設: 從最新的 stash 取來用
    - 指定 stash: `git stash pop / apply stash@{<n>}`
  - stash 只能在本機存取，無法被 push

#### 進階操作

- 修改歷史紀錄

  - 最後一則 commit
    - `git commit --amend`: 目前 uncommitted 合併到最後一則 commit，只有最後一則可以被修改
      - `--no-edit`: 代表我沒有要編輯
      - `-m <message>`: 更新 commit message
      - commit 時間仍為舊的
  - 中間的 commit
    - `EDITOR="code --wait" git rebase -i <commit ID>`
      - `EDITOR="code --wait"`: 選定編輯器為 vs code，預設為 vim。 wait 代表等待處理後再執行
      - `git rebase -i`: 個別 pick 再 rebase 回去
      - `<commit ID>`: 要修改的 commit 的**_前一顆_**ID
    - 執行 `EDITOR="code --wait" git rebase -i <commit ID>` 會進入修改 commit 的 GitLens 圖形操作
      - `squash`: 融合，把多個 commit 捏成一顆。與上一個 pick / commit 合併成一顆
      - `edit`: 暫停在該 commit，搭配 `git reset HEAD^` 將 commit 拆成多個
  - Git 是唯讀的，只能新增不能修改
    - 修改都是假象，實際上是生成新物件（SHA-1 會重算）
    - parent 改了，其後者也會改，因為 SHA-1 要重算
    - 要刪也是可以，但實務上很少很少用到。而且刪除要很多連續步驟，非常麻煩。~~連龍哥都不完全記得指令內容~~
  - 團專發 PR 建議先 rebase 整理過
    - 團專 -f 只對自己的分支強推
    - GitHub 禁止強推是針對 branch，不是整個專案
    - --force-with-lease: 只對自己開的分支能硬推
  - author 和 committer 不同人
    - 發生在透過 rebase 調整順序或者 pick 的時候

- `git cherry-pick <commit ID>`: 從某分支挑選特定 commit 複製到目前所在分支上，不用再 merge
- [操作練習](https://learngitbranching.js.org/?locale=zh_TW)
- [pre-commit 檢查工具](https://pre-commit.com/)

### 遠端操作

- git remote
  - `add <bookmark name> <URL>`
    - bookmark name 就是以後在本機對 URL 的代名詞，所以不是遠端倉庫有個 bookmark name 分支
    - bookmark name 可以隨機取名，但通常會取 origin
- git pull = git fetch + git merg
  - 單純 fetch 不會有衝突，pull 才會，因為 pull 會自動 merge
  - 參數
    - `--merge`: 預設值
    - `--rebase`
- git push
  - `--force` 或 `-f`: 將本機進度強制推送到遠端
    - 沒事別用，因為會覆蓋協同專案的所有紀錄與狀態，除非你是專案管理者，或者有知會專案夥伴，或者是個人獨立開發
    - GitHub 可以設定關閉強推的功能
  - `git remote origin main`
    - origin: 遠端倉庫代名詞，可自行隨意命名，只要對應當時 remote add 的 bookmark 就好
    - main: 本機分支
      - `<local branch name>:<remote branch name>`
      - 注意冒號
      - 當本機分支和遠端分支名字相同時，可以不用特別完整寫出
      - git push origin `<empty>:<remote branch name>`: 刪除線上分支。冒號前不寫本機分支

### 誰會移動 HEAD?

- `git commit`
- `git switch`
- `git checkout`
- `git checkout -b <new branch name>`: 建立新分支 + 移動 HEAD
- `git branch -m <old branch name> <new branch name>`: 雖然是改分支名稱，但對 HEAD 而言，撕掉貼紙再貼上貼紙，有 HEAD 移動
- `git reset`
- `git rebase`
- `git cherry-pick`

## 忽略與偵測

- `.gitignore`
  - 檔案內列出不想要 Git 偵測的檔名包含副檔名
  - 可以用 `*` 來概括指定副檔名的所有檔案，如： `*.html`
  - 在建立 `.gitignore` 之前的檔案無法被忽略，只能刪除重建要被忽略的文件
  - GitHub 有幫忙整理出一個可以被忽略的[列表](https://github.com/github/gitignore)
- `.keep` 或 `.gitkeep`: Git 不會偵測空資料夾，若要讓 Git 偵測到某空資料夾，則將此檔案放入即可
- 檔案都是 `.` 開頭!!!

## 遠端存取平台（僅列出常見者）

- GitHub
- GitLab
- Bitbucket

## 其他專有名詞

- PR (Pull Request) vs MR (Merge Request)
  - PR 是託管平台的功能，原生 Git 並沒有
  - PR = MR，只是意識型態不同，託管平台不同的稱呼
  - 在網路上看到別人專案不錯，覺得自己還可以改得更好，把自己優化的 code 發 PR 給原始開發者
  - 注意主被動!! 優化者發 PR 給原始開發者
  - 接受 PR 的處理
    - `merge`
    - `rebase`
    - `squash`: 把 PR 的所有 commit 濃縮成一個 commit
      - PR 的 commit 來自於優化者
    - 誰接受 PR?
      - 團隊內先規劃好多少人看過才接受，通常是每個人都要看
      - 按下接受的按鈕通常是最後閱覽的人，因為大家都看過表示沒問題
- main VS master
  - 也是一樣的東西，都是 branch name，只是意識型態不同
  - 歷史原因出自佛洛伊德 BLM 事件
  - 很早期的專案可能還是預設 branch name 為 master
- conflict (衝突)
  - 修改了不相容的內容，
    - 同一檔案有很多人都對第 N 行做修改
      - 被修改的檔案原始碼會出現 Git 的註記
      - 處理方式: 和開發夥伴討論
  - 歷史紀錄不一樣 ≠ 衝突
    - 歷史紀錄不一樣是分歧，衝突是改到**_同一個檔案_**
    - 分歧: 假設現在有協同專案，甲在 A 分支，乙在 B 分支，各自 commit 且 push，這樣歷史記錄不同但不是衝突
- Git flow
  - 大型多人專案: 上百人開發才比較有感，因為多了 release 可以緩衝。
    ![多人Git flow](https://gitbook.tw/images/tw/gitflow/why-need-git-flow/flow.png)
  - 極簡風: [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow)

### Git 原理

- Git 不是差異備份，是備份整個東西，這樣設計，切換分支就不用疊加計算。用硬碟空間換處理時間。

  - 但也沒有很浪費空間，因為相同內容共用同一顆 blob 物件
  - 其實 Git 是完整 + 差異備份
    - 常用檔案 → 完整備份
    - 很久沒碰的檔案 → 差異備份
  - 題外話: 區塊鏈 (SHA-256) 的原理跟 Git (SHA-1) 很像
  - 有向無環圖(DAG, Directed Acyclic Graph): Git 設計圖像化。有方向但不會有環形結構

- object

  - blob: 決定檔案內容。二進位

    - [SHA-1 雜湊演算法（碎紙機演算法）](https://emn178.github.io/online-tools/sha1.html): 一樣的內容會碎出一樣的東西，很難從碎出來的結果反推原始狀況
      - 雜湊演算法設計上不可逆，只能透過暴力嘗試產生碰撞 (collision)
        - md5 已在實務上被破解
        - SHA-1 有理論上的碰撞風險，Git 已逐步支援 SHA-256
        - 編碼不是加密，只是內容轉換
      - checksum
    - `git hash-object --stdin`
      - `git hash-object`: Git 計算 blob 雜湊值的指令（SHA-1）
      - `--stdin`: 從標準輸入讀取內容（不加 `-w` 不會寫入 object）
      - `git add` 時，把**檔案內容**交給 Git 計算雜湊並寫入 object
        - Git 不在乎檔案名稱，只看檔案內容（`blob <size>\0<content>`），所以空資料夾不會進版控
        - Git 只對檔案內容有興趣
          - `git status` 會比對檔案內容是否改變
        - 空字串 ≠ 沒有內容，所以空白檔案仍可被 Git 追蹤
        - 共 40 字元的雜湊值
          - 前 2 字：資料夾名稱（降低目錄負擔）
          - 後 38 字：檔案名稱
            - 內容經壓縮，無法直接閱讀
        - `add` 就已經有存檔，因為有 blob object，只是沒有 `commit` 的葡萄梗，所以無法 `switch`
      - `git cat-file <ID> -t`
        - 顯示物件類型（blob, tree, commit…）

  - tree: 目錄，決定檔案樣子
    - 紀錄結構和檔案名字
    - `git commit` 之後長出來
    - `git cat-file <ID> -p`: 可以看到 tree 裡不同行為與內容
    - 沒有 commit 就沒有 tree，但 add 之後在 .git/index 裡面會有檔名紀錄
  - commit
  - tag: 就是標籤，比較常用在標示哪個 commit 狀況是哪個版本號
    - Annotated: 有注記的標籤，指向 tag 物件，tag 物件再指向某 commit ID
      - tag 物件可以看到誰做這個標籤，輸入了什麼內容，本質上也是個 commit
      - 要使用 tag，盡量使用 Annotated，官方也如此推薦
    - Lightweight: 輕量化的標籤，直接指向某 commit ID
      - 如果只是要簡單的紀錄，就用 Lightweight 標籤

# JaveScript

## 歷史

原本只能在瀏覽器運行，加上 var 的缺漏，使得程式圈覺得 JaveScript 是個玩具，很不正式的程式語言。<br>
直到 Node.js 的推出，以及 2015 推出 ES6 版本新增 let, const 二個新變數，JaveScript 才比較是像樣的程式語言。<br>
<small>\* 新變數特色：不可重複宣告、區域範圍變數</small>

## 變數

- 元老
  - var
- ES6 (2015 年) 新增的變數
  - let
  - const
    - 不完全代表是平常認知的**常數**，只是不能**re-assign**
    - 當一個陣列 const，它不能換成新陣列，但可以對原本的陣列內做更新
- const > let >>>>>> var >>>>>>>>> 不宣告
- let ≠ 新版 var
- ES6 以後在建立新專案時，沒有什麼情境適用 var

## 變數提昇

- JaveScript 會掃程式碼二次：建立期 + 執行期
  - 先建立再執行
  - 建立期 = 註冊名稱 + 進行初始化\(undefined\)
  - 執行期 = 執行 func + 賦值
- var 有建立期，它會初始化
- let, const 的建立期只做一半，它們不會初始化<br>
  **_所以嚴格來說，let, const 沒有變數提昇即其效果，但它們有類似變數提昇的處理（註冊名稱 + 建立期 --> TDZ）_**<br>
  **_所以 let ≠ 新版 var_**

## 重複宣告

- 就是重複宣告

## 範圍(Scope)

### 全域(Global) vs 區域(Block)

- 去哪裡找東西: 附近有，就找附近的 (Scope Chain)
  - 以區域來說，不管前後行，都找，只是變數提昇能不能正確訪問、修改到而已
  - 先找所屬範圍內的變數，找不到才一層一層往外找
    - 沒有 var, let, const 就是在 assign，不是宣告
    - 沒宣告，JS 會雞婆在 window(全域)幫你宣告
      - top(頂層) → window
      - 沒宣告者卻 **_assign(寫入)_**，在 JS 內不會出錯
      - 頂層或 window 塞入後，後續就能訪問到
      - 不要以這個妥協開發!!!!
  - 附近包含函數參數，對於函數本身，參數本身也是變數
  - Lexical Scope: Scope 跟它寫在哪裡有關，跟在哪裡執行無關（剛好跟 this 相反）
    - 內層可以訪問到外層，反之不行
- var 有全域宣告，let, const 不會
- 全域變數少用，因為大家都能存取，容易被修改（亂掉）但是方便
- {} 是一個區域
- 在迴圈裡面，每一回合都是新的宣告，所以對於 let 和 const 而言，不會有重複宣告的問題
- var 變數只有被 function 內包住才不會游出去
- Closure (閉包)
  - 函數內還有函數，則呼叫外層函數時，JS 會幫你把內層函數需要的變數打包帶走，讓它游出函數
  - 通常用法: 知道待會會有東西消失，所以先帶走
  - 閉包變形
    - 迴圈內有 setTimeout，則迴圈初始值會繼續跑
      - let 不會活著離開 for loop，所以 setTimeout 的參數仍會把 let 一起抓走跑
      - var 離開 for loop 還會在，所以 setTimeout 的參數仍會更新迴圈值，因為 var 會等待我回來
    - setTimeout 要搭配閉包和 IIFE，則注意 setTimeout 的參數是 callback function

## 執行環境上下文(Execution Context)

### 執行函數會發生什麼事?

- 一個泡泡 → JS 就是一個大泡泡
- 一般的 function 都會有 this（除了箭頭函數） 和 argument
  - return 之後，所有變數都會不見，所以假設 `return result`，result 也會消失，回傳的是 result 本身**_指向的值_**

### call stack (呼叫堆疊)

- 泡泡的堆疊
- stack overflow 的製造
  - 函數不斷彼此呼叫
  - 自己一直呼叫自己

## 變數比較

|        項目         | var  | let  | const |                                 備註                                  |
| :-----------------: | :--: | :--: | :---: | :-------------------------------------------------------------------: |
| 變數提昇 (Hoisting) |  O   |  ∆   |   ∆   | let, const 沒有初始化 (undefined)，<br>建立期做一半，但有完整的執行期 |
|    重複/重新宣告    |  O   |  X   |   X   |                                                                       |
|    範圍 (Scope)     | 全域 | 區域 | 區域  |                                                                       |

## 資料型態

- 可以用 typeof 來檢查
- 原始型別 vs 物件型別
- String
  - 'hello'
  - "hello"
  - \`hello\` (backtick)
    - ES6 新語法
    - ${變數}
  - **_唯讀，不能用陣列修改某定元素的文字_**
- Number
  - 一般數字
  - NaN: Not a Number = 不是數字
    - 比如: Number / String = NaN 或者 0 / 0 = NaN
    - 但是 NaN != NaN
    - isNaN(Number) 會先強制轉換型別\(type coercion)\
      - 把字串轉成數字
    - Number.isNaN() 不會轉換型別，ES6 後推出的
    - Number.isNaN() >>>>>>>>>> isNaN(Number)
- Boolean
  - true
  - flase
    - 0
    - undefined
    - null
    - 空字串
    - NaN
- Object
  - null: 沒有
  - array: 陣列
- Undefined
  - undefined: 有，但未定義，還不知道是什麼
  - 未定義 ≠ 沒定義。未定義是東西存在但還沒定義

## 符號們

### 四則運算

- 一般寫法

  - \+
  - \-
  - \*
  - /
  - %: 取餘數

- 縮寫
  - `++n` 或 `n++`: 遞增 1
  - `--n` 或 `n--`: 遞減 1
  - `<四則符號>= n`: 對某數做加/減/乘/除 `n`
  - 符號前置 vs 後綴
    | 表達式 |A 最終值|回傳值|
    |:--:|:--:|:--:|
    |`++A`|遞增後的值|遞增後的值|
    |`A++`|遞增後的值|遞增**_前_**的值|

### 邏輯運算

- &&: 且
- ||: 或
- !: 否定
- 等號系列
  - =: **_分配(assign)_**
  - ==: 寬鬆相等（會轉換型別）
    - undefined == null (O)
  - ===: 嚴格相等（不會轉換型別，date type 和 value 都要相等）
    - undefined === null (X)

## 新語法

- ES 6

  - `${}`: 字串與變量組合寫法
    - backtick
  - 箭頭函數
    - 不是一般 function 的簡寫，差異在 `this`，沒用到 `this` 的時候是沒有效果差異
  - 物件簡寫
    - 當 key 的名字和 value 變量名稱是一樣時，可以直接寫 key，不用 key: value<br>
    ```
    let name = 'kitty';
    let age = 18;
    let cat = {
      name
      age
    }
    ```
  - 解構（承上 cat 例子）

    - 把物件裡的東西拿出來用

    ▼ 當 cat 物件剛好有 name 和 age 屬性，就訪問他們

    ```
    const { name, age } = cat
    ```

    若沒有對應的屬性，結果為 `undefined`。<br>
    接冒號可以變成宣告一個新變數

    ```
    const { name: username, age } = cat;
    ```

    上方 `name: username` 等同

    ```
    const username = cat.name
    ```

    - 函數參數

    ```
    function printCats({ name, age }) {
      console.log(name)
      console.log(age)
    }
    ```

  - `...`

    - 陣列 與 物件
      - 展開
      - 解構
      - 把剩下的全收
      - 合併
        - 物件合併後的 key 順序會以 a-z 排列，物件也不像陣列有一定的順序規則，所以問題不大。
    - 函數
      - 把剩下的全收
        - 通常用在參數數量不固定的場合
    - 在 ES6 之前，全收下的功能要用 `arguments`，是一個隱藏變數
      - 但是箭頭函數沒有 `aruguments`

  - ES 11
    - 可選串連 Optional Chaining（?.）
    - 空值合併運算子 Nullish coalescing (??)

## 關鍵字 / 保留字

- continue: 直接進入下一輪迴圈。~~個人意見：翻譯上用 next 比較貼切，like 瓜哥：下面一位~~
- break: 直接結束整個迴圈
- delete
- class

## JaveScript 的 Runtime (執行環境)

- 瀏覽器
- 非瀏覽器
  - Node
    - 奇數為開發版本，較不穩定，沒事不用下載，除非想嘗鮮。
    - LTS: Node 團隊長期維護版本，較穩定。但沒事不用下載老本的 LTS，除非有特殊目的。
    - 執行指令: 到對應路徑輸入 `node <JS file name>`
    - 只認檔案內容，不管副檔名，不過沒事不會這樣做
      - 比如 node aa.py 也會執行，只要內容是 JaveScript 寫法
    - 目的不在於網頁視覺處理(DOM)
  - Deno
    - 和 Node.js 是同一個作者，只是把 Node 錯誤的東西修改到 Deno
  - Bun
    - 官網宣稱相較以上執行環境，可以乘載最多請求，回應速度最快

## 流程控制

- if
- else
- else if

## 迴圈(loop)

- for
  - for ... in: 得到物件 index，後續可以搭配 `[index]` 來取物件
  - for ... of: 直接取陣列物件
  - 以上效能較差，但很早以前就有這種語法了
- while
- 陣列迭代
- 常搭配 continue, break
- 如果進入無窮迴圈，關掉執行環境即可
- 在迴圈裡面，每一回合都是新的宣告，所以對於 let 和 const 而言，不會有重複宣告的問題

## 函數 / 函式 (function)

- 定義: input 和 output 的關係
- 目的: 把複雜的邏輯包在裡面，給出想要的結果（回傳值）
- 用法:

  - 函數名字後加上() --> 呼叫、執行
  - 在 JS 世界裡，函數本身就是一種值，所以可以把它 assign 給一個變量，如：<br>
    `const hello = function () {...}`
  - 定義內是參數 (parameter)
  - ES6 新寫法，可以用 `...` 來代表收取所有引數，不管數量，但會收成一個**陣列**
  - 預設參數設定 `parammeter = value`
  - 呼叫的是引數 (argument)
    - 有規定參數但少給: 該引數位置顯示 `undefined`；多給則**省略**多出的
  - 回傳值 (return)
    - return 之後，該函數會直接結束
    - console.log() ≠ return
    - console.log() 本身沒有**正常來說的**回傳值
    - 函數沒有 return 就會回傳 `undefined`
    - 所有函數都有回傳值?
      - 沒有 return 會是 `undefined`
      - 問題在於個人信仰：你認為 `undefined` **_存不存在_**，或者當下語境<br>
        所以沒有固定答案<br>
        個人想法: JS 裡所有函數不管有沒有 return 都有 return value，因為就算是 undefined，也會被轉譯成 boolean 的 false
  - REPL = Read + Eval + Print + Loop

    - console.log() 就是一個 REPL
    - 無窮迴圈不一定會當機，比如作業系統就是不斷在等待動作指令，或者沒有內容的空轉
    - 會當機的無窮迴圈是因為在迴圈裡做了很多不合理的動作，耗用太多資源

  - 種類

    - 函數宣告（一般正規寫法）
    - 匿名函數
      - IIFE (Immediately Invoked Function Expression, 立即啟動執行函數)
        - 無法單獨存在，除非賦值給一個變數，或者用一個小括號包起來，執行方法則為 `(<function()...>)()` 或者 `(() =>...)()`
        - 後者()就是一般函數的呼叫，所以後者()也可以傳入參數
        - IIFE 的使用場景很少不傳入參數
    - 箭頭函數: ES6 之後才推出的。不完全等同一般正規寫法，也不是一般函數的簡解。差異在於 `this` 的概念不同
      - 有多種寫法（前二效果相同）
        - `(x, y) => { return 123 }`
        - `(x, y) => 123`
        - `x => 123` 當參數只有一個的時候才能這樣寫，不用寫出 return，且沒事不要這樣寫
        - 如果友大括號，還是要手動寫 return
    - 回呼函數 (callback function): 當發生某事件，呼叫某函數
      - 一等公民 (First Class Citizen): 如何看待數字、字串、陣列...etc，就如何看待函數
      - 若 callback function 加上 ()，這樣實際上叫做 `callnow`

  - 高階函數 (Higher Order Function)
    - 使用別的函數當作參數
    - 回傳別的函數當回傳值
    - 比如陣列常見方法主題中的 `forEach` 就是一種高階函數

## 物件 = 屬性 + 行為

- 物件在電腦裡，是一小塊記憶體
- 建立物件: {key: value} 或者用 `new`

  - 大量製造可以用 function 或者 new
    - new
      1. new 出來的 this 會首先指向空物件
      2. `this.__proto__` 會指向 new 物件的 prototype 屬性
         - 在 mdn 看到的 prototype 就是這個主題說的 prototype
      3. 個人開發的設定
      4. 不用特別寫 return，會自動 return 空物件，手動 return 反而會出錯
         - 自動 return 的 this 經過中間處理，就不會是空物件
    - new 模板建立新物件的過程叫做: 實體化、具象化
      - 這個模板在其他程式語言叫做 class (類別)
      - 早期 JS 沒有 class 的語言設計
    - 透過 new 模板建立的新物件叫做: 實體 (instance)

- 取用屬性: 有二種寫法

  - `object.key`
  - `object["key"]`

- 建立物件之後，增刪屬性
  - 新增: 直接 `object.newKey = newValue`
    - 若新增屬性但未賦值(初始化)，則其值為 undefined
  - 刪除: `delete object.oldKey`
- 所有東西（物件）都有 `.__proto__` 屬性
- 函數也有 `.__proto__` ，但只有函數才有 prototype

  - 函數包含

    - 用 `new` 建立出來的東西
    - Array: 注意首字大寫，不等同全小寫的資料型態
    - String: 注意首字大寫，不等同全小寫的資料型態
    - Number: 注意首字大寫，不等同全小寫的資料型態
    - Boolean: 注意首字大寫，不等同全小寫的資料型態

  - 針對數字，要用 () 包起來
  - 階層路線，往父層找，父層沒有就往父層的父層找，以此類推
  - 要找某屬性，路線都是走 `.__proto__` 去找，所以沒有某屬性的 `undefined` 並不是馬上回傳，而是經過好幾層 `.__proto__` 的查找
  - 放在物件內，等於共享屬性與其值，可以精簡程式碼與降低電腦記憶體的壓力

### 物件導向設計 (Object-Oriented Programming / OOP)

- 物件導向縮寫: OO

1. 類別
2. 實體化 / 具象化: new 的過程
3. 實體

- new

  - 模板製作

    - function
    - `class`
      - `constructor`: 建構子
        - new 下去之後，會立刻執行的 function
        - `constructor` 物件的初始化，只執行一次，物件建立時執行。除非手動操作，否則不會響應變化
      - 比較不會汙染到外面程式碼
      - class 是語法糖，本質上是 function。背後還是 `__proto__` 和 `prototype` 的關係
        - ES6 之後推出的
        - JS 的 class 不是真的 class，因為它是糖衣
        - 糖衣用途: 想要掩蓋什麼東西

- `this`

  1. 誰呼叫，誰就是 this。無人呼叫，則 this 為全域變數(window/global)
     - 不同執行環境的全域變數不一樣
     - 無人呼叫就是沒有 `.`
     - 瀏覽器全域變數是 window
     - Node.js 全域變數是 global
  2. 是否使用箭頭函數，箭頭函數沒有 this 和 `arguments`，這時 this 為全域變數(window/global)
     - 沒有 this 沒有 arguments，所以箭頭函數和一般函數不等同。但如果箭頭函數沒用到這二者，則與一般函數相同
     - `arguments` 類似 ES6 `...`，是在 ES6 之前全收下的意思
  3. 是否有使用 `new`，有用 `new` 則為空物件
     - 因為 `new` 會先將 `this` 指向空物件
     - 和箭頭函數混用，則箭頭函數會被視為 `constructor`，所以報錯
       - `new` 要搭配 `constructor`
  4. 是否有用 `apply` 或 `call` 或 `bind`
     - `apply` 和 `call` 可以綁架 this，強迫把 this 轉向成參數
     - 可以用遊戲中的法師幫戰士補血
     - 所有東西都有 `apply` 和 `call`
     - `apply` 和 `call` 的差異只在接受的參數多寡
     - 若 function 本身帶有參數
       - `call` 的第一個參數會被綁去 this，其他就一般型態
       - `apply` 的第一個參數會被綁去 this，其他必須以單一陣列形式作為參數
     - 和箭頭函數混用，this 為全域變數(window/global)。等於箭頭函數綁架不了 this
     - `bind` 會回傳一個 function，也可以綁架 this
  5. 是否開啟嚴格模式 (Strict Mode)
     - 嚴格模式語法
       - 對整份文件: 檔案開頭 `"use strict"`
       - 指定 function: function 內第一行 `"use strict"`
       - 為了維持相容性，所以是字串 `"use strict"`，避免老牌瀏覽器跑不動。老瀏覽器看到這句只會視為字串，然後就沒有然後
       - `type="module"` 內建 defer 也內建開啟嚴格模式
     - this 指向 `undefined`

  - **_JS 的 this 和寫在哪裡無關係，重點是如何呼叫、被執行_**
  - this 本來不是參數，除非被 `apply` 或 `call` 綁架
  - 優先序: 2. > 1.
  - this 的好處
    - 指稱彈性，比如交過好幾任男女朋友，怕叫錯名字，統一叫寶貝

- 物件導向想要解決的事
  - 真正目的: 用人類容易理解的方式來組織、管理程式碼，把程式碼擬人化
  - 附加好處: 可讀性高，容易維護
- 類別繼承 (inhteritance)
  - `extends`: 擴充
    - 可透過生物分類法來比擬，如: 靈長目的人和猩猩都有抓握能力
    - 用法: 擴充其他 class 的設定。好處是若多個 class 有共同功能，可以將該功能另外寫一個 class 來被 extends，類似 `__proto__` 往上找的感覺

### 陣列

- 陣列也是一個物件
- 是一塊**_連續_**的記憶體位置，但指向該記憶體位置的第一個元素位置
- 多維陣列: 陣列裡面再放陣列
- 取得陣列元素長度: `<array>.length`
- 索引值 (index): 開頭是 0
  - 索引值也可以視為偏移值
  - 因為第一個元素沒有移動，所以開頭是 0
  - 題外話: 不是所有程式語言的陣列索引值都是從 0 開始
  - 用法:
    - `array[n - 1]`: 訪問陣列裡第 n-1 個元素
    - `array[<array>.length - 1]`: 訪問陣列裡**_最後一個_**元素
      - JS 不像其他程式語言有 `array[-1]` 的用法
- 陣列內建的**_常見_**方法（還有很多，沒盡舉）
  - 插入
    - 陣列開頭: `<array>.unshift(<要新增的內容>)`
    - 陣列尾端: `<array>.push(<要新增的內容>)`
      - 回傳新陣列的 length 屬性
    - 指定索引: `<array>.splice(<在第n個索引位置>, <刪除 0 個>, <new value>)`
  - 抽出
    - 陣列開頭: `<array>.shift()`
    - 陣列尾端: `<array>.pop()`
  - 抽換
    - 重新對第 n 個元素賦值
      - `<array>[n] = <new value>`
      - `<array>.splice(<在第n個索引位置>, <刪除n個>, <new value>)`
    - 字串更改
    - `<array>.replace(<被替換的文字>, <新文字>)`
  - 刪除
    - `<array>.splice(<在第n個索引位置>, <刪除n個>)`
    - 若第二個參數未提供，則會刪除起始位置以後的所有元素
  - 組裝
    - `<array>.concat(<要串接的陣列>)`
  - 檢查是否有某元素
    - `<array>.indexOf(<指定元素值>)`: 回傳所在索引值
      - 不存在者，回傳**_-1_**
    - `<array>.includes(<指定元素值>)`: 回傳真假值
      - 缺點: IE 不支援
  - 訪問陣列裡的每個元素
    - 運用 for 迴圈
    - `<array>.forEach(<執行某函數>)`
      - forEach 會逐一丟出元素，供 forEach 參數（以上述為例是函數）的引數使用
      - callback (回呼函數)
      - return `undefined`
  - 尋找符合條件的**_第一個_**元素
    - `<array>.find(<執行某函數>)`
      - 同 forEach 有逐一丟出元素並作為函數引數使用的效果
      - 回傳符合條件的**_第一個_**元素
        - 無符合者，回傳 `undefined`
  - 對陣列裡的每個元素做操作，然後**_建立新陣列_**
    - 運用 for 迴圈
    - `<array>.forEach(<執行某函數>)`
      - 本身不會有回傳值`(undefined)`
    - `<array>.map(<執行某函數>)`
      - 有逐一丟出元素作為引數的效果
      - 本身會回傳新陣列
      - 記得 callback 要 return，否則會變成 `undefined`
  - 篩選符合條件的元素
    - `<array>.filter(<執行某判斷函數>)`
      - 有逐一丟出元素作為引數的效果
      - 過濾、篩選，新陣列內的東西只會變少，頂多和原本陣列一樣長
      - 判斷函數會回傳 `true / false`，但效果會淺複製通過的元素
      - 只會過濾篩選，不會對原本陣列內的元素做刪改然後淺複製
      - 本身不會建立新陣列
      - 判斷函數一定要有 `return`
  - 加總陣列每個元素的值
    - 運用 for 迴圈
    - `<array>.reduce(<執行累進函數>)`
      - 有逐一丟出元素作為引數的效果
      - reduce 方法本身接受二個參數，
        - callback function
        - 起始值（可寫可不寫，預設為陣列內第一個元素，然後少跑一圈）
      - 累進函數要二個參數 `function (<累進值>, <目前索引的值(被丟出的引數)>)`
        - 每一輪 function 的 return value 就是下一輪 function 的累進值
        - 加減乘除都可以，不一定只能用加法
  - 修改陣列
    - 參考(Reference)
      - 指向某記憶體位置

## DOM (Document Object Model) 文件物件模型

- DOM Tree: DOM 樹狀結構
- 操作 DOM ≠ 寫 JS； DOM ≠ HTML
- 不是 JS 直接讀取 HTML，功勞是在於**_瀏覽器_**
- `document.querySelector` 的 `document` 是瀏覽器提供的 (WEB API)，不是 JS 的
  - HTML 經過瀏覽器物化變成 DOM，才會被 JS 間接存取
  - 檢查方式，用 Node 去執行 `document`

### 瀏覽器的運作順序

- 一般狀況（沒有 `defer`）
  - 遇到要下載檔案（如：外聯 JS）以及執行期間會停止渲染
  - 下載檔案之後會馬上執行
- 有 `defer`
  - 下載檔案之後不會馬上執行，但下載期間一樣不會渲染
  - 等到全部 HTML 渲染完才會執行
- 以上二種，如果 JS 檔案很大，不管放在哪裡，有沒有 `defer` 都會使渲染卡住
- async
  - 下載檔案的同時，仍會繼續渲染
  - 檔案太大時，不會造成渲染阻塞
  - 下載完會執行檔案
  - **_也會有可能抓不到 HTML 的問題_**
  - 主要目的不在於處理載入 vs 渲染的問題
  - 通常用在埋 GA code (Google Analytics 流量分析)，或者廣告欄位。因為不在乎與網頁的互動
- 想確保可以隨時抓取到 HTML: `defer` >>>>>>>>>>>>>>>> 一般 = async

### HTML 外聯 JS 的擺放位置

- `<head>` 內
- `</body>` 上一行
- `defer` 屬性: 延遲讀取。這樣隨便放哪都可以
- 擺放位置和效能無關

### 選取

#### 自己

- getElement 系列
  - `document.getElementById()`
  - `document.getElementsByClassName()`: Element**_s_**
  - `document.getElementsByTagName()`: Element**_s_**
- querySelector 系列
  - `document.querySelector()`
  - `document.querySelectorAll()`
    - 選取結果是 `NodeList` ，同上，可以用 `array[index]` 訪問
  - 較後期推出的用法，須加上 `.` 或 `#`
- 選取結果（以 `<div id="hi">hello</div>` 為例）
  - `div#hi`
  - `<div id="hi">hello</div>`
  - 都代表有抓取到，只是瀏覽器顯示問題，多重整幾次會有不同顯示結果
- 以 class 選取的結果會是 `HTMLCollection` 集合，可以用 `array[index]` 來取用個別元素<br>但不完全等同陣列，因為無法使用內建的陣列方法
- `HTMLCollection` ≠ `NodeList`
- 如果 HTML 有 id，可以不用特別選取抓取
  - 只會抓第一個符合該 id 的元素
  - 但沒事不要這樣做!!!!!

#### 父層

- `parentElement`
- `parentNode`

#### 子層

- `childeNodes`
  - 記得 s
  - NodeList
- `children`
  - HTMLCollection

#### 兄弟姊妹層

- Element 系列
  - `previousElementSibling`
  - `nextElementSibling`
- Node 系列
  - `previousSibling`
  - `nextSibling`

### Node vs Element

- Element 也是 Node 的一種
- 註解也是一種 Node
- Node 有的功能，基本上 Element 也會有
- 選擇?
  - 盡量用 Element

### 修改

- `textContent`: 不會渲染 HTML 標籤，是純文字
- `innerHTML`: 會渲染 HTML 標籤
- `innerText`: 取得經 CSS 渲染後的文字
- `innerHTML`因為會渲染 HTML，所以效能會比`.textContent`差。<br>
  但也不用太擔心，因為現在電腦科技效能過剩。
- `value`: `<input>`的值。不管 type 是否為 number，在 JS 取用都會解析為**_字串_**。做運算時記得轉成數字型態
- `id`
- `className`: 可以一次增加好幾個 class，彼此之間插入一個空白字元即可
- `classList`: 像陣列但不是陣列的東西，它只是一個列表
  - `add(<class name>)`
  - `remove(<class name>)`
    - 檢查 `class` 用 `classList.contains` 比較輕準，`className.includes` 會有風險<br>
      比如： `<div class="red backgroundcolor-red">` 用 `className.includes` 就會選到兩個 class
  - `toggle(<class name>)`: 快速切換指定 class，有則刪，無則增

### 新增

- 尾端
  - `createElement()`
  - `appendChild()`: 加到某元素內成為子層，才會被渲染出來
- 指定位置

  - `insertAdjacentElement(<place>, <element>)`

    - place
      - `beforebegin`: 加到被定位的元素前的兄弟元素
      - `afterbegin`: 加到被定位的元素內的第一個子層元素
      - `beforeend`: 加到被定位的元素內的最後一個子層元素
        - 類似 `appendChild()`
      - `afterend`: 加到被定位的元素後的兄弟元素

  - `insertAdjacentHTML(<place>, <HTML element>)`
    - place 同上
    - HTML element 必須寫成字串形式的 HTML 標籤
    - 使用場合: 確定新增內容為靜態資料

### 刪除

- `removeChild()`: 把子層刪除
- `remove()`: 從本體刪除

### 事件監聽器(event listener)

- `document / target.addEventListener(<觸發事件>, <callback function>)`
  - callback function 若已經在其他地方定義宣告，則不用小括號<br>
    回到**_一等公民_**概念，如何看待數字、字串，就如何看待函數，所以通常不用 `()`，除非需要該 callback 的 return value<br>
    把第二個參數當作**_參數_**，而非 function 本身。 <br>
    若 callback assignment 加上 ()，這時候應該叫做 `callnow`
- 和 JS 在 HTML 裡的擺放位置相關
  - 若執意放在 `<head>` 內或其他位置，觸發事件則為 `DOMContentLoaded`
- 事件

  - DOM
    - onclick 屬性
    - 以 DOM 來處理事件比較不好維護，且無法重複使用
  - JS
    - DOMContentLoaded
    - 滑鼠系列
      - click
      - mouseover
      - mousemove
      - mousedown
      - mouseup
    - 鍵盤系列
  - 事件流
    - 監聽器的第三個參數
      - 預設是 false (Bubbling)
      - 很少有情境會更改事件流預設值
    - 捕捉 / 捕獲期 (Capturing)
    - 冒泡期 (Bubbling)
    - 目標期 (Targeting): 轉彎的地方
    - 監聽器是加在事件流的出入口，並非 HTML 標籤
    - | Capturing | Bubbling |
      | :-------: | :------: |
      |   true    |  false   |
    - 監聽器本身觸發之後，也會拋出一個東西給 callback function
      - 通常命名接收的參數為 `e` 或 `event`，印出來是 `(PointerEvent)`
      - `e` 的常見方法
        - `stopPropagation`: 以**_滑鼠活動位置為起始點_**，暫停事件傳播（包含捕捉和冒泡期）
          - 防止捕捉: 在捕捉期調用，則後續的冒泡期也不會執行
          - 防止冒泡: 在子元素呼叫 `.stopPropagation` ，避免父元素監聽器被觸發
          - 如果還是想要可以點擊到子層，則需修改子層 CSS，將子層的範圍超出父元素
        - `target`: **_在哪裡轉彎_**，不是指稱一個物件元素
        - `currentTarget`: 事件在哪裡，哪個元素身上發生、註冊
          - $el
          - 平常很少用到
          - 使用情境（非盡舉）
            - 在一堆撲克牌抽取中間的卡牌
            - 蓋板廣告的 X
              - 題外話： 蓋板廣告的 X 很難按是故意設計的，且可能 X 上再蓋一層透明超連結的遮罩將使用者導到廣告網頁，經過點擊後，透明層才消失，使 X 可以正確被觸發
    - 想弄清楚事件發生點就畫圖
  - 預設行為

    - 比如 `<a>` 標籤的超連結、`<form>` + `<button>` 的送出表單
    - 阻止預設行為: `preventDefault()`

  - 監聽事件不一定要 return，看專案需求。若有需要透過事件得到某 return 結果

  - on 系列 vs event listener 系列
    |項目|on 系列|event listener 系列|
    |:--:|:--:|:--:|
    |重複使用|X|O|

## 同步 (Synchronous) vs 非同步 (Asynchronous)

### 同步 (Synchronous)

- 觀念概論
  - call stack (呼叫堆疊): 可以理解成表演舞台
    - First In last Out (FILO)
  - JS 是單執行句
  - 一般逐行執行，所以如果中間有很大的檔案，程式碼就會塞車卡住動不了
  - WEB API: 可以理解成後台著裝中

### 非同步 (Asynchronous)

- 觀念概論

  - queue: 可以理解成著裝完，準備上台

    - First In First Out (FIFO)

    - 一般 queue
      - 要上場表演的條件是: **_快速通關的 queue_** 沒有人
    - 快速通關 queue
      - 要上場表演的條件是: **_call stack_** 沒有人
      - 比較重要的動作會歸類在快速通關，如： `fetch`
    - 不管一般還是快速通關，二種隊伍內的人，各別排隊順序是 WEB API 內誰先運行完誰先排隊。<br>
      比如有三個 fetch，看哪個 fetch 先抓完資料就會先到快速通關 queue

  - 假如在 stack 放了一個無窮迴圈，則 queue 永遠不會執行
  - 優先序: callstack > 快速通關 queue > 一般 queue

  - 所以即便設定 `setTimeout` 0 毫秒，執行順序仍會落後

  - [非同步圖像展示網站](http://latentflip.com/loupe/) (10 幾年前開發的網站，不支援 ES6 語法)

- 常見用法

  - `setTimeout(<callback function>, <millisecond>)`

    - 像是設定鬧鐘，讀取到該行馬上就執行完畢了，只是內部的 callback 等待幾秒再發作
    - WEB API (瀏覽器) 提供位置放等待發作的 callback
    - 等待發作的 callback 會排隊 (queue)，等到上台表演再到 call stack

  - 抓 RESTFul API，見後文筆記

## 抓取資料

- API (Application Programming Interface)
  - 介面
  - 多個軟體之間的互動，可進行呼叫或請求
  - 本身並不是只有抓資料這個功能，是資料存取的介面
- HTTP 資料存取方法

  - `GET`: 取得
  - `POST`: 替換做更新
  - `PUT`: 建立、新增、修改
  - `PATCH`: 修改
  - `DELETE`: 刪除

- RESTFul API

  - 每個 URI, URL 都是資源，可以透過上述 HTTP 方法來存取資料
  - 發送請求

    - `XMLHttpRequest`

      - 瀏覽器提供的
      - 物件
      - `open(method, url)`: 用什麼 HTTP 方法對某網址發出請求
      - 監聽器 `load`
        - `load`：當伺服器回應完成後觸發，send 之後聽到的東西，所以 `load` 不能放在 `send()` 之後，否則來不及監聽 `send()` 的回應。不過可以放在 `open()` 之前
        - `responseText`: 得到長很像 JSON 的**_字串_**
        - `JSON.parse()`: 將長得很像 JSON 的字串真的轉成 JS 物件
      - `send()`: 真的送出請求，且立即執行

    - `fetch`

      - 也是瀏覽器提供的方法，不是 JS 的
      - 把資料拿回來，會是 JSON 格式
      - JSON (JavaScript Object Notation)
        - JSON ≠ 物件
        - 先有 JS 物件才有 JSON 誕生，所以語法是: JSON 長得像 JS 物件
        - JSON 是**_純文字_**，看起來是陣列裡面有物件，但它只是**_純文字_**
      - Promise 物件
        - 現在告訴你未來我會做的事 → 一種承諾，所以 promise 需要等待，但結果不一定是成功的
        - 三狀態
          - `pending`: 等待中
          - `fulfilled`: 完成（成功）
          - `rejected`: 失敗（出錯）
        - `then`
          - 接 Promise 的回應
          - 不是一個 then 就有一個新的 promise
        - 內建方法
          - `json()`: 將純文字的 JSON 格式轉換成 JSON 格式的檔案，剛好也會產生一個新的 promise
          - `text()`
          - `catch()`: 處理 fetch 或 then 失敗問題
            - 網址寫錯
            - 轉不了 JSON
            - 任何函數出錯

    - async / await

      - async 本身就是個非同步
      - await 只能在 async function 內使用，或者最頂層
        - 若 await 不在 async function 內用，則 HTML 改成 `<script type="module">`
        - `type="module"` 內建 `defer` 和 `"use strict"`
      - try... catch

    - `async / await` VS `then` 的差異：只在語法不同，頂多 `then` 效能好一點點點點
    - axios (套件)
      - CDN (Content Delivery Network)
        - 內容分發網路，代表不是單一連結
        - 能架 CDN 的都是大公司，當 CDN 壞掉，幾乎世界的網站都壞掉
      - 跨環境，以前的 node 不能用 fetch
      - 類似螺絲墊片的存在功能
      - `axios.get(<url>)`
        - 不用自己轉 `json()`
        - 一樣接 `then` 和 `catch`
    - jQuery: JS 界的 reset

  - CORS (Cross-origin resource sharing)

    - 為了資安考量，限制權限，防範惡意人士用 JS 去存取不該存取的東西
    - CORS 本身只擋瀏覽器 JS，所以可以用後端爬蟲寫 API 抓資料。不過最單純的方法就是請對方開權限

  - 範例 API
    - [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)
    - [Fake Store API](https://fakestoreapi.com/)
  - API 試用工具
    - [Postman](https://www.postman.com/)

- 常見資料傳輸格式

  - 早年
    - XML
    - CSV
  - 現代
    - JSON
    - AJAX (Asynchronous JavaScript and XML) 非同步 JavaScript 與 XML
      - 非同步
      - 不是程式語言，不是單一技術，是技術綜合體

## Modules

### 為何要模組化？

- 為了避免團隊一直改到同一檔案造成 Git 衝突
- 以使用套件為例，CDN 檔案很大，安裝之後自己打包成模組可以精簡很多

### 使用

- 更改 HTML &lt;script&gt;
  - 擺放順序
  - 加上 defer
  - type="module"，不過內建已經有 defer
  - CJS vs ESM
    - CJS
      - `const axios = require('axios');` 的 `require`
    - ESM
      - `import <變量> from <filename>`
        - ESM 的用法
        - 不是標準 JS 寫法，不是 JS 內建
        - filename 記得要雙引號（字串）
        - import 的檔案在 HTML 必須有 type="module"
        - 被 import 的檔案要手動寫 export
          - `export { <變量> }`: 帶名字的匯出 (named export)
            - 可以一次匯出多個 function
            - 匯出有大括號，則引入也要大括號
            - 大括號是名字的意思
            - 引入同一模組，可以分行寫
            - 可以 `import { default as <new name> } from ...`，但通常很少用，這等同 `import <something> from ...`
          - `export function()`
            - 將 export 放在要匯出的函數之前
          - 預設匯出 `export default`
            - 一個檔案只能匯出一個
            - 匯出匯入的時候不用大括號
            - 預設匯出的 import 可以隨便命名，但通常會跟 export default 一樣
          - `export default` 和 `export { <變量> }` 可以指定匯出同一個變量
          - `export` 可以放在開頭也可以放在結尾，因為 `export` 不是在「程式執行階段」動態去找變數
        - 若 export 的 function name 和 import 的檔案內有一樣的變量名稱
          - 改名
            - 改 import 檔案的變數，但缺點是專案越大越難維護
            - 將匯入的函數改名字 `<export 變量> as <new name>`
      - 封裝　(encapsulation): 只想給內部使用，不想給一般人接觸到
        - 比如：有 A, B, C 三函數，其中 C 需要 A, B 函數的回傳作為參數，但網頁只需要 C 的結果就可正常執行，此時可以單獨匯出 C，即為「封裝」
        - 好處
          - 降低複雜度: 使用者只看到需要使用的東西
          - 減少依賴: 內部實作可以改變，但外部程式不受影響
          - 維護性高: 內部邏輯改動不會破壞外部程式

### NPM: 套件管理工具

- 運作權限不足
  - powerShell 以系統管理員身分開啟
  - 輸入 `set-ExecutionPolicy RemoteSigned` 然後確認
- 指令
  - `npm init -y`: 產生 package.json，`npm init`的懶人版，省略很多自訂步驟
  - `npm i` = `npm install`
    - `--save` 是預設值
  - `-D`: 會跑到 `devDependencies`，不會被打包給一般使用者
    - `-D` == `--save-dev`
- npx vs npm install
  |項目|npx|npm install|
  |:--:|:--:|:--:|
  |安裝|不會真的把東西安裝在專案裡，<br>即 package.json 不會看到相關字眼|真的要下載|

#### 儲存資料

- cookie
- localStorage
  - setItem(key, value)
  - getItem
  - removeItem
- 儲存的資料都會被轉成字串

#### 套件

- dayjs
- axios
  - 註冊 token → JWT(JSON Web Token)
- node_modules
  - 所有安裝的套件資料都會在這個資料夾，所以開發到最後的專案會很胖
  - 開發結束可以把這個資料夾刪掉，之後有要運用相關套件，在專案路徑輸入 `npm i`，電腦會自動看 package.json 裡面的 `dependencies` 把套件載回來
  - [node_modules meme](https://i.imgur.com/rpR4yVl.jpg)
    ![node_modules meme](https://i.imgur.com/rpR4yVl.jpeg)
  - 網站上線之後，通常不會要打包 node_modules，反而要上傳 dist 內的檔案
- dependencies: 指套件需要依附其他文件
- 路徑
  - 當 HTML 引入有 `type="module"`，相對路徑要往 node_modules 走
  - `type="module"` 本身帶有 ESM 功能
- package.json
  - `dependencies`: 使用者需要用到的套件依附
  - `devDependencies`: 開發者需要的套件依附
  - `scripts`: 腳本
    - 可以透過 `npm run <scirpt name>` 在終端執行
    - `<script name>` 可以自己手刻名字，不過通常套件會提供名稱。
      - `<script name>` 背後真正執行的動作，是來自於安裝的套件被放在 node_modules 裡
- [alpine](https://alpinejs.dev/)
  - 啟動元素之前，記得先放`x-data`屬性，若沒有要賦值可以單純標示即可
  - x-for 渲染要放在 `<template>` 裡面，`<template>` 是標準 HTML 標籤，HTML 不會渲染，反而是給 JS 渲染用

#### 打包

前端的打包圈已經快要統一

- 打包
  - tree-shaking: 去掉換行、變量名稱縮短、丟掉宣告但沒用到的變數、把好幾個檔案整理成一個(import 的整理)... etc → 壓縮檔案
  - 以結果來說，不用擔心 import 的路徑
- 打包工具 (Bundler)
  - esbuild
  - webpack: 功能很多，最老牌，但設定需求很多
  - Vite: 目前主流。和 Vue 是同一個作者，新專案建議用 Vite 打包
    - **_`npm run dev` 要有 index.html 檔案_**
    - Vite vs Go Live
      |項目|Vite|Go Live|
      |:--:|:--:|:--:|
      |打包|O|X|

## Regex (Regular Expression)

- `\d` == `[0-9]`
  - d: digit
- `{}`: 根據前一個條件重複幾個字元判斷
  - `{<number1>, `: 至少重複 n 次
  - `{<number1>, {number2}`:重複 n 到 m 次
- `-`: 0 或 1 個
- `*`: 0 或多個
- `+`: 一個以上
- [RFC email 格式規範](https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression)
- [regex101](https://regex101.com/)

# TypeScript (TS)

- 微軟推出的規格，想處理 JS 初始設計太隨便，太多妥協的問題
- 在 AI 時代可以讓程式碼更精準更嚴謹。缺點是很囉唆，但優點是在上線前就能知道錯誤在哪，還有開發時會有更正確的提示
- JS 沒有很強烈的型別概念
- TS 是 JS 的超集合(Superset)，所有在 JS 有效的程式碼，在 TS 就是有效的語法
- TS = JS + 明確型別概念
- 目前瀏覽器還是無法看懂 TS 但 node 也能執行 TS
- TS 和 JS 的關係就像，前者是方言，後者是普通話
- 記得用 npm 安裝
- tsc: TS 編譯器，編譯成 JS
  - `npx tsc <TS filename>`
- `--noEmitOnError`: 若在 TS 語法有錯誤，就不要通過並編譯。通常是型別異常，TS 不會自動轉換
- ES6 語法編譯後會變成就寫法，因為 TS 考慮到相容性，編譯盡可能支援老舊版本瀏覽器。
- 型別宣告大小寫有差，永遠用小寫！
- 型別推斷: TS 在宣告變數時，若不宣告型別卻有賦值，其實會自動推斷，但後續仍然無法改變型別
- 那為何要手動宣告型別?
  - 因為一開始沒宣告型別，又沒賦值，則會變成 any 型別。但沒事不要這樣寫。這是 TypeScript 不是 AnyScript
  - 在 const 又有更細節，Literal Type (字面型別)
  - TS null 和 undefined 是不同型別，無法彼此換值
- 陣列型別宣告: `<dataType>[]`
  - 陣列型別不宣告，也會被自動推斷
- 能讓 TS 自動推斷就自動推斷，不然程式碼很醜。但絕對不要 AnyScript
- 自訂義 type

  - 很像 TDD 的測試規格
  - `type`
  - `interface`: 介面就是一個規範，可以用主機板插槽的*介面*vs 顯卡來想像
  - `?`: optional，可有可無
  - `|`: 選項
  - |           項目            | type | interface |
    | :-----------------------: | :--: | :-------: |
    |  合併新屬性（宣告合併）   |  X   |     O     |
    | 彈性（可被擴充 / 開放性） | 較低 |   較高    |

- 回傳值
  - 可以寫明函數的回傳值會是什麼型別
  - void

# Vue

## 特色

- **_閉包_**和**_封裝_**是現代 JS 框架的核心
  - 閉包
    - 元件的 data() 函數
- 解決資料和 DOM 混在一起、手動更新的問題
- extension
  - chrome
    - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-TW)
- VS Code 套件
  - Vue (Official)
- vue vs vite
  - |     項目     | Vue 專案（通常指 Vue CLI） |                     Vite 專案                     |
    | :----------: | :------------------------: | :-----------------------------------------------: |
    |     本質     |  Vue CLI 建立的 Vue 專案   | 使用 Vite 作為建構工具的專案（可為 Vue/React 等） |
    |   開發速度   |            較慢            |                       較快                        |
    | 官方推薦程度 | 過去主流，目前官方不再推薦 |            ✔ **Vue 官方推薦標準方案**             |
    | 建立專案指令 |      `vue create app`      |             `npm create vite@latest`              |

## 語法操作

- `npm create vue@latest`: 建立專案指令
- 元件
  - 檔案命名: 開發慣例，首字大寫（大駝峰），為了方便和原生 HTML 標籤區隔
  - 元件內容三本柱:
    - `<script>`: JS，也是有可能沒撰寫到。看開發需求
    - `<template>`: HTML
    - `<style>`: 如果用 Tailwind，可能就不用 `<style>`
    - 三者排放順序不會有功能上的差異，只有團隊開發的格式要求
  - 優點: 重複使用 + 模組化方便分工開發
- `createApp(<object parameter>)`
- 檔案結構:

  - [./public](https://ithelp.ithome.com.tw/articles/10293243): 裡面的東西不會經過編譯和打包。打包的時候，裡面的檔案會直接被複製一份，放在根目錄內

  - main.js: 啟動專案

- 語法風格

  - |            項目            |             選項             |                                                     組合                                                      |
    | :------------------------: | :--------------------------: | :-----------------------------------------------------------------------------------------------------------: |
    | 語法差異<br/>只在<script\> |       `export default`       |                      寫法一、`<script setup>`<br/>寫法二、`export default` + `setup(){}`                      |
    |        響應資料定義        |           `data()`           | ※註 1, 2<br/>A. 變數宣告 + `ref(<paremeter>)`<br/>B. `reactive(<object>)`，和選項 `data()` 很像，但不用分屬性 |
    |        訪問響應資料        |            `this`            |        對應上格 A. `<variable-name>.value`<br/> 對應上格 B. `<object>.<property-name>`，不用 `.value`         |
    |          計算屬性          | 屬性<br/>`computed: { ... }` |                                   Vue 組合式方法<br/>`computed(() => ...)`                                    |
    |            優點            |           閱讀直覺           |                                                  程式碼簡潔                                                   |

  - ※註 1: ref() → 物件，類似原生 JS const array，可以修改 array 內的元素；const → 記憶體位置
  - ※註 2: ref() 接受任何型別；reactive() 只接受物件，一般解構無法響應資料，除非用 `toRefs()`

- 模板語法
  - |   項目   |                          v-text                          |        `{{  }}`         |                                                    v-html                                                     |
    | :------: | :------------------------------------------------------: | :---------------------: | :-----------------------------------------------------------------------------------------------------------: |
    | 文字渲染 |        plain text<br/>**_覆蓋_**原始 HTML 的內容         | plain text<br/>不會覆蓋 |                      以 HTML 結構渲染，會解析標籤及其屬性。<br/>也**_會覆蓋_**原始 HTML                       |
    | 實務應用 | 只能接受一個屬性值，多個請用 `{{  }}`，或者用 `+` 號組合 | 最常見，因為容易客製化  | 很少用到，除非後端 response 回傳 HTML 結構。<br/>沒事也別用，如果遇到不信任的 API，可能會回傳有攻擊性的資料。 |
- 條件渲染
  - |   項目   |                  v-if/else                  |            v-show            |
    | :------: | :-----------------------------------------: | :--------------------------: |
    |   差異   | HTML 整塊切換<br/>有可能影響到 CSS position | 透過 CSS display: none; 切換 |
    | 消耗效能 |                    較高                     |             較低             |
    | 使用場合 |  改變 HTML 結構<br />或者多種條件判斷切換   |      頻繁切換，因效能低      |
- 列表渲染
  - `(<element>[, key[, index]]) in <array>`
    - 2 個參數，第 2 者為 index
  - `:key`
    - 須為唯一值，不一定要是索引值 (index)
    - 做辨識處理，能精準綁定資料是不是同一筆。雖然不寫也會顯示，但比較不會出錯
    - Vue 會盡可能採用現有 DOM 元素（出於效能考量），以陣列為判斷去做處理
    - key 會影響 Vue 如何決定哪些 DOM 要保留、哪些要更新。
    - key 讓 Vue 用身份 (id) 而不是位置來決定哪一個 DOM 要重用。
    - React 框架跑迴圈不加 `:key` 會直接不給使用，報錯
- **_v-for 不能和 v-if 同時使用在同一層_**
  - 順序: v-if > v-for，若 v-if 用到 for 出來的東西，會讀不到(cannot read → undefined)
- |  項目  |        computed        |             methods             |
  | :----: | :--------------------: | :-----------------------------: |
  | return |         一定要         |             視情況              |
  |  分類  | **_屬性_**，不用()呼叫 |              方法               |
  |  觸發  |       相依性更新       |            事件行為             |
  |  機制  |   快取 (類似便利貼)    | 每次調用，重新呼叫<br/>較耗效能 |
- 事件處理
  - `v-on:<event>` == `@<event>`
- 綁定
  - `v-bind` == `:`
  - 可以屬性各自前綴 `:`，或者 `:={<各種vue data()>}`
- 生命週期
  - computed 的相依更新也是在圖片的圈圈
  - unmounted 執行狀況，如：跳轉頁面，表示頁面不屬於 Vue 所控制
  - created 階段可以訪問到 data 和 methods，API 也適合寫在 create 或 beforeMounted
  - API response 有可能延遲，所以不要寫在 mounted
  - 進入頁面就馬上提醒，比如加入會員沒? → mounted
  - beforeUpdate: 行為後，提醒使用者確認是否要更新
  - updated: 確認要更新。更新完後的操作
  - beforeUnmount: 準備銷毀元件。向使用者確認是否要跳轉、離開的提醒
  - unmounted: 死亡。提示已經執行完跳轉頁面
  - 最常用: created, mounted
- 計算屬性 (computed)
  - |     項目      |                                               說明                                                |
    | :-----------: | :-----------------------------------------------------------------------------------------------: |
    |     get()     |                                 取得計算後的值，**必須 return**。                                 |
    |     set()     |              用於設定值，**不需要 return**，會持續偵測並回應 get() return 值的變化。              |
    | computed 預設 |                   預設只有 get()，若需要 set() 必須同時定義 getter 與 setter。                    |
    |   JS vs Vue   | 在原生 JavaScript 中，getter 與 setter 可獨立存在；在 Vue 中，**setter 必須與 getter 一起定義**。 |
    |   命名限制    |                             computed 的 get()、set() **為固定命名**。                             |
    |  帶參數限制   |                  computed function **不能正常使用參數**，通常也不需要傳遞參數。                   |
- 偵聽器 (watch)

  - |         項目         |                             說明                             |
    | :------------------: | :----------------------------------------------------------: |
    |        回傳值        |                              X                               |
    |       監聽來源       |              data、props、computed 或函式<br/>               |
    |       基本監聽       |         function，當資料變化時執行<br/>單一屬性更新          |
    |   深度監聽 (deep)    | 傳入物件，並加 `deep: true`<br/>用於物件或陣列內部屬性的變化 |
    | 立即監聽 (immediate) | 傳入物件，並加 `immediate: true`<br/>畫面初始化時就執行一次  |

## 組件

- 資料傳遞
  - `props`: 父 → 子
  - `emit`: 子 → 父

# RWD

## 「常見」斷點

- 手機: 768px 以下（不含）
- 平板(直): 768px - 1023px
- 電腦: 1024px - 1199px
- 大螢幕: 1200px - 1440px

### 開發順序

- 由簡單到複雜
  - 通常手機板比較簡單，因為都是垂直排列，也比較直觀
  - 通常行動裝置優先 (Mobile First)
- 電腦優先 (Desktop First)
- ~~實務上，看設計師先給哪個版本就先切哪種裝置尺寸~~
- 撰寫順序也要小到大或大到小，否則後者設定會被前者覆蓋
- 手機最小的支援尺寸，主流以 iPhone SE 為基準
- 開發者工具有直放橫放的切換按鈕
- @media 通常寫在 CSS 最末

## Media Query

- all（預設） = print + screen
- min / max 是 <= / =>，比如 768px，是有包含 768px，也可以寫成 witdh <= 和 width >=，就不用前綴了
- 可以有 transition 動畫轉場，但實務上很少這樣做，因為使用者不太會同一裝置突然改變閱覽尺寸

## 網格系統

- 常見為 12 欄 (column)，如: Bootstrap, Tailwind
- |   項目    |           col            |                   cols-n                    |               col-n                |
  | :-------: | :----------------------: | :-----------------------------------------: | :--------------------------------: |
  |   意思    | 一欄<br>自動平均分配寬度 | 一排 (row) 有 n 個<br>把整排平均切成 n 等份 | 跨 n 欄<br>指定此欄的寬度占 n 份） |
  | HTML 位置 |      放在 row 子層       |                放在 row 該層                |           放在 row 子層            |
  |   使用    |      搭配 cols 使用      |                搭配 col 使用                |              獨立使用              |

## Bootstrap & Tailwind

- CSS + JS
- 有些工程師認為 Bootstrap 和 Tailwind 不是框架
- Bootstrap
  - scroll-behavior: smooth;
- Tailwind
  - 以 4 為倍數
  - `@apply`: 要安裝套件才能這樣用，連 CDN 不支援這種 CSS 檔案語法。好處是可以減少 HTML class 的負擔，有些人 coding style 不喜歡太長的 class
  - [Flowbite](https://flowbite.com/)
  - Tailwind CSS IntelliSense: VS Code 套件

# 終端機(Ternimal)使用

## 作業系統

- bash: MacOS / Linux
- powershell: 微軟家的

## 指令

- `pwd`: 顯示目前所在路徑
- `cd`: 切換路徑 (change directory)
- `ls`: 列出目前路徑所有檔案
  - Mode
    - 意義
      - r: 可讀
      - w: 可寫
      - x: 可執行
      - 以上三種，可讀、寫、執行皆為 1，反之 0，順序為 rwx，對應三位數的二進位
    - 權限
      - rwx: User(使用者)
      - r-x: Group(群組)
      - r--: Others(其他人)
      - **權限也會用二進位表示**
  - `mkdir`: 建立新資料夾

## 電腦世界

### 進位

- 二進位

  - 數到 2 就進位
  - 所以只會有 0 和 1
  - 計算方法: 不同位數用 2<sup>n</sup>來對應 10 進位做換算

- 八進位
-
- 十六進位
  - 0 - F

### 二大難題

- naming (命名)
- caching (快取 / 緩存)

# 網路概論

## IP

- 網址 = IP 的代名詞
- 網址、網域是由後往前找，類似英文信件的地址，從最小單位開始翻
- IPv4 vs IPv6 差異

  - 就像車牌號碼一樣，IPv4 發完了，但世界上隨時還有新網址，所以現在發 IPv6
  - 差異是 IP 序號長短不同，IPv4 有 4 段；IPv6 為 6 段
  - IP 的一個小段數值區間是 0 - 255
  - 指令

    - `nslookup <URL address>`: 找指定網站 IP 位置

      - ns = name server
      - 同網址找出的 IP 位置不同，可能是為了加密，保全資安問題
      - `nslookup <address>` 顯示: `未經授權的回答` --> 代表顯示出來的**未必正確**，因為不是階級慢慢去找官方證實答案。
        <br>優點是有效率、速度快

    - `ipconfig`: 找本端電腦所連結的網路 IP 位置

- 公開 IP vs 私有 IP
  - 公開: 全球都能連上
  - 私有: 只能在區域網路連上，比如公司行號、學校內
    - 早期分類常見的有 A, B, C 三類
    - 10 開頭的通常是公家機關
- 如果還有看到新網站是 IPv4，則代表管理該網域的公司一次批量買下很多 IPv4 的 IP 位置只是沒有正式部署網站而已

## Port

- 格式是 IP 位置尾端加上\:<數字>
- Port 範圍: 1 - 65535 (共 2<sup>16</sup> 個)
- 常見 Port:
  - 80: HTTP
  - 443: HTTPS
- **_*1000 以下的 Port 盡量少用，因為有特定用途*_**

## 網頁運作

- HTTP 狀態
  - 1XX: 資訊回應
  - 2XX: 成功回應
  - 3XX: 重新導向
    - 301: 永久轉向（如：網站改版）
    - 302: 暫時轉向
  - 4XX: 使用者的問題（如：網址輸入錯誤、禁止訪問，或者沒有權限訪問）
    - 418: teapot 愚人節彩蛋
  - 5XX: 伺服器的問題（如：訂票網站流量超載）
- Proxy （代理伺服器）: 協助機房在很遠處的網站可以快速載入。服務對象是**使用者**
- Reverse Proxy （反向代理伺服器）: 類似網頁暫存，當網站壞掉，可以拿其他備案擋著來繼續正常使用。服務對象是**網站**

# 好用工具網站 與 插件

- [caniuse](https://caniuse.com/)
- [MDN](https://developer.mozilla.org/zh-TW/)

# Coding Style

## HTML

- 縮排做好
- 建議不要行內或內聯 CSS，外聯比較乾淨

## CSS

- 建議純 HTML 標籤往開頭擺
- 同樣是 chrome 瀏覽器，如果用 macOS 和微軟系統分別打開，會有細微差異，如：卷軸是否包含在 vw 內
  - macOS: 覆蓋式捲軸（overlay scrollbar），100vw = 實際可視區域的寬度
  - 微軟: 佔位式捲軸（classic scrollbar），100vw = 包含捲軸的整個視窗寬度

## JavaScript

- ES6 以後，沒事不要用 var
- 絕對不要不宣告就使用變數
- 巢狀結構不要用三元運算，閱讀性和維護性都低
- 避免[波動拳程式碼](https://samcreator123.github.io/coding/2024/think_about_code_nesting)
  ![波動拳程式碼](https://samcreator123.github.io/image/2024/readability1_1.webp)
- 操作 DOM 有錯誤
  - 少了選取器符號或引號
  - 拼寫錯誤
  - HTML 引用位置錯誤
- Early Return: 提早結束，因為前面是在檢查，重點在最後
- breakpoint(中斷點): F12 → 原始碼 → 找對應 js 檔案 → 在指定行設定中斷點
- [debounce / throttle](https://media.licdn.com/dms/image/v2/D5622AQGM90Aax5vAUw/feedshare-shrink_800/feedshare-shrink_800/0/1697525824362?e=2147483647&v=beta&t=oZ84nUXePrsKVmqJoWT6K96OvDN0QiwCrAatzjhun4A)
  ![debounce / throttle圖像化](https://media.licdn.com/dms/image/v2/D5622AQGM90Aax5vAUw/feedshare-shrink_800/feedshare-shrink_800/0/1697525824362?e=2147483647&v=beta&t=oZ84nUXePrsKVmqJoWT6K96OvDN0QiwCrAatzjhun4A)
  - 不是語法，是一個效能處理的概念
  - debounce: 確定要執行才做事（比如連點之後放手不點），不是也沒有 CD 時間，是不斷 reset 開始執行的時間點
    - 節省 API 流量成本與效能
  - throttle: 開始執行就要 CD 時間，不能動作
  - 忘記密碼發送的簡訊，那是資訊攻擊的防範，和 debounce / throttle 無關。而且簡訊要錢，也比較偏向是後端要開發的阻擋
- TDD 測試，各別項目各別測試。測試名稱要跟內容對得上
- 數字測試不要對半切，不然會搞不清楚解答是誰

## Visual Studio Code

- insert 鍵: 切換光標模式

# 演算法

- 銀行家捨入法

  - 消彌四捨五入的不公平
  - |   範圍    | 結果 |
    | :-------: | :--: |
    | 0 - N - 1 |  0   |
    | 1 - N - 2 |  2   |

  - 結果不一定是偶數

# TDD 測試驅動開發（Test-Driven Development）

- TDD 是一種開發方法
- 重點在**_開發_**，測試是手段
- 先寫測試(規格, Spec)，再寫實作。和一般工程師開發思維相反
- 寫測試的時候就是寫說明書的思維
- 還沒實作要怎麼測試？
  - 天馬行空，假設它存在，就像設計師或漫畫家。**大膽假設**
  - 就像倒敘法電影的模式
- 寫測試的人員角色偏向 PM、企劃
- 先測試失敗，再修正（故意的失敗，有失敗才是正確的）
- 遇到需求變更，先改的是規格（測試）
- 越簡單越好，盡量 5 行以內
- TDD 好處
  - 更有信心、穩定的程式碼。當別人改檔案的時候，至少能確認自己開發的狀況不會出錯
  - 慢慢想，可以做出比較好的設計
  - 將來有重構可能性
    - 重構(Refactor): 在不改變外在行為下，做內部的調整（改善）。重構不是打掉重練，也不是改版
    - 向長官提出重構容易被拒絕，因為: 沒有可見的產值，功能沒有差異。
- 那些功能要測？
  - 公開的方法都要測
  - 如果不知道要測什麼，就是不知道在開什麼規格 == 不知道什麼是測試
- 3A
  - Arrange
  - Act
  - Assert
- [jest JS 測試框架](https://jestjs.io/)
  - 匯入匯出，需在 package.json 加入 `"type": "module"`，並且將執行變數改成 `node --experimental-vm-modules`。後者的更改源於 jest *實驗性*支援 ECMAScript Modules (ESM)
  - `it` == `test`，但對中文開發者來說，`it`的功能無感，這只是為了語意閱讀
  - `describe` 必須包住 `it` 或 `test` 才能作測試，但 `describe` 可有可無。也是對中文開發者無感，只是語意化。
  - `throw` ≠ `return`
  - | 項目 | throw | return |
    | :--: | :---: | :----: |
    | 意義 | 拋錯  |  回傳  |
    | 風格 | 激進  |  溫和  |

# 執行不理想的常見原因

- 執行路徑錯誤
- 開錯檔案，改到其他專案一樣的檔名
- 沒存檔
- 註解不乾淨

# 題外話

- 不同程式語言的運行速度不一樣
- JS 很努力在進步，但瀏覽器沒跟上
- AI 會取代工程師嗎?
  - 會取代高度依賴 AI 的開發者
  - 可以取代 TDD 的規格開發
- 當一個 BUG 存在夠久，沒有修改，就會變成一個功能
  - 比如:
    ```js
    typeof null; // object
    ```
- Duck Typing
  |項目|Duck Typing|TS|
  |:--:|:--:|:--:|
  |意義|如果它走起來像鴨子、叫起來像鴨子，那麼它就是一隻鴨子。| |
  |風格|自由自在的彈性開發風格|嚴謹、囉嗦|
  |規範比擬|人治|法治|

## 密碼學 / 加密學

- 編碼 (encode / decode): base64
  - 本身就不是密，只是格式轉換，不用解
- 雜湊 (hash): md5, sha-1, sha-256
  - 可以解開，比較難。難度在於要用暴力破解法。
- 加密 (encrypt): RSA
  - 對稱式: 加密和解密用同一把鑰匙
  - 非對稱式: 加密鑰一把鑰匙，解密又要用另一把鑰匙，鑰匙不會只有一把。安全性較對稱式高
- 雪崩效應 (Avalanche Effect): 只要改一點點，結果就會差很多。

# 面試題目（JS 觀念綜合複習）

- ```js
  String([]); // ""
  +[]; // 0
  ```
- ```js
  let a = 0;
  let b = a; // b 指向 a，二者同一記憶體位置
  ```
- 記得屬性呼叫出來的型別
- 強迫轉型 ≠ 自動轉型
- 不管是 `==` 還是 `===`，都會比較型別（手冊上有寫）
  - ==: 當發現前後型別相等，再走入 === 來比較；若前後型別不同，再來討論強迫轉型
- 函數本身也是物件
- 不宣告型別就直接賦值，則該變數會變成全域變數
- 記得函數要有 return
- templated literals
  - tag function
  - 樣板字串的第一字串為變數時，則會有開頭''來辨識是字串。`strings[0]` 會是空字串，用來表示開頭的字串部分。
  - 不是用一般函數呼叫方式`()`使用
- 物件型別比較是比較記憶體位置；原始型別是比值
- `...`展開會是陣列，typeof 出來是 object
  - 但是 function typeof 出來是 function
- 三種錯誤提示
  - ReferenceError → 找不到或 TDZ 或打錯字
  - SyntaxError → 語法寫錯
  - TypeError → 型別不對
- `eval()`: 評估後執行，參數是字串。將字串當作 JS 程式碼執行
  - 沒事別用，有可能傷害使用者的電腦
- 在 JS，可以拿物件當 key，會經過字串化 `[object Object]`，不管那個物件 key 長怎樣，有多長，永遠是 `[object Object]`
  - `localStorage` 只會解讀字串，所以存取物件也會是 `[object Object]`，除非 JSON 化 `JSON.stringify()`，但解出來也是文字，不是物件，還要再 `JSON.parse()` 轉回來物件
- `throw` ≠ `return`
  - `throw` 出來的東西會被 `catch` 抓走，作為 `catch` 的參數
- `new` 的 `return` 回基礎型態就不會影響，但如果是物件就有差
  - 但平時不要在`new` 做 `return`
- `import` 就算寫在中間，也會類似變數提升的建構期（不是變數提升），邏輯上永遠被視為在檔案最上面執行前就完成連結 (pre-parsed)
  - `import`: pre-parsed
  - `require`: 走該行程式碼，需要時才載進來
- `Symbol`: 每個 `Symbol` 都是個別個體，獨一無二，即便內容相等
- `push()` 方法的回傳值是新陣列的 `length`
- `class` 的 `static` 只能給 `class` 用，不能給產出來的實例物件使用
  - 不是 `class` 的 `prototype`

```js
class Hero {
  static hey() {
    console.log("hey");
  }
}
// 以上等同以下
Hero.hey = function () {
  console.log("hey");
};
```

- 若是 `prototype` ，如則下

```js
Hero.prototype.hey = function () {
  console.log("hey");
};
// 以上等同以下
class Hero {
  hey() {
    console.log("hey");
  }
}
```

- `new Set` 方法會讓東西不重複
- 產生物件的時候，會生出一個看不見的字串 key
- 多個 `setTimeout` 的時候，誰先做完誰先贏，但還要考量到不同函數的執行時間要多久，所以等待時間未必是獲勝依據
- `pure function`
  - 不能有副作用 (side effect)
  - 不會對傳進來的參數動手腳，也不會往外找東西更改
  - 只讀不寫

# AI Agent

- 文字接龍
- 模型沒有記憶功能，Agent 才有
  - context: 每一次提出 prompt，都會把前面問過的東西再餵給 AI，只是使用者看不到
  - context window: 限制記憶數量
    - 摘要壓縮
    - 清除過期的對話，比如上限 10 次，當輸入第 11 次，則忘記第 1 次的紀錄
    - `sendMessage` 方法 (Gemini 的用法)
    - `temperature`: 文字產生的隨機機率，範圍 0 - 2，越小越固定 (多數 AI 有的用法)。類似創造性的光譜
      - 但 0 也不代表同樣問題會生成一樣文字，只是幾乎機率高
  - | 項目 |       優點       |               缺點               |
    | :--: | :--------------: | :------------------------------: |
    | 摘要 | 快速掌握重點內容 | 失去資料準確度，也有可能忘記東西 |
    | 清除 |     邏輯簡單     |       問太多會忘記前面設定       |
- Agent 重點在做，而非幫忙想。就像訴訟代理人（律師），要告人的是案主，不是律師
- GPT 不是代理人，雖然他想做
- LLM:
  - 向量:
  - 在向量空間裡，距離越近（XY 軸），則相似度越高
  - AI 處理文字轉成 0101...的向量然後存到資料庫裡，再去跟資料庫的其他向量去比較相似度來撈資料
  - 向量比向量，僅止於字面上的比較，不代表他是對的
- gemini [手冊](https://ai.google.dev/gemini-api/docs/libraries?hl=zh-tw)
  - 主角套件: `@google/genai`
  - 隱藏金鑰
    - API KEY 環境變數，建立另外一個檔案，通常叫 `.env`
    - `process.env.<環境變數>`: Node 取得環境變數的內建方法屬性。終端機執行指令 `node --env-file=<環境變數檔案名稱> <執行檔案名稱>`
    - 早期的 Node 安裝 [dotenv](https://github.com/motdotla/dotenv) 套件
    - 再建立一個 `.gitignore` 忽略存有金鑰的檔案，之後再 `.env.example` 才推到 GitHub，讓別人知道這邊會需要金鑰，但金鑰來源讓別人自己想
  - 先改 `package.json` `type:"module"`，因為 `import` 語法是 ES6 ESM 語法，是在 node 推出之後才發生的事情。node 預設 `type:"commonJS"`
    - 人設設定 `systemInstruction`
      - 系統提示詞不應該繞過使用者撒嬌或超出範圍的 prompt
      - 提示詞會影響結果，但效果不大，主要影響產出文字的風格。因為專業度是模型訓練出來，使用者只是丟出 prompt 給 AI，prompt 變成向量再去比較而已
  - 配角套件
    - [`inquirer`](https://github.com/SBoudrias/Inquirer.js/tree/main)
      - 可以連續互動提問
    - [ora](https://github.com/sindresorhus/ora)
  - 工具
    - functionCall，呼叫工具與否，AI 自己判斷問句重點，更甚者須進一步追問才會呼叫
  - 如果提示詞的需求很明確，答案卻不理想 → 換腦袋 ~~聰明珊瑚腦~~
