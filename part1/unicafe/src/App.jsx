import { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>

const Button = ({ title, onClick }) => (<button onClick={onClick}>{title}</button>)

const Info = ({title, value}) => (<div>{title} {value}</div>)

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
    </div>
  )
}

export default App