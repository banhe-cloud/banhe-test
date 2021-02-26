import './first.scss';
import { Modal, Input } from 'antd';
import React, { useEffect, useState,useRef } from 'react';
import { getCatetory, getArticle } from './utils'
import {
    NavLink,
    withRouter
} from "react-router-dom"
let id = {
    a:789
}
function First(props) {
    const [catetory, setCatetory] = useState([]);
    const [article, setArticle] = useState([]);
    useEffect(() => {
        getCatetory().then((res) => {
            setCatetory(res.data.data)
        });
        getArticle().then((res) => {
            setArticle(res.data.data)
        })
    }, [])

    function  toDetail(item) {
        props.history.push({pathname:"/detail",state:{data:item}})
    }
    return (
        <div className="app">
            <div className="app_content">
                <div className="content_left">
                    {
                        catetory.map(item => {
                            return (
                                <div className="left_item">{item.name}</div>    
                            )
                        })
                    }
                </div>
                <div className="content_right">
                    {     
                        article.map(item => {
                            return (
                                <div className="content_item" to="/detail/:id" onClick={()=>{toDetail(item)}}>
                                    <div className="item_title">{item.title}</div>
                                    <div className="item_font" >{item.content.replace(/<[^>]+>/g, "").substring(0,80)}</div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    );
}

export default withRouter(First)