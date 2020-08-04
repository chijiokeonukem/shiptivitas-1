import React from "react";
import Card from "./Card";
import "./Swimlane.css";
import Dragula from "dragula";

export default class Swimlane extends React.Component {
  componentDidMount() {
    let a = [
      document.getElementById("inprogress"),
      document.getElementById("complete"),
      document.getElementById("backlog"),
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
          id={this.props.id}
          ref={this.props.dragulaRef}
        >
          {cards}
        </div>
      </div>
    );
  }
}
