import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
// import QuestionItem from "./QuestionItem";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  console.log(questions)

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(questions=> setQuestions(questions))
  }, [])

  const addNewQuestion = (newQuestion) => {
       fetch('http://localhost:4000/questions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newQuestion)
        })
      .then(resp=> resp.json())
      .then(data => setQuestions([...questions, data]))
  }


  const deleteQuestion = (id) => {
    fetch(`http://localhost:4000/questions/${id}`,{
      method: 'DELETE'
    })

    const updatedQuestions = questions.filter(question => question.id !== id)
    // setQuestions(updatedQuestions)
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addNewQuestion={addNewQuestion} /> : <QuestionList questions={questions} deleteQuestion={deleteQuestion}  />}
    </main>
  );
}

export default App;
