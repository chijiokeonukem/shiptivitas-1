import React from "react";
import Dragula from "dragula";
import "./Card.css";

export default class Try extends React.Component {
  componentDidMount() {
    let a = [
      document.getElementById("pane1"),
      document.getElementById("pane2"),
      document.getElementById("pane3"),
    ];
    Dragula(a);
  }

  render() {
    return (
      <div style={{ float: "left", margin: "2px" }}>
        <div
          className="Swimlane-column"
          style={{ float: "left", margin: "2px" }}
        >
          <div>Pane1</div>
          <div>
            {" "}
            <div className="Swimlane-dragColumn" id="pane1">
              <div className="Card-title Card-green" style={{ margin: "1px" }}>
                Drag 1_A
              </div>
              <div className="Card-title Card-green" style={{ margin: "1px" }}>
                Drag 1_B
              </div>
              <div className="Card-title Card-green" style={{ margin: "1px" }}>
                Drag 1_C
              </div>
            </div>
          </div>
        </div>

        <div
          className="Swimlane-column"
          style={{ float: "left", margin: "2px" }}
        >
          <div>Pane2</div>
          <div>
            {" "}
            <div className="Swimlane-dragColumn" id="pane2">
              <div className="Card-title Card-green" style={{ margin: "1px" }}>
                Drag 2_A
              </div>
              <div className="Card-title Card-green" style={{ margin: "1px" }}>
                Drag 2_B
              </div>
              <div className="Card-title Card-green" style={{ margin: "1px" }}>
                Drag 2_C
              </div>
            </div>
          </div>
        </div>

        <div
          className="Swimlane-column"
          style={{ float: "left", margin: "2px" }}
        >
          <div>Pane3</div>
          <div>
            {" "}
            <div className="Swimlane-dragColumn" id="pane3">
              <div className="Card-title Card-green" style={{ margin: "1px" }}>
                Drag 3_A
              </div>
              <div className="Card-title Card-green" style={{ margin: "1px" }}>
                Drag 3_B
              </div>
              <div className="Card-title Card-green" style={{ margin: "1px" }}>
                Drag 3_C
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
