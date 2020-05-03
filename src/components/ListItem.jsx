import React from "react";

export default function Project(props) {
  const { id, name, identifier } = props.project;
  return (
    <a
      className="list-group-item list-group-item-action"
      id={id}
      href={`#${identifier}`}
      aria-controls={identifier}
      role="tab"
      data-toggle="list"
    >
      {name}
    </a>
  );
}
