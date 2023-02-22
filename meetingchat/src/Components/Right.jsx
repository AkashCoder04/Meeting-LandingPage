import React from "react";
import { Link } from "react-router-dom";
import "./Right.css";
export default function Right() {
  return (
    <>
      <div className="right-section">
        <div className="nav">
          <a href="">
            <h4 style={{ fontSize: "18px", color: "white" }}>
              {" "}
              <i
                style={{ color: "gray", padding: "0 2px" }}
                class="bi bi-person-fill"
              ></i>{" "}
              Friends
            </h4>
          </a>
          <a href="">
            <button style={{ backgroundColor: "Gray" }}>Online</button>
          </a>
          <a href="">All</a>
          <a href="">Pending</a>
          <a href="">Blocked</a>
          <a href="">
            <button>Add Friend</button>
          </a>
        </div>

        <div className="searchbar">
        <form class="example" action="action_page.php">
  <input type="text" placeholder="Search" name="search"/>
  <button class="search_button" type="submit"><i class="bi bi-search"></i></button>
</form>
        </div>

<div className="bottom">
    <span>
        ONLINE - 2
    </span>
</div>
<div className="users">
    <div className="logo">
    <div className="icons">
    <i class="bi bi-emoji-heart-eyes"></i>
    </div>

    
    <div className="content">
        <h3>BeardedBro </h3>
        <span>Idle</span>
        </div>
    </div>
    <div className="side_icon">
        <div className="chatt">
        <i class="bi bi-chat-left-fill"></i>
        </div>
        <div className="three">
        <i class="bi bi-three-dots-vertical"></i>
        </div>
    </div>
</div>

<div className="users">
    <div className="logo">
    <div className="icons2">
    <i class="bi bi-x-diamond-fill"></i>
    </div>

    
    <div className="content">
        <h3>Lilithty </h3>
        <span>Idle</span>
        </div>
    </div>
    <div className="side_icon">
        <div className="chatt">
        <i class="bi bi-chat-left-fill"></i>
        </div>
        <div className="three">
        <i class="bi bi-three-dots-vertical"></i>
        </div>
    </div>
</div>




      </div>
    </>
  );
}
