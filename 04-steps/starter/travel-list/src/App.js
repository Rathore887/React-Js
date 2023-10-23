import "./index.css";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🎍 Far Away 🎢</h1>;
}

function Form() {
  const [description, setdescription] = useState("");
  const [selectval, setselectval] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, selectval, packed: false, id: Date.now() };

    setdescription("");
    setselectval(1);
  }

  return (
    <form className="add-form" submit={handleSubmit}>
      <h3>What do you need for your 😍 trip ? </h3>
      <select
        value={selectval}
        onChange={(e) => setselectval(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item(props) {
  return (
    <li>
      <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
        {props.item.quantity} {props.item.description}{" "}
      </span>
      <button>⚡&times;</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>👜 You have X items on your list, and you already Packed X (X%)</em>
    </footer>
  );
}
