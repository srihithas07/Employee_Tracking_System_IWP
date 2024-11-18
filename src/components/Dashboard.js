import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [elapsedTime, setElapsedTime] = useState(0);
  const [stopwatchRunning, setStopwatchRunning] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showActivities, setShowActivities] = useState(true);
  const [newTask, setNewTask] = useState("");
  const [availableActivities, setAvailableActivities] = useState(["Punch Into Work"]);

  useEffect(() => {
    let intervalId;

    const startStopwatch = () => {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    };

    if (stopwatchRunning) {
      startStopwatch();
    } else {
      clearInterval(intervalId); // Clear interval when stopwatch is stopped
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [stopwatchRunning]);

  const handleToggleStopwatch = () => {
    setStopwatchRunning((prev) => !prev);
  };

  const handleRecordOuttime = async () => {
    try {
      // Stop the stopwatch
      setStopwatchRunning(false);

      // Send the elapsed time to the server and update the user's timespent
      await axios.put(`https://backend-okqc.onrender.com//dashboard/${id}/update-timespent`, {
        timespent: elapsedTime,
      });

      // Optionally, you can fetch and update the timespent from the server if needed
      // const response = await axios.get(`http://localhost:5050/dashboard/${id}`);
      // setTimespent(response.data.timespent);

      // Reset elapsed time
      setElapsedTime(0);
    } catch (error) {
      console.error("Error recording outtime:", error);
    }
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedActivities, setSelectedActivities] = useState([]);

  const handleCheckboxChange = (activity) => {
    const updatedSelection = [...selectedActivities];
    const index = updatedSelection.indexOf(activity);

    if (index !== -1) {
      updatedSelection.splice(index, 1);
    } else {
      updatedSelection.push(activity);
    }

    setSelectedActivities(updatedSelection);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleToggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  const handleToggleActivities = () => {
    setShowActivities((prev) => !prev);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setAvailableActivities((prev) => [...prev, newTask.trim()]);
      setNewTask("");
    }
  };

  const handleChangePassword = () => {
    const confirmpasnOut = window.confirm("Are you sure you want to change ?");
    if (confirmpasnOut) {
      alert("Handling Password Change");
      // Perform any additional sign-out logic here

      // Redirect to the home page
      navigate("/passwordtt");
    }
  };

  const handleSignOut = () => {
    const confirmSignOut = window.confirm("Are you sure you want to sign out?");
    if (confirmSignOut) {
      alert("Signed out successfully!");
      // Perform any additional sign-out logic here

      // Redirect to the home page
      navigate("/");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <h2 style={styles.dash}>Dashboard</h2>

        <div style={styles.section}>
          <button style={styles.button} onClick={handleChangePassword}>
            Change Password
          </button>
          <button style={styles.button} onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
        {stopwatchRunning && (
          <p style={styles.elapsedTime}>Elapsed Time: {formatTime(elapsedTime)}</p>
        )}
        <div style={styles.section}>
          <button style={styles.button} onClick={handleToggleStopwatch}>
            {stopwatchRunning ? "Stop Stopwatch" : "Start Stopwatch"}
          </button>
          <br />
          <button style={styles.button} onClick={handleRecordOuttime}>
            Record Outtime
          </button>
        </div>

        <div style={styles.section}>
          <button style={styles.button} onClick={handleToggleCalendar}>
            Toggle Calendar
          </button>
          {showCalendar && <Calendar onChange={handleDateChange} value={selectedDate} />}
        </div>

        <div style={styles.section}>
          <button style={styles.button} onClick={handleToggleActivities}>
            Toggle Activities
          </button>
        </div>

        {showActivities && (
          <div style={styles.asection}>
            <h3>Available Activities</h3>
            <ul>
              {availableActivities.map((activity) => (
                <li key={activity}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedActivities.includes(activity)}
                      onChange={() => handleCheckboxChange(activity)}
                    />
                    {activity}
                  </label>
                </li>
              ))}
            </ul>
            <div>
              <input
                type="text"
                placeholder="New Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button style={styles.button} onClick={handleAddTask}>
                Add Task
              </button>
            </div>
          </div>
        )}
      </div>

      <div style={styles.rightSection}>
        {/* Notification Section */}
        <div style={styles.notification}>
          <h3>Notifications</h3>
          <p>HR Meeting in Lobby 5 at 4PM</p>
          <p>Business Meeting at 4PM (Lobby 3) </p>
          <p>Anti Drug Campaign Marathon on Sunday</p>
          {/* You can customize the content and add more elements as needed */}
        </div>

        {/* Events Section */}
        <div style={styles.events}>
          <h3>Events</h3>
          <p>Happy Diwali!!</p>
          <p>
            Upcoming Events-
            <br />
            Christmas
            <br />
            Hanukah{" "}
          </p>
          {/* You can customize the content and add more elements as needed */}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px",
    padding: "20px",
    marginBottom: "100px",
    paddingBottom: "50px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginTop: "50px",
    backgroundColor: "#b6bcd2",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/greyback.jpg)`,
    backgroundSize: "contain",
    border: "2px solid black",
  },
  leftSection: {
    flex: 1,
    marginRight: "20px",
    textAlign: "center",
  },
  rightSection: {
    flex: 1,
  },
  dash: {
    height: "150px",
    width: "100%",
    marginLeft: "250px",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2cm",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "cursive",
  },
  welcomeMessage: {
    fontSize: "1.2em",
    margin: "10px 0",
  },
  profilePic: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    objectFit: "cover",
    margin: "0 auto",
  },
  elapsedTime: {
    fontSize: "1.5em",
    backgroundColor: "white",
    width: "260px",
  },
  button: {
    padding: "15px",
    backgroundColor: "#007bff",
    color: "#fff",
    background: "orange",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    marginBottom: "10px",
    fontSize: "1em",
    textAlign: "left", // Align button text to the left
  },
  section: {
    marginBottom: "20px",
  },
  notification: {
    background: `url(${process.env.PUBLIC_URL}/images/time.jpg)`,
    backgroundSize: "auto",
    objectFit: "fill",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "10px",
    marginLeft: "auto",
    height: "300px",
    width: "300px",
    border: "1px solid black",
  },
  events: {
    background: `url(${process.env.PUBLIC_URL}/images/diwalis.jpg)`,
    backgroundSize: "auto",
    objectFit: "fill",
    padding: "20px",
    borderRadius: "8px",
    color: "#fff",
    marginLeft: "auto",
    height: "300px",
    width: "300px",
  },
  asection: {
    marginBottom: "20px",
    backgroundColor: "white",
    width: "280px",
    height: "auto",
  },
};

export default Dashboard;
