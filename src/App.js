// /* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
    let [title, chgTitle] = useState(["c", "g", "a"]);
    let [like, likeCnt] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>React Blog</h4>
            </div>
            <div className="list">
                <h4>
                    {title[0]}
                    <span onClick={() => likeCnt(like++)} style={{ cursor: "pointer" }}>
                        &nbsp; 👍&nbsp;
                    </span>
                    {like} &nbsp;
                </h4>
                <p>post on 1th June</p>
            </div>

            <div className="list">
                <h4>{title[1]}</h4>
                <p>post on 2th June</p>
            </div>
            <div className="list">
                <h4>{title[2]}</h4>
                <p>post on 2th June</p>
            </div>

            <Modal></Modal>
        </div>
    );
}

function Modal() {
    return (
        <div className="modal">
            <h4>title</h4>
            <p>date</p>
            <p>contents</p>
        </div>
    );
}
export default App;
