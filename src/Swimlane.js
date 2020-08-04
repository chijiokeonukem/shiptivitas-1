import React from "react";
import Card from "./Card";
import "./Swimlane.css";
import Dragula from "dragula";

export default class Swimlane extends React.Component {
  componentDidMount() {
    let a = [
      document.getElementById("_backlog"),
      document.getElementById("_inprogress"),
      document.getElementById("_complete"),
    ];
    Dragula(a);
  }

  render() {
    const cards = this.props.clients.map((client) => {
      return (
        <>
          <Card
            key={client.id}
            id={client.id}
            name={client.name}
            description={client.description}
            status={client.status}
          />
        </>
      );
    });
    return (
      <div className="Swimlane-column">
        <div className="Swimlane-title">{this.props.name}</div>

        <div
          className="Swimlane-dragColumn"
          id={"_" + this.props.id}
          ref={this.props.dragulaRef}
          style={{ border: "2px solid black", backgroundColor: "red" }}
        >
          {cards}
        </div>
      </div>
    );
  }
}
