function Total(props) {
  console.log(props.execises1)
  return (
    <div>
      Total Exercises: {props.execises1 + props.execises2 + props.execises3}
    </div>
  )
}
export default Total
