
const Card = (props) => {
  return (
      <div className="card">
          <img src={props.img} alt="" />
          <h1>{props.name}</h1>
          <p>{props.bio}</p>
    </div>
  )
}

export default Card