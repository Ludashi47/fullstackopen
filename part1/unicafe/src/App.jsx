import { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>

const Button = ({ title, onClick }) => (<button onClick={onClick}>{title}</button>)

const StatisticLine = ({text, value}) => (
  <div>{text} {value}</div>
)

const Statistics = ({ value1, value2, value3 }) => {
  const all = value1 + value2 + value3

  if (all === 0) {
    return (
      <div>No feedback given</div>
    )
  }

  const average = (value1 - value3) / all
  const positive = (value1 / all) * 100

  return (
    <div>
      <StatisticLine text="good" value={value1} />
      <StatisticLine text="neutral" value={value2} />
      <StatisticLine text="bad" value={value3} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive + ' %'} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <div>
      <Header title="give feedback" />
      <Button title="good" onClick={handleGoodClick} />
      <Button title="neutral" onClick={handleNeutralClick} />
      <Button title="bad" onClick={handleBadClick} />
      <Header title="statistics" />
      <Statistics value1={good} value2={neutral} value3={bad} />
    </div>
  )
}

export default App