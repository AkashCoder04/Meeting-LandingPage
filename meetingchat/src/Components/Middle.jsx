import React from "react";
import "./Middle.css";
export default function Middle() {
  return (
    <>
      <div className="middle_section">
        <div className="first">
          <div className="search1">
            <form class="example" action="action_page.php">
              <input
                type="text"
                placeholder="Find or start a conversation"
                name="search"
              />
            </form>
          </div>
        </div>
        <div className="second">
          <div className="btn">
            <button>
              {" "}
              <i
                style={{ color: "white", padding: "0 8px" }}
                class="bi bi-person-fill"
              ></i>{" "}
              Friends
            </button>
          </div>
        </div>
        <div className="third">
          <div className="left_mid">
            <i
              style={{ padding: "0 10px", color: "gray" }}
              class="bi bi-browser-firefox"
            ></i>{" "}
            Nitro{" "}
          </div>
          <div className="new">
            <div className="btn">
              <button>New</button>{" "}
            </div>
            <div className="star">
              <i class="bi bi-stars"></i>
            </div>
          </div>
        </div>

        <div className="third">
          <div className="left_mid">
            <i
              style={{ padding: "0 10px", color: "gray" }}
              class="bi bi-envelope-fill"
            ></i>{" "}
            Message Requests{" "}
          </div>
        </div>

        <div
          className="third"
          style={{ fontSize: "15px", padding: "20px 20px 5px 10px" }}
        >
          <div className="msg">
            <b> DIRECT MESSAGE </b>
          </div>
          <div className="plus">
            <i class="bi bi-plus-lg"></i>
          </div>
        </div>

        <div className="fourth">
          <div className="iconn">
            <i class="bi bi-people-fill"></i>
          </div>
          <div className="content">
            <h3>Crypserve, BeardedBro</h3> <p>3 Members</p>
          </div>
        </div>

        <div className="fourth">
          <div className="iconn1">
            <i class="bi bi-emoji-smile-upside-down-fill"></i>
          </div>
          <div className="content">
            <h3>BeardedBro</h3>{" "}
          </div>
        </div>

        <div className="fourth">
          <div className="iconn2">
            <i class="bi bi-people-fill"></i>
          </div>
          <div className="content">
            <h3>NFT</h3> <p>6 Members</p>
          </div>
        </div>

        <div className="fourth">
          <div className="iconn3">
            <i class="bi bi-browser-firefox"></i>
          </div>
          <div className="content" style={{ color: "gray" }}>
            <h3>Cilnarix Support</h3>
          </div>
        </div>

        <div className="fourth">
          <div className="iconn4">
            <i class="bi bi-people-fill"></i>
          </div>
          <div className="content" style={{ color: "gray" }}>
            <h3>BLOCKCHAIN BOYS</h3> <p>1 Members</p>
          </div>
        </div>
        <div className="fourth">
          <div className="iconn5">
            <i class="bi bi-people-fill"></i>
          </div>
          <div className="content" style={{ color: "gray" }}>
            <h3>RockPalsNFT</h3> <p>2 Members</p>
          </div>
        </div>

        <div className="fourth">
          <div className="iconn5">
            <i class="bi bi-people-fill"></i>
          </div>
          <div className="content" style={{ color: "gray" }}>
            <h3>Investmentjoy NFT</h3> <p>4 Members</p>
          </div>
        </div>

        <div className="fifth">
          <div className="iconn6">
            <i class="bi bi-discord"></i>
          </div>
          <div className="content">
            <h3>
              <b>kubit</b>
            </h3>{" "}
            <p>#0915</p>
          </div>
          <div className="side">
            <div className="iconl">
              <i class="bi bi-mic-mute-fill"></i>
            </div>
            <div className="iconl">
              <i class="bi bi-headphones"></i>
            </div>
            <div className="iconl">
              <i class="bi bi-gear-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
