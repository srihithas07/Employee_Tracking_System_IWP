// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ViewTableRow from "./ViewTableRow";
// function ViewTable() {
//   const [employees, setEmployees] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:5050/employee")
//       .then((res) => {
//         setEmployees(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   const TableData = () => {
//     console.log(employees);
//     return employees.map((res, i) => {
//       return <ViewTableRow obj={res} key={i} />;
//     });
//   };
//   return (
//     <div>
//       <table>
//         <thead>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Password</th>
//           <th>Action</th>
//         </thead>
//         <tbody>{TableData()}</tbody>
//       </table>
//     </div>
//   );
// }

// export default ViewTable;


// ViewTable.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewTableRow from "./ViewTableRow";

function ViewTable() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-okqc.onrender.com/employee")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const TableData = () => {
    console.log(employees);
    return employees.map((res, i) => {
      return <ViewTableRow obj={res} key={i} />;
    });
  };

  return (
    <div>
      <table style={styles.container}>
        <thead style={styles.container}>
          <tr style={styles.container}>
            <th style={styles.container}>Name</th>
            <th style={styles.container}>Email</th>
            <th style={styles.container}>Password</th>
            <th style={styles.container}>Time Spent (hours)</th>
            <th style={styles.container}>Action</th>
          </tr>
        </thead>
        <tbody style={styles.container} >{TableData()}</tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    border: "1px black solid",
    padding: "15px",
  },
};
export default ViewTable;
