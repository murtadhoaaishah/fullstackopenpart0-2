function Total({ course }) {

  const { name, parts } = course

  const [part1, part2, part3] = parts

  return (
    <div>
      Total Exercises: {part1.exercises + part2.exercises + part3.exercises}
    </div>
  )
}
export default Total
