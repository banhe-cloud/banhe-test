import React, { useState, useRef, useEffect } from 'react';
import {
    NavLink,
    withRouter
} from "react-router-dom"
import "./detail.scss"
function Detail(props) {
    let data = props.location.state.data
    return (
        <div className="detail">
            <div className="detail_title">{data.title}</div>
            <div className="detail_content" dangerouslySetInnerHTML={{__html:data.content}}></div>
        </div>
    )
}
export default withRouter(Detail)