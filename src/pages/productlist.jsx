import { getDocs, collection, query, where } from "firebase/firestore";
import Sidebar from "../components/sidebar.jsx";
import { dataBase } from "../firebase.js";
import { useEffect, useState } from "react";
import "../styles/product.css";
import { GiHamburgerMenu } from "react-icons/gi";

let ProductList = () => {
  let [productList, setproductList] = useState([]);

  let fetchProducts = async () => {
    let userId = localStorage.getItem("userId");
    let collectionRef = collection(dataBase, "products");
    let runQ = query(collectionRef, where("userId", "==", userId));

    let loadData = await getDocs(runQ);
    let documents = loadData.docs.map((val) => ({ id: val.id, ...val.data() }));
    setproductList(documents);
    console.log(documents);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      <Sidebar activa={2} />
      <div className="product-list">
        <div className="list-header">
          <p>Name</p>
          <p>Type</p>
          <p>Categry</p>
          <p>Quantity</p>
          <p>Status</p>
          <p className="action-button">Action</p>
        </div>
        <div className="item-wrapper">
          {productList.map((val, index) => {
            return (
              
                <div key={val.id} className="item">
                  <p>{val.name}</p>
                  <p> {val.categry}</p>
                  <p>{val.status}</p>
                  <p> {val.type}</p>
                  <p> {val.quantity}</p>
          <p className="action-button"> <GiHamburgerMenu /></p>

                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
