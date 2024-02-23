import { useState } from "react"

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)
const StatisticLine = (props) =>  (
    <p>{props.text} {props.value}</p>
  )


const Statistics = (props) => {
  
  const { good, neutral, bad, stats } = props

  const all = good + neutral + bad
  const average = ( good - bad ) / all
  const percentage = good/all * 100

  return (
    <>
      {stats ? (
        <div>
      <h1>statistics</h1>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={percentage} />
    </div>
      ) : ( 
        <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
      )}

    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [stats, setStats] = useState(false)

  const onClickGood = () => {
    setGood(good + 1)
    setStats(true)
  }
const onClickNeutral = () => {
  setNeutral(neutral + 1)
  setStats(true)
}
  const onClickBad = () => {
    setBad(bad +1)
    setStats(true)
  }

  return (  
    <div>
      <h1>give feedback</h1>
      <Button handleClick={onClickGood} text='good' />
      <Button handleClick={onClickNeutral} text='neutral' />
      <Button handleClick={onClickBad} text='bad' />

      <Statistics good={good} neutral={neutral} bad={bad} stats={stats} />
    </div>
  )
}

export default App
