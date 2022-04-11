import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( { questions, deleteQuestion, updateAnswer } ) {
  const questionArray = questions.map((question) => {
    return <QuestionItem question={question} deleteQuestion={deleteQuestion}  />
  })
  console.log(questionArray)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionArray}</ul>
    </section>
  );
}

export default QuestionList;
