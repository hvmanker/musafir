import "../css/cards.css";
export const Card = ({ title, link, btn }) => {
  return (
    <div className="card">
      <img src={link} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href="#" className="btn btn-primary">
          {btn}
        </a>
      </div>
    </div>
  );
};
export default Card;
