const Button = (props) => {
  const { color, name } = props;
  return <button className={color}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Social Buttons</h1>
    <div>
      <Button color="yellow" name="Like" />
      <Button color="white" name="Comment" />
      <Button color="blue" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
