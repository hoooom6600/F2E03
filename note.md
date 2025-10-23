# HTML

## 標籤（僅列出個人不熟悉的）

- `<details>` 與 `<summary>`: HTML 內建區塊收合

  - `<details>`: `open` 屬性

- 表單提交
  - `<input>` 和 `<button>` type 比較
    - | input  |     |  button  |
      | :----: | :-: | :------: |
      | button |  =  | \*button |
      | submit |  =  |  submit  |
      | image  |  =  |  submit  |
      | reset  |  =  |  reset   |

# CSS

- 各家瀏覽器預設樣式不同
  - 比如複雜的表格，每格 rowspan 數量不一樣，高度會依不同瀏覽器設定而異，<br>
    以這個例子而言，CSS 規範並沒有對這種表格有明確的高度說明。
- CSS reset
- 瀏覽器預設
  - 字體大小: 16px
    - 但標籤的預設渲染是用 em
- 單位

  - 絕對單位

    - 通常使用場景: 間距
    - px
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

- 寬度與高度
  - 高度是根據內容撐開的
    - 內容是純文字者，高度不會是`行數 x 字體大小`，因為還有行高的存在
  - 訂寬不訂高
  - 內外距
    - padding: 百分比以**_父層 content 寬度_**為基準
    - margin: 百分比以**_父層內容空間_**為基準
      - 兄弟元素間的左右 margin 不會重疊
      - 兄弟元素間的上下 margin 會重疊
      - 父元素與長子元素間的上 margin 會重疊
      - 父元素與次子元素間的下 margin 會重疊
  - 容器計算
    - `box-sizing`
      - `content-box`: 預設值。設定 width 只給內容本體
      - `border-box`

# Git

TODO: ORIG_HEAD、remote 書籤

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

---

- branch: 分支，可以想像成一張貼紙
  - `git branch <new branch name>`: 在目前 HEAD 所在處加分支
  - `git branch -d <branch name>`: 刪除分支
  - `git branch <new branch name> <commit ID>`: 在特定位置開分支
  - `git branch <old branch name> <commit ID>`: 把指定既有 branch 貼紙貼到特定位置
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

- merge VS rebase
  | 項目 | merge | rebase |
  | :------: | :---: | :----: |
  | 歷史紀錄 | 詳細 | 簡潔 |
  | 學習成本 | 低 | 高 |
  |回到上一動|reset|要調 reflog|
- stash
  - 應用場合: 正在處理某專案，但臨時被主管叫去做其他專案
    - `git stash`: 藏
  - 應用場合: 其他專案做好了，要回來把原本 stash 的檔案開出來繼續用
  - `git stash pop`: 拿出來，但刪掉 stash
  - `git stash apply`: 拿出來，但留著 stash
- `git cherry-pick`
- [操作練習](https://learngitbranching.js.org/?locale=zh_TW)

### 遠端操作

- git remote
- git pull
  - `--merge`: 預設值
  - `--rebase`
- git push = git getch + git merge
  - 單純 fetch 不會有衝突，pull 才會，因為 pull 會自動 merge
  - `--force` 或 `-f`: 將本機進度強制推送到遠端
    - 沒事別用，因為會覆蓋協同專案的所有紀錄與狀態，除非你是專案管理者，或者有知會專案夥伴，或者是個人獨立開發
    - GitHub 可以設定關閉強推的功能

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

## 範圍(Scope): 全域(Global) vs 區域(Block)

- 先找所屬範圍內的變數，找不到才一層一層往外找
- var 有全域宣告，let, const 不會
- 全域變數少用，因為大家都能存取，容易被修改（亂掉）但是方便
- {} 是一個區域
- 在迴圈裡面，每一回合都是新的宣告，所以對於 let 和 const 而言，不會有重複宣告的問題

## 變數比較

|        項目         | var  | let  | const |                                 備註                                  |
| :-----------------: | :--: | :--: | :---: | :-------------------------------------------------------------------: |
| 變數提昇 (Hoisting) |  O   |  ∆   |   ∆   | let, const 沒有初始化 (undefined)，<br>建立期做一半，但有完整的執行期 |
|    重複/重新宣告    |  O   |  X   |   X   |                                                                       |
|    範圍 (Scope)     | 全域 | 區域 | 區域  |                                                                       |

## 資料型態

- 可以用 typeof 來檢查
- String
  - 'hello'
  - "hello"
  - \`hello\` (backtick)
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
  - ===: 嚴格相等（不會轉換型別，date type 和 value 都要相等）

## 關鍵字

- continue: 直接進入下一輪迴圈。~~個人意見：翻譯上用 next 比較貼切，like 瓜哥：下面一位~~
- break: 直接結束整個迴圈
- delete

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
    - 無窮迴圈不一定會當機，比如作業系統就是不斷在等待動作指令

  - 種類

    - 函數宣告（一般正規寫法）
    - 匿名函數
    - 箭頭函數: ES6 之後才推出的。不完全等同一般正規寫法，也不是一般函數的簡解。差異在於 `this` 的概念不同
      - 有多種寫法（前二效果相同）
        - `(x, y) => { return 123}`
        - `(x, y) => 123`
        - `x => 123` 當參數只有一個的時候才能這樣寫，且沒事不要這樣寫
    - 回呼函數 (callback function): 當發生某事件，呼叫某函數
      - 一等公民 (First Class Citizen): 如何看待數字、字串、陣列...etc，就如何看待函數
      - 若 callback function 加上 ()，這樣實際上叫做 `callnow`

  - 高階函數 (Higher Order Function)
    - 使用別的函數當作參數
    - 回傳別的函數當回傳值
    - 比如陣列常見方法主題中的 `forEach` 就是一種高階函數

## 物件 = 屬性 + 行為

- 物件在電腦裡，是一小塊記憶體
- 建立物件: {key: value}

  - 取用屬性: 有二種寫法

    - `object.key`
    - `object["key"]`

  - 建立物件之後，增刪屬性
    - 新增: 直接 `object.newKey = newValue`
    - 刪除: delete `object.oldKey`

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

### 修改

- `textContent`: 不會渲染 HTML 標籤，是純文字
- `innerHTML`: 會渲染 HTML 標籤
- `innerText`: 取得經 CSS 渲染後的文字
- `innerHTML`因為會渲染 HTML，所以效能會比`.textContent`差。<br>
  但也不用太擔心，因為現在電腦科技效能過剩。
- `value`: `<input>`的值。不管 type 是否為 number，在 JS 取用都會解析為**_字串_**。做運算時記得轉成數字型態

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
    - 捕捉 / 捕獲期 (Capturing)
    - 冒泡期 (Bubbling)
    - 目標期 (Targeting): 轉彎的地方
    - 監聽器是加在事件流的出入口，並非 HTML 標籤
    - | Capturing | Bubbling |
      | :-------: | :------: |
      |   true    |  false   |
    - `stopPropagation`: 暫停事件的傳遞（包含捕捉和冒泡期）
      - 防止捕捉: 在捕捉期調用，則後續的冒泡期也不會執行
      - 防止冒泡: 在子元素呼叫 `.stopPropagation` ，避免父元素監聽器被觸發
    - `target`: **_在哪裡轉彎_**，不是指稱一個物件元素
    - `currentTarget`: 事件在哪裡發生
      - 使用情境之一: 在一堆撲克牌抽取中間的卡牌
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
  - 一般逐行執行
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

  - `fetch`
    - 把資料拿回來，會是 JSON 格式
    - JSON (JavaScript Object Notation)
      - JSON ≠ 物件
      - 先有 JS 物件才有 JSON 誕生，所以語法是: JSON 長得像 JS 物件
      - JSON 是**_純文字_**，看起來是陣列裡面有物件，但它只是**_純文字_**
    - Promise
      - `then`
        - 接 Promise 的回應
        - 不是一個 then 就有一個新的 promise
      - 內建方法
        - `json()`: 將純文字的 JSON 格式轉換成 JSON 格式的檔案
        - `text()`
        - `catch()`: 處理 fetch 或 then 失敗問題
          - 網址寫錯
          - 轉不了 JSON
          - 任何函數出錯
    - 範例 API
      - [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)
      - [Fake Store API](https://fakestoreapi.com/)

# RWD

# 終端機(Ternimal)使用

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
      - `nslookup <address>` 顯示: `未經授權的檔案` --> 代表顯示出來的**未必正確**，因為不是階級慢慢去找官方證實答案。
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

## JavaScript

- ES6 以後，沒事不要用 var
- 絕對不要不宣告就使用變數
- 巢狀結構不要用三元運算，閱讀性和維護性都低
- 避免波動拳程式碼
- 操作 DOM 有錯誤
  - 少了選取器符號或引號
  - 拼寫錯誤
  - HTML 引用位置錯誤
- Early Return: 提早結束，因為前面是在檢查，重點在最後

# 演算法

- 銀行家捨入法

  - 消彌四捨五入的不公平
  - |   範圍    | 結果 |
    | :-------: | :--: |
    | 0 - N - 1 |  0   |
    | 1 - N - 2 |  2   |

  - 結果不一定是偶數

# 執行不理想的常見原因

- 執行路徑錯誤
- 開錯檔案，改到其他專案一樣的檔名
- 沒存檔
- 註解不乾淨
