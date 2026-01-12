const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({ course }) => {
  return (
    course.parts.map(
      part =>
        <p>{part.name} {part.exercises}</p>
    )
  )
}

const Total = ({ course }) => {
  let sum = 0

  for (let part of course.parts) {
    sum += part.exercises
  }

  return (
    <p>Number of exercises {sum}</p>
  )
}

return (
  <div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>
)


}

export default App