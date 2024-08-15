import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#46435e" : "white",
    border: "1px Solid",
    borderColor: props.mode === "dark" ? "#46435e" : "black",
  };
  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          ABOUT US
        </h1>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <strong>
              Analyze your text
              </strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and
              efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              {" "}
              TextUtils is a free tool that helps to count characters and
              words. it also helps to change case of the text
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
