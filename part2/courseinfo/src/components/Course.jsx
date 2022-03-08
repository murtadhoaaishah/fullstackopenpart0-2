import Header from "./Header"
import Content from "./Content"
import Total from "./Total"


const Course = ({ course }) => {
    const [course1, course2] = course



    return (
        <div>
            <h1>Web develpoment curriculum</h1>
            <Header name={course1.name} />
            <Content parts={course1.parts} />
            <Total parts={course1.parts} />
            <Header name={course2.name} />
            <Content parts={course2.parts} />
            <Total parts={course2.parts} />
        </div>
    )
}
export default Course