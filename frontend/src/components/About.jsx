import React from "react";

function About() {
  return (
    <div className="container">
      <h2 className="my-3">About INoteBook</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is INoteBook?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>INoteBook</strong> is a web application that allows you to
              create, update, and delete notes. It's useful for keeping track of
              tasks, jotting down ideas, and more. You can also assign tags to a
              note.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How to use INoteBook?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              To use INoteBook, simply create a new note by clicking the "Add
              Note" button. You can then enter a title, the content of your
              note, and assign tags to it. Your notes will be saved and can be
              viewed, updated, or deleted at any time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
