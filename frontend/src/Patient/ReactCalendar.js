import React, { useState } from "react";
import Calendar from "react-calendar";

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };
  var pervious= new Date()
  pervious.setDate(pervious.getDate()-1)

  
  return (
    <div>
      <Calendar 
      tileDisabled={({ date}) =>date.getDay()===0 || date < pervious }
    

      onChange={onChange} value={date} />
      {console.log(date)}
      {date.toString()}
    </div>
  );
};

export default ReactCalendar