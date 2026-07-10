import { useState, useEffect } from "react";

function Header() {
    return <h1>Placement Portal</h1>;
}

function Student({ student }) {
    return (
        <div>
            <h2>{student.name}</h2>
            <p>Branch : {student.branch}</p>
            <p>CGPA : {student.cgpa}</p>
        </div>
    );
}

function Footer() {
    return <h3>Made by Rohan</h3>;
}

function App() {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/students")
            .then((response) => response.json())
            .then((data) => {
                setStudents(data);
            });

    }, []);

    return (

        <div>

            <Header />

            {
                students.map((student) => (
                    <Student
                        key={student.id}
                        student={student}
                    />
                ))
            }

            <Footer />

        </div>

    );
}

export default App;