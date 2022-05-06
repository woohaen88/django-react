import React, {useState} from "react"
import axios from "axios"
import "./RestAPI.css"

function RestAPI() {
    const [text, setText] = useState([])
    return (
        <>
            <h1>REST API 연습</h1>
            <div className="btn-primary">
                <button onClick={()=>{
                    axios
                        .post("/api/review/", {
                            title: "제목",
                            content: "내용",
                        })
                        .then((response)=>{
                            console.log(response)
                        })
                        .catch((error)=>{
                            console.log(error)
                        })
                }}>POST</button>
                <button onClick={()=>{
                    axios
                        .get("/api/review/")
                        .then((response)=>{
                            setText([...response.data]);
                            console.log(response.data);
                        })
                        .catch((error)=>{
                            console.log(error)
                        })
                }}>GET</button>
            </div>
            {text.map((e) => (
        <div>
          {" "}
          <div className="list">
            <span>
              {e.id}번, {e.title}, {e.content}, {e.update_at}
            </span>
            <button
              className="btn-delete"
              onClick={() => {
                axios.delete(`/api/review/${e.id}`);
                setText(text.filter((text) => text.id !== e.id));
              }}
            >
              DELETE
            </button>{" "}
          </div>
        </div>
      ))}
        </>
    )
}

export default RestAPI
