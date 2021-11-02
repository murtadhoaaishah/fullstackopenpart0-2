import Header from "./Header"
import Content from "./Content"
import Total from "./Total"


const Course = ({ courses }) => {

    return (
        <div>
            <h1>Web development curriculum</h1>
            <Header head1={courses[0].name} />
            <Content parts={courses[0].parts} />
            <Total parts={courses[0].parts} />
            <Header head2={courses[1].name} />
            <Content parts={courses[1].parts} />
            <Total parts={courses[1].parts} />
        </div>
    )
}
export default Course