export default function CardGroup(props) {

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="cardHeading">{props.title}</h5>
        <h6 className="cardSub">Total Questions: {props.total}</h6>
        <h6 className="cardSub">Attempted: </h6>
        <a href="#about"><button type="submit" className="cardBtn">Start Now</button></a>
      </div>
    </div>
  );
}
