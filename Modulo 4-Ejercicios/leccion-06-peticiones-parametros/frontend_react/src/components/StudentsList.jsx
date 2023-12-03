import StudentItem from "./StudentItem";

function StudentList({ studentsList }) {
  if (studentsList === undefined) {
    return (
      <div>
        <p>Leyendo información</p>
        <div className="loading mt-1 ml-1"></div>
      </div>
    );
  }

  if (studentsList.length === 0) {
    return (
      <div>
        <p>No hay alumnas</p>
      </div>
    );
  }

  const html = studentsList.map((student) => (
    <li key={student.id} className="card">
      <StudentItem student={student} />
    </li>
  ));

  return <ul className="cards">{html}</ul>;
}

export default StudentList;
