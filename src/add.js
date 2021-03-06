import "./add.scss"
import React, { useState, useRef, useEffect } from 'react';
import Simditor from 'simditor';

import 'simditor/styles/simditor.scss';
import { Menu, Dropdown, Button, message } from 'antd';
import arrDiff from "arr-diff";
import { getCatetory, getArticle, addArticle, article_detail, updateArticle } from './utils/utils'
import {
    NavLink,
    withRouter
} from "react-router-dom"
class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catetoryList: [],
            catetoryCurrent: {}
        }
    }

    componentDidMount() {
        let element = this.editor;
        let editor = new Simditor({
            textarea: element,
            toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', 'ol', 'ul', 'blockquote', 'code', 'table', 'link', 'image', 'indent', 'outdent', 'alignment', 'hr']

        });
        getCatetory().then((res) => {
            this.setState({
                catetoryList: res.data.data,
                catetoryCurrent: res.data.data[0]
            })
        }).catch((e) => {
            message.error("获取分类失败" + e)
        });
        if (localStorage.getItem("isEdit")) {
            let id = localStorage.getItem("id")
            article_detail({ id }).then((res) => {
                this.title.value = res.data.data.title;
                editor.setValue(res.data.data.content)
            })
        }
    }

    release = () => {
        let a = this.editor;
        let params = {
            title: this.title.value,
            content: this.editor.value,
            catetory_id: this.state.catetoryCurrent.id,
            catetory: this.state.catetoryCurrent.name
        }
        //编辑文章
        if (localStorage.getItem("isEdit")) {
            params.id = localStorage.getItem("id");
            updateArticle(params).then((res) => {
                if (res.data.code) {
                    message.success("更新成功");
                    this.props.history.push({ pathname: "/edit" })
                }
            }).catch((e) => {
                message.error("更新失败" + e)
            })

        } else {
            //新增文章
            addArticle(params).then((res) => {
                if (res.data.code) {
                    message.success("发布成功");
                    this.props.history.push({ pathname: "/edit" })
                }
            }).catch((e) => {
                message.error("发布失败")
            })
        }

    }


    render() {
        let { catetoryList, catetoryCurrent } = this.state;
        return (
            <div className="add">
                <div className="add_set">
                    <Dropdown overlay={<Menu>
                        {
                            catetoryList.map((item) => {
                                return (
                                    <Menu.Item onClick={() => {
                                        this.setState({
                                            catetoryCurrent: item
                                        })
                                    }}>
                                        {item.name}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>}>
                        <div>{catetoryCurrent.name}</div>
                    </Dropdown>
                    <Button onClick={this.release}>发布</Button>
                </div>
                <input ref={(title) => { this.title = title }} className="add_title" placeholder="标题" />
                <textarea ref={(d) => { this.editor = d }} placeholder="在此输入内容"></textarea>
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
export default withRouter(Add)