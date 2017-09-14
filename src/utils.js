export const fetchQuiz = () => {
  return fetch('http://localhost:3000/quizzes')
  .then(res => res.json())
}
