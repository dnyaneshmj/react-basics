import Card from "./Card";
function Todo(props) {
    const title = props.title;
    const image = props.image;
    const desc = props.desc;
  return (
    <Card className="concept">
      <img src={image} alt="TODO: TITLE" />
      <h2>{title}</h2>
      <p>{desc}</p>
    </Card>
  );
}
export default Todo;
