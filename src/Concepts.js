import Todo from "./Todo";
function Concepts(props) {

  return (
    <ul id="concepts">
      <Todo title={props.concepts[0].title} image={props.concepts[0].image} desc={props.concepts[0].description}></Todo>
      <Todo title={props.concepts[1].title} image={props.concepts[1].image} desc={props.concepts[1].description}></Todo>
      <Todo title={props.concepts[2].title} image={props.concepts[2].image} desc={props.concepts[2].description}></Todo>
    </ul>
  );
}
export default Concepts;
