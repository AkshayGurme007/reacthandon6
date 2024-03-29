import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./style.css";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Data } from "./Studentdata";

function Update() {
  const [student, setStudent] = useContext(Data);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");

  useEffect(() => {
    student.forEach((element) => {
      if (element.Id === id) {
        setName(element.Name);
        setAge(element.Age);
        setCourse(element.Course);
        setBatch(element.Batch);
      }
    });
  }, [id, student]);

  const submit = () => {
    setStudent((previousV) =>
      previousV.map((data) =>
        data.Id === id
          ? {
              Id: id,
              Name: name,
              Age: age,
              Batch: batch,
              Course: course,
            }
          : data
      )
    );
  };

  return (
    <>
      <Box
        className="container"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "60ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          id="outlined-name"
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <TextField
          id="outlined-name"
          label="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <TextField
          id="outlined-name"
          label="Batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />
      </Box>
      <button className="button1">
        <Link to="/student" className="new">
          {" "}
          cancel{" "}
        </Link>
      </button>
      <button className="button2" onClick={submit}>
        <Link to="/student" className="new">
          {" "}
          update{" "}
        </Link>
      </button>
    </>
  );
}

export default Update;
