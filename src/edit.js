import React, { useState, useEffect, useRef } from 'react';
import './edit.scss'
import { Button, Modal, Input, message } from 'antd';
import { getCatetory, getArticle, addCatetory, deleteCatetory } from './utils'
import {
    NavLink,
    withRouter
} from "react-router-dom"

function Edit() {
    const [catetory, setCatetory] = useState([]);
    const [article, setArticle] = useState([]);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [catetoryData, setCatetoryData] = useState({})


    const nameRef = useRef();

    useEffect(() => {
        _getCatetory()
        getArticle().then((res) => {
            setArticle(res.data.data)
        })
    }, []);
    //获取分类列表
    function _getCatetory(params) {
        getCatetory().then((res) => {
            setCatetory(res.data.data)
        });
    }
    function handleOk(params) {
        addCatetory({ name: nameRef.current.state.value }).then((res) => {
            if (res.data.code) {
                setVisible(false);
                _getCatetory()
                message.success("添加分类成功");

            } else {
                message.error("操作失败")
            }
        }).catch((e) => {
            message.error("操作失败" + e)
        })
    }
    function _deleteCatetory() {
        deleteCatetory({ id: catetoryData.id }).then((res) => {
            if (res.data.code) {
                message.success("删除分类成功");
                setVisible2(false);
                _getCatetory()
            } else if (!res.data.code) {
                message.error(res.data.message)
            }
        }).catch((e) => {
            message.error("操作失败" + e)
        })
    }
    return (
        <>
            <div className="edit">

                <NavLink className="edit_btn" to="/add">
                    新增
                </NavLink>
                <div className="edit_catetory">
                    {
                        catetory.map(item => {
                            return (
                                <div className="catetory_item">{item.name}
                                    <i className="iconfont delete" onClick={() => { setCatetoryData(item); setVisible2(true) }}>&#xe601;</i>
                                </div>
                            )
                        })
                    }
                    <div className="catetory_item" style={{ fontSize: "20px" }} onClick={() => { setVisible(true) }}>+</div>
                </div>
                <div className="edit_content">
                    {
                        article.map(item => {
                            return (
                                <div className="catetory_item">
                                    {item.title}
                                    <div className="item_set">
                                        <div>编辑</div>
                                        <div style={{ marginLeft: "10px" }}>删除</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Modal style={{ top: 300 }} title="登陆" visible={visible2} onOk={_deleteCatetory} onCancel={() => { setVisible2(false) }}>
                    {`确定删除 ${catetoryData.name} 分类吗？`}
                </Modal>
                <Modal style={{ top: 300 }} title="登陆" visible={visible} onOk={handleOk} onCancel={() => { setVisible(false) }}>
                    <Input ref={nameRef} placeholder="分类名称" />
                </Modal>
            </div>
        </>
    )
}
export default withRouter(Edit)