const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = ({ course }) => {
    return (
      <h1>{course}</h1>
    )
  }

  const Content = ({ parts }) => {
    return (
      parts.map(
        part =>
          <p>{part.name} {part.exercises}</p>
      )
    )
  }

  const Total = ({parts }) => {
    let sum = 0

    for (let part of parts) {
      sum += part.exercises
    }

    return (
      <p>Number of exercises {sum}</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )


}

export default App