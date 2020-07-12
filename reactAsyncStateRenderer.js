//2020, 7/11, pm 5:40 & 7/12 am 7:15- 8:00

var React = require("react");
const { useReducer } = require("react");

var VIPmember = React.createClass({

    // async state getter
    // 將非同步資料儲存起來
    statics:{

        getAsyncState: function(state, setState){

            vipUser.findById(state.vipUserId)

            .then(

                function(vipUser){setState({user: vipUser});}

            ).catch(
                
                function(er){setState({error: er});}

            );

        }

    },

    // both sides
    
    componentWillMount: function(){

        if(this.state.initialState){this.setState(this.satate.initialState);}

    },

    // client Side
    // if initialState not exist
    // then  get async state
    componentDidMount: function(){

        // 獲取非同步狀態
        if(!this.state.initialState){this.updateAsyncState();}

        // 開啟監聽器
        // 監聽用戶端變化
        User.on('change', this.updateAsyncState);

    },

    // client Sice
    componentWillUnmount: function(){

        User.off('change', this.updateAsyncState)

    },

    // 非同步資料取得方式
    updateAsyncState: function(){

        // 實作中獲取非同步狀態
        this.constructor.getAsyncState(this.state, this.setState);

    },

    render: function(){
        
        if(this.state.error){

        return <div> {this.state.error.message} </div>

        }

        if(!this.state.user){

            return <div> Loading... plz wait! </div>

        }

        return <div> {this.state.user.info} </div>

    }

});

var state = {vipUserId: 318}; // or getting form Router url path /userID/:userID

VIPmember.getAsyncState(state, funtion(initialState){

    state[initialState] = initialState;
    var result = React.renderToString(VIPmember(state));
    // 優化 SEO
    // 伺服器端顯示資料函數
    // 結果同步回傳給使用者

});
