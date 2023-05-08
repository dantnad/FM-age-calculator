import Button from "./components/button/button";
import Card from "./components/card/card";
import Form from "./components/form/form";
import Input from "./components/input/input";
import Result from "./components/result/result";
import { useState } from "react";

function App() {
  // Initial setup for the date input & warnings
  const today = new Date();
  const [day, setDay] = useState(today.getDate());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  const [{ years, months, days }, setAge] = useState({
    years: "--",
    months: "--",
    days: "--",
  });
  const [warning, setWarning] = useState("");

  // Validate the days of the month
  const validateDays = (day, month, year) => {
    const daysWith31 = [1, 3, 5, 7, 8, 10, 12];
    const daysWith30 = [4, 6, 9, 11];
    const isLeapYear = (year) => {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };

    if (daysWith31.includes(Number(month))) {
      return day <= 31 && day > 0;
    } else if (daysWith30.includes(Number(month))) {
      return day <= 30 && day > 0;
    } else if (Number(month) === 2) {
      return isLeapYear(year) ? day <= 29 && day > 0 : day <= 28 && day > 0;
    }
    return false;
  };

  // Calculate the age of the user and set the state
  const calculateAge = () => {
    const birthDate = new Date(year, month - 1, day);
    const ageinms = () =>
      today.getTime() - birthDate.getTime() < 0
        ? 0
        : today.getTime() - birthDate.getTime();
    setAge({
      years: Math.floor(ageinms() / (1000 * 60 * 60 * 24 * 365)),
      months: Math.floor(((ageinms() / (1000 * 60 * 60 * 24)) % 365) / 30),
      days: Math.floor(((ageinms() / (1000 * 60 * 60 * 24)) % 365) % 30),
    });
  };

  // Calculate the age of the user when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateDays(day, month, year)) {
      setWarning("");
      calculateAge();
    } else {
      setWarning("Invalid date");
      return;
    }
  };

  return (
    <div className='App'>
      <Card>
        <div className='input-group'>
          <Form onSubmit={handleSubmit} warning={warning}>
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
          </Form>
        </div>
        <Button onClick={handleSubmit}>⇣</Button>
        <div>
          <Result unit='years' amount={years} />
          <Result unit='months' amount={months} />
          <Result unit='days' amount={days} />
        </div>
      </Card>
    </div>
  );
}

export default App;
