import './Card.css';

function Card(props) {

  return (
    <div>
      <div class="card">
        <div class="container">
          <div className="foto">
            <img src={props.file} alt="" />
          </div>
          <h2><b>{props.name}</b></h2>
          <p>{props.phone}</p>
          <p>{props.email}</p>
          <p>{props.adress}</p>
          <p>{props.job}</p>

        </div>
      </div>
    </div>
  )
}

export default Card;