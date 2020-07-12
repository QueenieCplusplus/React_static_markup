# React_static_markup
react 伺服器端渲染函式

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
    
作法是 react 銷毀伺服器提供的 實體 DOM 並生成 react 自己的虛擬 DOM 節點並且附加入文件物件中。

如上兩則函數使 react 能夠在 Nodejs 這種非瀏覽器的環境下運作。

# 客戶端的非同步狀態

很多應用程式都是前端顯示遠端後端（伺服器抑或是資料庫）的資料，
React 元件可以等待非同步資料時顯示一個載入 Loading 的畫面。
這要先取的非同步資料，再 render 資料給元件。

實務上，要從非同步儲存中取得一筆使用者紀錄給元件使用，也為了
優化 SEO，需要將此非同步資料在伺服器端 render 元件，增加屬性。

# Singleton 單例

在 Browser 中，應用程式封裝在隔離 isolated 的 sandbox 中，所以應用程式的每一個 instance 實例的狀態不能和其他 instance 混淆，因為每一個實作在不同電腦或是同台電腦的不同沙盒中，所以這允許開發人員在應用程式架構中使用 Singleton。



# 同構路由


