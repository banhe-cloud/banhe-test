import './App.css';
import { Modal,Input } from 'antd';
import React, { useState } from 'react';
function App() {
  const [visible,setVisible] = useState(false)
  function handleOk(params) {
    
  }
  function handleCancel(params) {

  }
  return (
    <div className="app">
      <div className="app_top">
        西兰花的博客
        <div className="app_sign" onClick={()=>{setVisible(true)}}>登录</div>
      </div>
      <Modal style={{ top: 300}} title="登陆" visible={visible} onOk={handleOk} onCancel={()=>{setVisible(false)}}>
          <Input placeholder="用户名" />
          <Input className="modal_input" placeholder="密码" />
      </Modal>
    </div>
  );
}

export default App;
