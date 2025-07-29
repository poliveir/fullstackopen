import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({text, value}) => {
	return (
		<tr>
			<td>{text.before}</td>
			<td>{value}</td>
			<td>{text.after}</td>
		</tr>
	);
}

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

			<table>
				<tbody>
					<StatisticLine
						text={{
							before: "good",
							after: null
						}}
						value={statistics.good}
					></StatisticLine>

					<StatisticLine
						text={{
							before: "neutral",
							after: null
						}}
						value={statistics.neutral}
					></StatisticLine>

					<StatisticLine
						text={{
							before: "bad",
							after: null
						}}
						value={statistics.bad}
					></StatisticLine>

					<StatisticLine
						text={{
							before: "all",
							after: null
						}}
						value={sum}
					></StatisticLine>

					<StatisticLine
						text={{
							before: "average",
							after: null
						}}
						value={average}
					></StatisticLine>

					<StatisticLine
						text={{
							before: "positive",
							after: "%"
						}}
						value={positive}
					></StatisticLine>
				</tbody>
			</table>
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