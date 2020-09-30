import React from "react";

export default function ErrorNotice(props) {
  return (
    <div className="toast-header">
      <span>{props.message}</span>
      <button onClick={props.clearError}className="btn btn-danger px-3">X</button>
    </div>
  );
}