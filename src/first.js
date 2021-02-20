import './App.css';
import { Modal,Input } from 'antd';
import React, { useState } from 'react';
let arr = [
  {title:"react性能优化"}
]
function First() {
  const [visible,setVisible] = useState(false)
  function handleOk(params) {
    
  }
  function handleCancel(params) {

  }
  return (
    <div className="app">
      <div className="app_content">
          {
            arr.map(item=>{
              return (
                <div className="content_item">
                    <div className="item_title">{item.title}</div>
                    <div className="item_font">鄂温克父亲节阿迪索科洛夫好但是看见啊回复看见的撒回复可怜的撒就好疯狂激烈的撒哈立刻就打生活费看了几撒电话疯狂的几撒回复看到了撒就好放大看手机啊哈看见了的撒哈</div>
                </div>
              )
            })
          }
      </div>
    </div>
  );
}

export default First;
