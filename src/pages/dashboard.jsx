import itemData from "../data/items.js";
import Sidebar from "../components/sidebar.jsx";

let Dashboard = () => {
  console.log(itemData);

  return (
    <div className="dashboard">
      <Sidebar activa={0} />
    </div>
  );
};

export default Dashboard;
