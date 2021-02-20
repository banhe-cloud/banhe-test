import React, { useState } from 'react';
import './edit.scss'
import { Button } from 'antd';
let arr = [{name:"算法"},{name:"react"},{name:"源码"}]
let ary = [
    {title:"react性能优化"}
  ]
export default function Edit() {
    return (
        <>
        
        <div className="edit">
            <Button className="edit_btn">新增</Button>
            <div className="edit_catetory">
                {
                    arr.map(item=>{
                        return (
                            <div className="catetory_item">{item.name}</div>
                        )
                    })
                }
            </div>
            <div className="edit_content">
                {
                    ary.map(item=>{
                        return (
                            <div className="catetory_item">
                                {item.title}
                                <div className="item_set">
                                    <div>编辑</div>
                                    <div style={{marginLeft:"10px"}}>删除</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}