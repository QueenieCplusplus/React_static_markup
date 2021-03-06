# React static markup
react 伺服器端渲染函式，靜態標記 static markup 與同步字串 render to string

# Life Cycle 生命週期

伺服器端沒有任何適合的生命週期提供元件何時執行完畢，唯有在客戶端的 componentDidMount 週期時建立事件監聽器和計時器，而 componentWillUnmount 週期時停止監聽器和計時器。

# Checksum 校驗

使用 data-react-checksum 匹配，幫助 react 在伺服器和客戶端兩者每次渲染屬性的初始結果都會一致，將應用程式的初始狀態傳給用戶端。

    renderToString()
    //同步字串
    //輸出會有 reactid 和 checksum

蠢作法是 react 銷毀伺服器提供的 實體 DOM 並生成 react 自己的虛擬 DOM 節點並且附加入文件物件中。所以如上是同步渲染函數，可以進行很重要的事情，這攸關到性能表現！


    renderToStaticMarkup()
    //靜態標記
    //單行輸出
    //適用於測試元件或是電子郵件
    //輸出不會有屬性 reactid
    
 用於測試元件或是電子郵件 https://github.com/QueenieCplusplus/React_email/blob/master/README.md#send-email
    
作法是 react 銷毀伺服器提供的 實體 DOM 並生成 react 自己的虛擬 DOM 節點並且附加入文件物件中。

如上兩則函數使 react 能夠在 Nodejs 這種非瀏覽器的環境下運作。

# 客戶端的非同步狀態

很多應用程式都是前端顯示遠端後端（伺服器抑或是資料庫）的資料，
React 元件可以等待非同步資料時顯示一個載入 Loading 的畫面。
這要先取的非同步資料，再 render 資料給元件。

實務上，要從非同步儲存中取得一筆使用者紀錄給元件使用，也為了
優化 SEO，需要將此非同步資料在伺服器端 render 元件，增加屬性。

# SEO

支持用戶端和伺服器端渲染同一元件。可以採用同構路由法抑或是直接ㄓㄞ componentDidMount 生命中其中獲取 Async 資料，類似 Ajax （asyn of js and xml)。

# Singleton 單例

在 Browser 中，應用程式封裝在隔離 isolated 的 sandbox 中，所以應用程式的每一個 instance 實例的狀態不能和其他 instance 混淆，因為每一個實作在不同電腦或是同台電腦的不同沙盒中，所以這允許開發人員在應用程式架構中使用 Singleton。

然而開發者如果要移動程式碼到伺服器上，同一時間同一作用域下，應用程式可能有多個實作運作中，這時應用程式的兩個實作改變同一單例的狀態，導致預期外錯誤發生。

因此，要 render 伺服器前（包含客戶端向遠端獲取非同步狀態），需要重設所有使用過的單例，然而每重開一個環境，會耗損其效能。

另一種方式是實作，實作和執行環境在元件樹中往下傳，這使得元件不容易移植 portable，而且也會改變一層元件深度依賴上層元件，這會產生應用程式更複雜、更難維護的影響。

以上兩種方式，要先評估用到的第三方程式庫的架構！

# 同構路由

對於 SEO 來說，責任上移到路由控制器，故資料應該傳到元件中。讓路由器處理將 initialState 傳給用戶。


