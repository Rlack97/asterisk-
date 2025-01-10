import Card from "./Card";

export default function Section(props) {
  return (
    <div id={`section ${props.index}`}>
      <h2>{props.title}</h2>
      <div>
        {props.cards.map((card, index) => (
          <Card name={card.name} description={card.description} />
        ))}
      </div>
    </div>
  );
}
