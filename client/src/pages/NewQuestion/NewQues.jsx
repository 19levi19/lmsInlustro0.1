import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function NewQuestion() {
  const [question, setQuestion] = useState("");
  const [questionType, setQuestionType] = useState("multiple");
  const [answers, setAnswers] = useState([]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleQuestionTypeChange = (e) => {
    setQuestionType(e.target.value);
  };

  const handleAnswerChange = (e) => {
    const selectedOptions = Array.from(e.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setAnswers(selectedOptions);
  };

  const handleAddQuestion = () => {
    // Make an API request using axios to save the question and answers
    // Replace <API_URL> with the actual endpoint you want to send the data to
    axios.post("<API_URL>", {
      question,
      questionType,
      answers,
    })
    .then((response) => {
      // Handle the response if needed
      console.log(response.data);
    })
    .catch((error) => {
      // Handle the error if needed
      console.error(error);
    });
  };

  return (
    <div className="form-group">
      <label className="form-label">Question</label>
      <div className="ql-toolbar ql-snow">
        <span className="ql-formats">
          <span className="ql-header ql-picker" />
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        value={question}
        onChange={handleQuestionChange}
      />
      <small className="form-text text-muted">Shortly describe the question.</small>

      <div className="form-group">
        <label className="form-label">Question Type</label>
        <select
          name="category"
          className="form-control custom-select"
          value={questionType}
          onChange={handleQuestionTypeChange}
        >
          <option value="multiple">Multiple Answer</option>
          <option value="single">Single Answer</option>
          <option value="essay">Essay</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="select01">Answers</label>
        <select
          id="select01"
          data-toggle="select"
          data-multiple="true"
          multiple=""
          className="form-control select2-hidden-accessible"
          tabIndex="-1"
          aria-hidden="true"
          value={answers}
          onChange={handleAnswerChange}
        >
          <option value="option1">My first option</option>
          <option value="option2">Another option</option>
          <option value="option3">Third option is here</option>
        </select>
      </div>

      <div>
        <a href="#" className="btn btn-outline-secondary" onClick={handleAddQuestion}>
          Add Question
        </a>
      </div>
    </div>
  );
}

export default NewQuestion;
