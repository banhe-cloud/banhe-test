import "./add.scss"
import React, { useState, useRef, useEffect } from 'react';
import Simditor from 'simditor';

import 'simditor/styles/simditor.scss';
import { Menu, Dropdown, Button } from 'antd';
import arrDiff from "arr-diff";
class Add extends React.Component {
    constructor(props) {
        super(props);

        let arr = [{ name: "算法" }, { name: "react" }, { name: "源码" }]
        this.menu = (
            <Menu>
                {
                    arr.map(item => {
                        return (
                            <Menu.Item>
                                {item.name}
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        );
    }

    componentDidMount() {
        this.richEditor();
    }

    richEditor() {
        let element = this.refs['editor'];
        let editor = new Simditor({
            textarea: element,
            toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', 'ol', 'ul', 'blockquote', 'code', 'table', 'link', 'image', 'indent', 'outdent', 'alignment', 'hr']

        });
    }



    render() {
        return (
            <div className="add">
                <div className="add_set">
                    <Dropdown overlay={this.menu}>
                        <div>分类</div>
                    </Dropdown>
                    <Button>发布</Button>
                </div>
                <input className="add_title" placeholder="标题" />
                <textarea ref="editor" placeholder="只需这一行就可以实现富文本编辑器，很nice啊"></textarea>
            </div>
        )
    }


}




// function Add() {
//     const editors = useRef(null);
//     useEffect(() => {

//         let editor = new Simditor({

//             textarea: editors,

//             toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', 'ol', 'ul', 'blockquote', 'code', 'table', 'link', 'image', 'indent', 'outdent', 'alignment', 'hr']

//         });
//     })






//     return (
//         <div className="add">
//             <input className="add_title" placeholder="标题" />

//             {/* <textarea ref={editors} placeholder="只需这一行就可以实现富文本编辑器，很nice啊"></textarea> */}
//         </div>
//     )
// }
export default Add