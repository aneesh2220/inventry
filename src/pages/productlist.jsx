import { getDocs, collection, query, where } from "firebase/firestore";
import Sidebar from "../components/sidebar.jsx";
import { dataBase } from "../firebase.js";
import { useEffect, useState } from "react";

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
    <div className="product-list">
      <Sidebar activa={2} />

      {productList.map((val, index) => (
        <div key={val.id}>
          <p>Name: {val.name}</p>
          <p>Category: {val.categry}</p>
          <p>Status: {val.status}</p>
          <p>Type: {val.type}</p>
          <p>Quantity: {val.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
