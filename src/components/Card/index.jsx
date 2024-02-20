import "./index.css";

function Card(props) {
  return (
    <div className="card" onClick={() => {props.clicked(props.data)}}>
      <img src={props.data.thumbnail} alt="phone image" />

      <div className="card-about">
        <h2 className="brand">{props.data.brand}</h2>
        <p>
          <b>Nomi:</b> {props.data.title}
        </p>
        <p>
          <b>Narxi:</b> {props.data.price}$
        </p>
        <p>
          <b>Ma'lumoti:</b> {props.data.description}
        </p>
      </div>
    </div>
  );
}

export default Card;