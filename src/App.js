import Card from "./components/card/card";
import Input from "./components/input/input";
import Result from "./components/result/result";
import { useState } from "react";

function App() {
  const today = new Date();
  const [day, setDay] = useState(today.getDate());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  const birthDate = new Date(year, month - 1, day);

  return (
    <div className='App'>
      <Card>
        <div className='input-group'>
          <Input
            label='Day'
            value={day}
            onChange={(event) => {
              setDay(event.target.value);
            }}
            min={1}
            max={31}
            warning='Invalid day'
          />
          <Input
            label='month'
            value={month}
            onChange={(event) => {
              setMonth(event.target.value);
            }}
            min={1}
            max={12}
            // warning='Invalid month'
          />
          <Input
            label='year'
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
            }}
            warning=''
          />
        </div>
        <hr />
        <div>
          <Result unit='years' amount={0} />
          <Result unit='months' amount={0} />
          <Result unit='days' amount={0} />
        </div>
      </Card>
    </div>
  );
}

export default App;
