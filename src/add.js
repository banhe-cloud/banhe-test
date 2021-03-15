import "./add.scss";
import React, { useState, useRef, useEffect } from "react";
import { Menu, Dropdown, Button, message } from "antd";
import {
  getCatetory,
  getArticle,
  addArticle,
  article_detail,
  updateArticle,
  upload
} from "./utils/utils";
import { NavLink, withRouter } from "react-router-dom";

import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";
class Add extends React.Component {
  mdParser = null;
  constructor(props) {
    super(props);
    this.state = {
      catetoryList: [],
      catetoryCurrent: {},
      content_markDown: "",
      defaultContent: "",
    };
    this.mdParser = new MarkdownIt(/* Markdown-it options */);
  }
  handleEditorChange = ({ html, text }) => {
    this.setState({
      content_markDown: text,
      content: html,
    });
  };

  componentDidMount() {
    getCatetory()
      .then((res) => {
        this.setState({
          catetoryList: res.data.data,
          catetoryCurrent: res.data.data[0],
        });
      })
      .catch((e) => {
        message.error("获取分类失败" + e);
      });
    if (localStorage.getItem("isEdit")) {
      let id = localStorage.getItem("id");
      article_detail({ id }).then((res) => {
        this.title.value = res.data.data.title;
        this.setState({
          content_markDown: res.data.data.content_markDown,
          content: res.data.data.content,
        });
      });
    }
  }
  //发布文章
  release = () => {
    if (!this.state.content || !this.title.value)
      return message.error("标题或内容不能为空");
    let params = {
      content_markDown: this.state.content_markDown,
      title: this.title.value,
      content: this.state.content,
      catetory_id: this.state.catetoryCurrent.id,
      catetory: this.state.catetoryCurrent.name,
    };
    //编辑文章
    if (localStorage.getItem("isEdit")) {
      params.id = localStorage.getItem("id");
      updateArticle(params)
        .then((res) => {
          if (res.data.code) {
            message.success("更新成功");
            this.props.history.push({ pathname: "/edit" });
          }
        })
        .catch((e) => {
          message.error("更新失败" + e);
        });
    } else {
      //新增文章
      addArticle(params)
        .then((res) => {
          if (res.data.code) {
            message.success("发布成功");
            this.props.history.push({ pathname: "/edit" });
          }
        })
        .catch((e) => {
          message.error("发布失败");
        });
    }
  };
  getBase64Image = (img) => {
    debugger;
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    var dataURL = canvas.toDataURL("image/" + ext);
    return dataURL;
  };

  render() {
    let { catetoryList, catetoryCurrent } = this.state;
    return (
      <div className="add">
        <div className="add_set">
          <Dropdown
            overlay={
              <Menu>
                {catetoryList.map((item) => {
                  return (
                    <Menu.Item
                      onClick={() => {
                        this.setState({
                          catetoryCurrent: item,
                        });
                      }}
                    >
                      {item.name}
                    </Menu.Item>
                  );
                })}
              </Menu>
            }
          >
            <div>{catetoryCurrent.name}</div>
          </Dropdown>
          <Button onClick={this.release}>发布</Button>
        </div>
        <input
          ref={(title) => {
            this.title = title;
          }}
          className="add_title"
          placeholder="标题"
        />
        <MdEditor
          ref={(editor) => (this.editor = editor)}
          value={this.state.content_markDown}
          renderHTML={(text) => this.mdParser.render(text)}
          onChange={this.handleEditorChange}
          onImageUpload={(e) =>
            new Promise((resolve) => {
              let fm = new FormData();
              fm.append('file',e)
              
              upload(fm).then((res)=>{
                
                resolve(res.data.data)
              })
            })
          }
        />
      </div>
    );
  }
}

export default withRouter(Add);
