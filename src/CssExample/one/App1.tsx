import React from 'react';
import './App1Style.css'
// @ts-ignore
import classnames from "classnames"
function App1() {
    return (
        <div className={'father'} style={{height:'300px',border:"solid 1px red",margin:'100px'}} >
            <h1 className={'fix-this'} >a标签</h1>
        </div>
    );
}
export default App1;