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


  return (
    <div>
      <h1>{course}</h1>
      <p>{parts[0].name} {parts[0].exercises}</p>
      <p>{parts[1].name} {parts[1].exercises}</p>
      <p>{parts[2].name} {parts[2].exercises}</p>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
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