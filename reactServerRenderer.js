// 2020. 11/7, pm 5:25 - 5:40 (duration: 15 mins)
// DOM is not support in Server, due to location not exist Server.
// only support Serializable data.
// Sync & BlockIO

var React = require("react");

var KsComponent = React.createClass({

    var s = React.renderToString(<KsComponent/>);

    render: function(){

        return <div> 前端傳回給後端的畫面 </div>;
    }

});

// 傳回給後端的畫面
// 資料格式變成如下
// reactID 幫助 react 找到 DOM 位置
// 方便更新屬性和值
// 校驗碼只會增加至伺服器


<div
    data-reactid = ".doklhpds"
    data-react-checksum = "-8904225640"

>
    前端傳回給後端的畫面
</div>
