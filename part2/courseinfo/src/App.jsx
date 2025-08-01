const Header = ({name}) => {
	return <h1>{name}</h1>;
};

const Part = ({part}) => {
	return <p>{part.name} {part.exercises}</p>;
};

const Total = ({parts}) => {
	const sum = parts.reduce(
		(sum, part) =>  sum + part.exercises,
		0
	);
	return <h4>total of {sum} exercises</h4>;
};

const Content = ({parts}) => {
	return (
		<div>
			{parts.map((part) => <Part key={part.id} part={part}></Part>)}
			<Total parts={parts}></Total>
		</div>
	);
};


const Course = ({course}) => {
	return (
		<>
			<Header name={course.name}></Header>
			<Content parts={course.parts}></Content>
		</>
	);
};

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

	return (
		<div>
			{courses.map(course =>
				<Course key={course.id} course={course}/>)
			}
		</div>
	);
}

export default App;