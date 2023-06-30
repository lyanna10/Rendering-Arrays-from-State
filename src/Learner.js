import React from 'react'

function Learner({learner}) {
  return (
    <div className='Learner'>
          <h1>{learner.name}</h1>
          <p>{learner.bio}</p>
          <h2>Scores</h2>
          <ul>
              {learner.scores.map((score, index) => (
                  <li key={index}>
                      Date: {score.date}, Score: {score.score}
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default Learner