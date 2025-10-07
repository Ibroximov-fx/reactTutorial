function About (props){
let student = props.addStudent


    return(
        <>
        <h1>About</h1>
        <button onClick={student}>add student</button>
    </>
    )
}
export default About