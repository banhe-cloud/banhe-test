import './first.scss';
import { Modal, Input } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import { getCatetory, getArticle } from './utils/utils'
import {
    NavLink,
    withRouter
} from "react-router-dom"
import empty from "./images/empty.png"
function First(props) {
    const [catetory, setCatetory] = useState([]);
    const [article, setArticle] = useState([]);
    const [current_catetory, setCurrent_catetory] = useState({ name: "全部", id: "" });
    useEffect(() => {
        getCatetory().then((res) => {
            res.data.data.unshift({ name: "全部", id: "" })
            setCatetory(res.data.data);
            getArticle({ catetory_id: "" }).then((res) => {
                setArticle(res.data.data)
            })
        });
    }, []);

    function queryArticle(item) {
        getArticle({ catetory_id: item.id }).then((res) => {
            setArticle(res.data.data)
        })
        setCurrent_catetory(item)
    }

    function toDetail(item) {
        localStorage.setItem("id",item.id)
        props.history.push({ pathname: "/detail" })
    }
    return (
        <div className="app">
            <div className="app_content">
                <div className="content_left">
                    {
                        catetory.map(item => {
                            return (
                                <div className={`left_item ${current_catetory.id === item.id ? "selected" : ""}`} onClick={() => queryArticle(item)}>{item.name}</div>
                            )
                        })
                    }
                </div>
                <div className="content_right">
                    {
                        article.length ?
                            article.map(item => {
                                return (
                                    <div className="content_item" onClick={() => { toDetail(item) }}>
                                        <div className="item_title">{item.title}</div>
                                        <div className="item_font" >{item.content.replace(/<[^>]+>/g, "").substring(0, 60)}</div>
                                        <div className="item_time">{item.create_time.substring(0, 10)}</div>
                                    </div>
                                )
                            }) : <img className="empty" src={empty}></img>
                    }
                </div>

            </div>
        </div>
    );
}

export default withRouter(First)