import React, { useState } from 'react';

const Quizz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  // Mock quiz data
  const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    // Add more questions here...
  ];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderQuizContent = () => {
    if (currentQuestion >= quizData.length) {
      return (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {quizData.length}</p>
        </div>
      );
    }

    const currentQuiz = quizData[currentQuestion];

    return (
      <div>
        <h2>Question {currentQuestion + 1}</h2>
        <p>{currentQuiz.question}</p>
        <form>
          {currentQuiz.options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            </div>
          ))}
        </form>
        <button onClick={handleNextQuestion} disabled={!selectedOption}>
          Next Question
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>Quiz Section</h1>
      {renderQuizContent()}
    </div>
  );
};

export default Quizz;
