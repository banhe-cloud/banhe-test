class com1{
    constructor(props){
        console.log('爸爸'+props)
    }
    _render(){
        console.log('com1');
        this._render()
    }
}


class com2 extends com1{
    constructor(props){
        super(props)
        console.log('儿子'+props)
    }
    render(){
        console.log('com2')
    }
}


let test=new com2('测试');
test.render()