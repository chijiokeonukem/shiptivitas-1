import React from "react";
import Dragula from "dragula";
import Swimlane from "./Swimlane";
import "./Board.css";
import "dragula/dist/dragula.css";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    const clients = this.getClients();
    this.state = {
      containers: [],
      clients: {
        backlog: clients.filter(
          (client) => !client.status || client.status === "backlog"
        ),
        inProgress: clients.filter(
          (client) => client.status && client.status === "in-progress"
        ),
        complete: clients.filter(
          (client) => client.status && client.status === "complete"
        ),
      },
    };
    this.swimlanes = {
      backlog: React.createRef(),
      inProgress: React.createRef(),
      complete: React.createRef(),
    };
  }

  getClients() {
    return [
      [
        "1",
        "Stark, White and Abbott",
        "Cloned Optimal Architecture",
        "in-progress",
      ],
      [
        "2",
        "Wiza LLC",
        "Exclusive Bandwidth-Monitored Implementation",
        "complete",
      ],
      [
        "3",
        "Nolan LLC",
        "Vision-Oriented 4Thgeneration Graphicaluserinterface",
        "backlog",
      ],
      [
        "4",
        "Thompson PLC",
        "Streamlined Regional Knowledgeuser",
        "in-progress",
      ],
      [
        "5",
        "Walker-Williamson",
        "Team-Oriented 6Thgeneration Matrix",
        "in-progress",
      ],
      ["6", "Boehm and Sons", "Automated Systematic Paradigm", "backlog"],
      [
        "7",
        "Runolfsson, Hegmann and Block",
        "Integrated Transitional Strategy",
        "backlog",
      ],
      ["8", "Schumm-Labadie", "Operative Heuristic Challenge", "backlog"],
      [
        "9",
        "Kohler Group",
        "Re-Contextualized Multi-Tasking Attitude",
        "backlog",
      ],
      ["10", "Romaguera Inc", "Managed Foreground Toolset", "backlog"],
      ["11", "Reilly-King", "Future-Proofed Interactive Toolset", "complete"],
      [
        "12",
        "Emard, Champlin and Runolfsdottir",
        "Devolved Needs-Based Capability",
        "backlog",
      ],
      [
        "13",
        "Fritsch, Cronin and Wolff",
        "Open-Source 3Rdgeneration Website",
        "complete",
      ],
      [
        "14",
        "Borer LLC",
        "Profit-Focused Incremental Orchestration",
        "backlog",
      ],
      [
        "15",
        "Emmerich-Ankunding",
        "User-Centric Stable Extranet",
        "in-progress",
      ],
      [
        "16",
        "Willms-Abbott",
        "Progressive Bandwidth-Monitored Access",
        "in-progress",
      ],
      ["17", "Brekke PLC", "Intuitive User-Facing Customerloyalty", "complete"],
      [
        "18",
        "Bins, Toy and Klocko",
        "Integrated Assymetric Software",
        "backlog",
      ],
      [
        "19",
        "Hodkiewicz-Hayes",
        "Programmable Systematic Securedline",
        "backlog",
      ],
      ["20", "Murphy, Lang and Ferry", "Organized Explicit Access", "backlog"],
    ].map((companyDetails) => ({
      id: companyDetails[0],
      name: companyDetails[1],
      description: companyDetails[2],
      status: companyDetails[3],
    }));
  }
  renderSwimlane(name, clients, ref) {
    this.state.containers.push(ref);
    /* The line above adds the ref of all containers to an array,
       making it very easy to add new containers in future 
    */
    return <Swimlane name={name} clients={clients} dragulaRef={ref} />;
  }

  render() {
    return (
      <div className="Board">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              {this.renderSwimlane(
                "Backlog",
                this.state.clients.backlog,
                this.swimlanes.backlog
              )}
            </div>
            <div className="col-md-4">
              {this.renderSwimlane(
                "In Progress",
                this.state.clients.inProgress,
                this.swimlanes.inProgress
              )}
            </div>
            <div className="col-md-4">
              {this.renderSwimlane(
                "Complete",
                this.state.clients.complete,
                this.swimlanes.complete
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  //This block will be executed immediately this component (Board.js) mounts
  componentDidMount() {
    const containers = [];
    this.state.containers.map((container) => {
      //Pushing all container refs to a new array to be used by Dragula
      containers.push(container.current);

      return true;
    });
    Dragula(containers)
      .on("drag", function(el) {
        el.className = el.className.replace("ex-moved", "");
      })
      .on("drop", function(el) {
        el.className += " ex-moved";
      })
      .on("over", function(el, container) {
        container.className += " ex-over";
      })
      .on("out", function(el, container) {
        container.className = container.className.replace("ex-over", "");
      }); // Modified className on drag, drop, over and out events
  }
}
