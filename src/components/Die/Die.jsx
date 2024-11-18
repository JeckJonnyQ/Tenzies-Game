import "./Die.scss";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <div className="die-block" style={styles} onClick={props.holdDice}>
      <h2 className="die-block__num">{props.value}</h2>
    </div>
  );
}
