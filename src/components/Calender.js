// src/components/Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Calendar</h2>
      <div style={styles.calendarContainer}>
        <Calendar onChange={handleDateChange} value={date} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginTop: '50px',
  },
  heading: {
    marginBottom: '20px',
  },
  calendarContainer: {
    marginTop: '20px',
  },
};

export default CalendarPage;
