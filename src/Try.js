import React from "react";
import Dragula from "dragula";
import "./Card.css";

export default class Try extends React.Component {
  constructor(props) {
    super(props);

    this.states = {
      pane1: React.createRef(),
      pane2: React.createRef(),
      pane3: React.createRef(),
    };
  }

  componentDidMount() {
    let a = [
      this.states.pane1.current,
      this.states.pane2.current,
      this.states.pane3.current,
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
            <div
              className="Swimlane-dragColumn"
              id="pane1"
              ref={this.states.pane1}
            >
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
            <div
              className="Swimlane-dragColumn"
              id="pane2"
              ref={this.states.pane2}
            >
              <dvi>
                <div
                  className="Card-title Card-green"
                  style={{ margin: "1px" }}
                >
                  Drag 2_A
                </div>
              </dvi>
              <div>
                <div
                  className="Card-title Card-green"
                  style={{ margin: "1px" }}
                >
                  Drag 2_B
                </div>
              </div>
              <div>
                <div
                  className="Card-title Card-green"
                  style={{ margin: "1px" }}
                >
                  Drag 2_C
                </div>
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
            <div
              className="Swimlane-dragColumn"
              id="pane3"
              ref={this.states.pane3}
            >
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
