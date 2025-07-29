import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>;

const Statistics = ({statistics}) => {
	const sum = Object.values(statistics).reduce((acc, curr) => acc + curr, 0);
	const total = sum === 0 ? 1 : sum;

	const average = (statistics.good - statistics.bad) / total;
	const positive = (statistics.good / total) * 100;

	if (sum === 0) {
		return (
			<>
				<h1>statistics</h1>

				<p>No feedback given</p>
			</>
		);
	}

	return (
		<>
			<h1>statistics</h1>

			<p>
				good {statistics.good}
				<br></br>
				neutral {statistics.neutral}
				<br></br>
				bad {statistics.bad}
				<br></br>
				all {sum}
				<br></br>
				average {average}
				<br></br>
				positive {positive} %
			</p>
		</>
	);

};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const statistics = {
	"good": good,
	"neutral": neutral,
	"bad": bad
  };

  return (
    <div>
      <h1>give feedback</h1>

	  <Button onClick={() => setGood(good + 1)} text="good"></Button>
	  <Button onClick={() => setNeutral(neutral + 1)} text="neutral"></Button>
	  <Button onClick={() => setBad(bad + 1)} text="bad"></Button>

	  <Statistics statistics={statistics}></Statistics>


    </div>
  )
}

export default App