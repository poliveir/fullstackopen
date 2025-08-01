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
			{parts.map((part) =>
				<Part key={part.id} part={part}></Part>
			)}
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

export default Course;