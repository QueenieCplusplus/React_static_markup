# React_static_markup
react 伺服器端渲染函式

# Life Cycle 生命週期

伺服器端沒有任何適合的生命週期提供元件何時執行完畢，唯有在客戶端的 componentDidMount 週期時建立事件監聽器和計時器，而 componentWillUnmount 週期時停止監聽器和計時器。

# Checksum 校驗

使用 data-react-checksum 匹配，幫助 react 在伺服器和客戶端兩者每次渲染屬性的初始結果都會一致，將應用程式的初始狀態傳給用戶端。

    renderToString()
    //同步字串

蠢作法是 react 銷毀伺服器提供的 實體 DOM 並生成 react 自己的虛擬 DOM 節點並且附加入文件物件中。所以如上是同步渲染函數，可以進行很重要的事情，這攸關到性能表現！


    renderToStaticMarkup()
    //靜態標記
    
作法是 react 銷毀伺服器提供的 實體 DOM 並生成 react 自己的虛擬 DOM 節點並且附加入文件物件中。

如上兩則函數使 react 能夠在 Nodejs 這種非瀏覽器的環境下運作。

# 同構路由


# Singleton 單例
