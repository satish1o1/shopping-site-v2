import "./directory-item.styles.scss";

const DirectoyrItem = ({category}) => {
  const {title,imageUrl,id} = category
  return (
    <div key={id} className="category-container">
      <div className="background-image" style={{backgroundImage : `url(${imageUrl})`}} />
      <div className="category-body-container">
        <h2>{title.toUpperCase()}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default DirectoyrItem