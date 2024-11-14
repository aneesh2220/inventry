import { useState } from "react";
import "../styles/form.css";
import "../data/items.js";
import itemData from "../data/items.js";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/dropdown.jsx";
import Sidebar from "../components/sidebar.jsx";

let FormI = () => {
  let [name, setName] = useState("");
  let [quantity, setQuantity] = useState(0);

  let navigate = useNavigate();

  let handleClick = (e) => {
    e.preventDefault();

    itemData.push({ name: { name }, quantity: { quantity } });
    navigate("/dashboard");
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <div className="formI">
      <Sidebar activa={1}/>


      <form action="submit" onSubmit={handleClick}>
        <div className="form-Inbox">
          <p className="inbox-heading">Add Item </p>
          <div className="input-holder">
            <input
              type="text"
              id="item-name"
              placeholder="Name of the item"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              id="item-quantity"
              placeholder="Queantity of the item"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />

            <Dropdown options={options} />
          </div>

          <div className="add-btn">
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormI;
