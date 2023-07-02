import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./loadingstyle.css";

function LoadingComponent() {
  const [container] = useState(document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(
    <div className="loading">
      <div className="cssload-thecube">
        <div className="cssload-cube cssload-c1"></div>
        <div className="cssload-cube cssload-c2"></div>
        <div className="cssload-cube cssload-c4"></div>
        <div className="cssload-cube cssload-c3"></div>
      </div>
    </div>,
    container
  );
}

export default LoadingComponent;
