function Card({ id, cover, title }) {
  return (
    <li id={id} className="card">
      <img src={cover} alt={cover} />
      <p>{title}</p>
      <div className="gradient"></div>
    </li>
  );
}

export default Card;
