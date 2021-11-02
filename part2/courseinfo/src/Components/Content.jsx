import Part from "./Part"

const Content = ({ parts }) => {
  console.log(parts)

  const par = parts.map((part, i) => <Part key={i} {...part} />)
  return (
    <div>
      {par}
    </div>
  )
}
export default Content
