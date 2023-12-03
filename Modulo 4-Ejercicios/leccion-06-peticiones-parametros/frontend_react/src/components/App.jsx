// Fichero src/component/App.js
import "../styles/App.scss";
import { useState, useEffect } from "react";
import StudentsList from "./StudentsList";
import StudentCreate from "./StudentCreate";
import Filters from "./Filters";

const App = () => {
  const emptyStudent = {
    nombre: "",
    apellidos: "",
    edad: "",
    correo_electronico: "",
  };

  const [studentsList, setStudentsList] = useState([]);
  const [filterAge, setFilterAge] = useState("");
  const [newStudent, setNewStudent] = useState(emptyStudent);

  useEffect(() => {
    fetch("http://localhost:3000/api/alumnas")
      .then((response) => response.json())
      .then((data) => {
        setStudentsList(data);
      });
  }, []);

  const handleChangeFilter = async (value) => {
    setFilterAge(value);

    // Aqui vamos hacer un filtro con DB
  };

  const handleChangeNewStudentField = (propName, propValue) => {
    setNewStudent({ ...newStudent, [propName]: propValue });
  };

  const handleSubmitNewStudent = async () => {
    // Aqui vamos hacer el fetch para creaer una nueva alumna
    fetch("http://localhost:3001/api/alumnas/add", {method: "POST",
    body: JSON.stringify(newStudent), 
    headers: {'Content-Type': 'application}',
    },
  })
    .then((response) => response.json())  
    .then ((data) => {
      console.log(data);
      if(data.success){
        setStudentsList([...studentsList, newStudent]);
        setNewStudent(emptyStudent);
      }
    });

  const handleCancelNewStudent = () => {
    setNewStudent(emptyStudent);
  };

  return (
    <div className="page">
      <header>
        <h1>Alumnas</h1>
      </header>
      <main className="mt-1">
        <StudentsList studentsList={studentsList}></StudentsList>
        <Filters filterAge={filterAge} onChange={handleChangeFilter} />
        <StudentCreate
          student={newStudent}
          onChange={handleChangeNewStudentField}
          onSubmit={handleSubmitNewStudent}
          onCancel={handleCancelNewStudent}
        />
      </main>
    </div>
  );
};
}
export default App;
