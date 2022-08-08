import pizza from "./images/pizza.jpg";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [box, setBox] = useState(false);
  const [quant, setQuant] = useState("");
  const [msg, setMsg] = useState("none");
  const [checked, setChecked] = useState(false);

  const [all, setall] = useState([]);
  function handle(e) {
    e.preventDefault();
    alert(checked);

    let res = [
      `order for ${quant} ${size} pizzas for ${name} messsage is: ${msg} `
    ];

    if (checked) {
      res = [...res, `and add pepperoni`];
    }
    if (box) {
      res = [...res, `add gulten free`];
    }

    setall(res);
  }

  return (
    <>
      <h1>Build Your Pizza</h1>
      <img src={pizza} alt="pizza"></img>
      <form id="form">
        <label htmlFor="Name">Name :</label>{" "}
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="Size">Size :</label>
        <select onChange={(e) => setSize(e.target.value)} id="size">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <br />
        <label htmlFor="Pepperoni">Pepperoni</label>{" "}
        <input
          type="checkbox"
          id="Pepper"
          value="Pepperoni"
          onChange={(e) => setChecked(true)}
        />
        <br />
        <label htmlFor="Gluten-Free">Gluten Free</label>{" "}
        <input
          type="checkbox"
          id="Gluten"
          value="Gluten-Free"
          onChange={(e) => {
            setBox(true);
          }}
        />
        <br />
        <label htmlFor="Quantity">Quantity :</label>{" "}
        <input
          type="number"
          id="quanti"
          onChange={(e) => setQuant(e.target.value)}
        />
        <br />
        <label htmlFor="instructions">Aditional Instructions</label>
        <br />
        <textarea
          id="adiStr"
          cols="50"
          rows="10"
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <br />
        <button type="submit" onClick={handle}>
          Submit
        </button>
      </form>
      <p>{all}</p>
    </>
  );
}
