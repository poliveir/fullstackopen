const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Part = (props) => {
	return <p>{props.part.title} {props.part.numExercises}</p>;
};

const Content = (props) => {
	return (
		<div>
			<Part part={props.part1}/>
			<Part part={props.part2}/>
			<Part part={props.part3}/>
		</div>
	);
};

const Total = (props) => {
	return <p>Number of exercises {props.numExercisesTotal}</p>;
};

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
	title: 'Fundamentals of React',
	numExercises: 10
  };
  const part2 = {
	title: 'Using props to pass data',
	numExercises: 7
  };
  const part3 = {
	title: 'State of a component',
	numExercises: 14
  };

  return (
	<>
		<Header course={course}/>
		<Content
			part1={part1}
			part2={part2}
			part3={part3}
		/>
		<Total numExercisesTotal={part1.numExercises + part2.numExercises + part3.numExercises}/>
	</>
  );
}

export default App