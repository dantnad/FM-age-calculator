import Card from "./components/card/card";
import Input from "./components/input/input";
import Result from "./components/result/result";
import { useState } from "react";

function App() {
  const today = new Date();
  const [day, setDay] = useState(today.getDate());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  const [warning, setWarning] = useState("");
  const birthDate = new Date(year, month - 1, day);
  const ageinms = today.getTime() - birthDate.getTime();
  const age = {
    years: Math.floor(ageinms / (1000 * 60 * 60 * 24 * 365)),
    months: Math.floor(((ageinms / (1000 * 60 * 60 * 24)) % 365) / 30),
    days: Math.floor(((ageinms / (1000 * 60 * 60 * 24)) % 365) % 30),
  };

  if (birthDate > today) {
    setWarning("You are not born yet");
  }

  return (
    <div className='App'>
      <Card>
        <div className='input-group'>
          <Input
            label='Day'
            name='day'
            value={day}
            onChange={(event) => {
              setDay(event.target.value);
            }}
            min={1}
            max={31}
            warning={(day > 31 || day < 1) && "Invalid day"}
          />
          <Input
            label='month'
            name='month'
            value={month}
            onChange={(event) => {
              setMonth(event.target.value);
            }}
            min={1}
            max={12}
            warning={(month > 12 || month < 1) && "Invalid month"}
          />
          <Input
            label='year'
            name='year'
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
            }}
            warning={year > today.getFullYear() && "Invalid year"}
          />
        </div>
        <hr />
        <div>
          <Result unit='years' amount={age.years} />
          <Result unit='months' amount={age.months} />
          <Result unit='days' amount={age.days} />
        </div>
      </Card>
    </div>
  );
}

export default App;
