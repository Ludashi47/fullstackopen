import { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>

const Button = ({ title, onClick }) => (<button onClick={onClick}>{title}</button>)

const Info = ({ title, value }) => (<div>{title} {value}</div>)

const FurtherInfo = ({ value1, value2, value3 }) => (
  <div>
    <p>all {value1 + value2 + value3}</p>
    <p>average {(value1 - value3) / (value1 + value2 + value3)}</p>
    <p>positive {(value1 / (value1 + value2 + value3)) * 100} %</p>
  </div>

)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Header title="give feedback" />
      <Button title="good" onClick={handleGoodClick} />
      <Button title="neutral" onClick={handleNeutralClick} />
      <Button title="bad" onClick={handleBadClick} />
      <Header title="statistics" />
      <Info title="good" value={good} />
      <Info title="neutral" value={neutral} />
      <Info title="bad" value={bad} />
      <FurtherInfo value1={good} value2={neutral} value3={bad} />
    </div>
  )
}

export default App