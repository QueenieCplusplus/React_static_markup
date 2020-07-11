# React_static_markup
react 伺服器端渲染函式

# Life Cycle 生命週期

伺服器端沒有任何適合的生命週期提供元件何時執行完畢，唯有在客戶端的 componentDidMount 週期時建立事件監聽器和計時器，而 componentWillUnmount 週期時停止監聽器和計時器。

# Checksum 校驗

幫助 react 在伺服器和客戶端兩者每次渲染屬性的初始結果都會一致。
