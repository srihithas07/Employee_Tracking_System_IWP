// import React, { useState } from "react";
// //import { Link } from "react-router-dom";
// import axios from "axios";
// function Login() {
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = () => {
//     const url = "http://localhost:5050/employee/login";
//     const obj = { name, email, password };
//     axios
//       .post(url, obj)
//       .then((res) => {
//         alert(res.data);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };
//   return (

//     <div style={styles.container}>
//       <h2 style={styles.heading}>Sign In</h2>
//       <form style={styles.form} onSubmit={handleSubmit}>

//       <label style={styles.label}>Name:</label>
//       <input style={styles.input} type="text" id="name" onChange={(e) => setName(e.target.value)} />
//       <label for="email">Email</label>
//       <input
//         id="email"
//         style={styles.input}
//         type="email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <label for="pwd">Password</label>
//       <input
//         type="password"
//         style={styles.input}
//         id="pwd"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit" style={styles.button}>Sign In</button>
//       </form>
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
//     paddingLeft: "130px"
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
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };


// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://backend-okqc.onrender.com/employee/login", {
        email,
        password,
      });

      alert(response.data.message);

      if (response.data.id && response.data.message === "Login successful") {
        // Navigate to the dashboard page with the employee ID
        navigate(`/dashboard/${response.data.id}`);
      }
    } catch (error) {
      alert("Error during login");
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign In</h2>
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          style={styles.input}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="pwd">Password:</label>
        <input
          type="password"
          style={styles.input}
          id="pwd"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={styles.button} onClick={handleSubmit}>
          Sign In
        </button>
      </form>
      <p style={styles.signUpLink}>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <p style={styles.signUpLink}>
        <Link to="/passwordchange">Forgot Your password? </Link>
      </p>
      <Link to="/admin" style={styles.adminLink}>
        Admin Login
      </Link>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginTop: "50px",
  },
  heading: {
    marginBottom: "20px",
    paddingLeft: "130px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Login;
