import React from "react";

export default function CommentsList(props) {
  const { title, comment } = props.comment;
  return (
    <li className="media list-group-item">
      <div className="media-body">
        <h5 className="mt-0 mb-1">{title}</h5>
        {comment}
      </div>
    </li>
  );
}
