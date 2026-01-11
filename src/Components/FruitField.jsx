// import coconutImage from "./../../public/images/Cocunut.jpg";
function FruitField(props) {
  console.log(props);

  return (
    <>
      <main>
        <div className="fruitImageContainer">
          <img src={props.image} alt="coconut" className="fruitImage" />
        </div>
        <div className="fruitInfo">
          <h3>{props.name}</h3>
          <p>{props.details}</p>
        </div>
      </main>
    </>
  );
}
export default FruitField;
