import About from "./components/about.jsx";


function App (){
    const students = [
        {name: 'Juan', age: 20, id:1},
        {name: 'Pedro', age: 21, id:2},
        {name: 'Maria', age: 22, id:3}
    ]

    function addStudent(){
        console.log('add student')
    }

    let list  = students.map(student => {
        return <li key={student.id}>{student.name}</li>
    })
    return(
        <>
            {list}
            <About addStudent={addStudent}/>
        </>
    )

}
export default App