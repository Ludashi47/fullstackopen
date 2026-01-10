const App = () => {
  const course = 'Half Stack application development'
  
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part2.exercises}</p>
      <p>{part3.name} {part3.exercises}</p>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )

  // const Header = (props) => <h1>{props.course}</h1>

  // const Total = (props) => <p>Number of exercises {props.exercises}</p>

  // const Part = (props) => <p>{props.part} {props.exercises}</p>

  // const Content = (props) => {
  //   return (
  //     <div>
  //       <Part part={props.part1} exercises={props.exercises1} />
  //       <Part part={props.part2} exercises={props.exercises2} />
  //       <Part part={props.part3} exercises={props.exercises3} />
  //     </div>
  //   )
  // }

  // return (
  //   <div>
  //     <Header course={course} />
  //     <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
  //     <Total exercises={exercises1 + exercises2 + exercises3} />
  //   </div>
  // )
}

export default App