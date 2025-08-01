import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate


function AllEmployees() {
  const [result, setResult] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  // Your fetchAllEmployees function remains the same
  const fetchAllEmployees = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/employee/all");
      setResult(response.data.result);
    } catch (e) {
      console.log(e);
    }
  };

  // Your deleteRecord function remains the same
  const deleteRecord = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/employee/delete/${id}`);
      fetchAllEmployees();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAllEmployees();
  }, []);

  // New function to handle actions after password check
  const handleAction = (action, id) => {
    const adminPassword = "1234";
    const userInput = window.prompt("To proceed, please enter the admin password:");

    // If user clicks "Cancel", userInput will be null
    if (userInput === null) {
      return;
    }

    if (userInput === adminPassword) {
      if (action === "edit") {
        navigate(`/editemployee/${id}`); // Navigate to edit page
      } else if (action === "delete") {
        if (window.confirm("Are you sure you want to delete this record?")) {
          deleteRecord(id);
        }
      }
    } else {
      alert("Incorrect password. Action denied.");
    }
  };

  return (
    <>
      <h2 align="center" style={{ position: "relative", top: "30px" }}>
        All Employees
      </h2>
      <table border={1} align="center" cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Designation</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {result.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.email}</td>
              <td>{row.contact}</td>
              <td>{row.designation}</td>
              <td>
                {/* Changed to a button to call handleAction */}
                <input
                  type="button"
                  value="Edit"
                  onClick={() => handleAction("edit", row._id)}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="Delete"
                  onClick={() => handleAction("delete", row._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AllEmployees;