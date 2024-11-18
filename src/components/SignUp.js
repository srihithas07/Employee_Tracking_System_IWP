// import React, { useState } from "react";
// import "./styles.css";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function SignUp() {
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   //   any function helps me to access class component properties -> hook
//   let handleSubmit = (event) => {
//     let obj = { name, email, password };
//     const url = "http://localhost:5050/employee/create-employee";
//     axios
//       .post(url, obj)
//       .then((res) => {
//         if (res.status === 200) {
//           alert("Employee added sucessfully");
//         } else {
//           alert("error");
//           Promise.reject();
//         }
//       })
//       .catch((err) => {
//         alert(err);
//       });
//     event.preventDefault();
//   };
//   return (

//     <div style={styles.container}>
//       <h2 style={styles.heading}>Sign Up</h2>
//       <form style={styles.form} onSubmit={handleSubmit}>
//       <label style={styles.label} for="name">Name</label>
//       <input style={styles.input} required type="text" id="name" onChange={(e) => setName(e.target.value)} />
//       <label style={styles.label} for="email">Email</label>
//       <input
//         id="email"
//         style={styles.input}
//         required
//         type="email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <label style={styles.label} for="pwd">Password</label>
//       <input
//         type="password"
//         style={styles.input}
//         required
//         id="pwd"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit" style={styles.button}>Sign Up</button>
//     </form>
//     </div>
//   );
// }


// const styles = {
//   container: {
//     maxWidth: '400px',
//     margin: 'auto',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     marginTop: '50px',
//   },
//   heading: {
//     marginBottom: '20px',
//     margin: "auto",
//     paddingLeft: "120px",
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   label: {
//     marginBottom: '8px',
//   },
//   input: {
//     padding: '10px',
//     marginBottom: '15px',
//   },
//   button: {
//     padding: '10px',
//     backgroundColor: '#28a745',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };

// export default SignUp;



import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const obj = {
      name,
      email,
      password,
      intime: new Date(), // Set intime to the current time
      outtime: new Date(), // Set outtime to null initially
      timespent: 0, // Set timespent to 0 initially
    };

    const url = "https://backend-okqc.onrender.com/employee/create-employee";

    axios.post(url, obj)
      .then((res) => {
        if (res.status === 200) {
          alert("Employee added successfully");
        } else {
          alert("Error");
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign Up</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label} htmlFor="name">Name</label>
        <input
          style={styles.input}
          required
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label style={styles.label} htmlFor="email">Email</label>
        <input
          id="email"
          style={styles.input}
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label style={styles.label} htmlFor="pwd">Password</label>
        <input
          type="password"
          style={styles.input}
          required
          id="pwd"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
      <p style={styles.signInLink}>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginTop: '50px',
  },
  heading: {
    marginBottom: '20px',
    margin: "auto",
    paddingLeft: "120px",
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default SignUp;
