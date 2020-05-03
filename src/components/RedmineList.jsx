import React from "react";

import ListItem from "./ListItem.jsx";
import TabPane from "./TabPane.jsx";

export default function RedmineList(props) {
  const { projects } = props.projects;
  return (
    <>
      <header className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Redmine Application</h1>
        </div>
      </header>

      <main>
        <div className="row">
          <div className="col-4">
            <div className="list-group" id="list-tab" role="tablist">
              {projects.map(project => (
                <ListItem key={project.id} project={project} />
              ))}
            </div>
          </div>
          <div className="col-8">
            <div className="tab-content" id="nav-tabContent">
              {projects.map(project => (
                <TabPane key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
