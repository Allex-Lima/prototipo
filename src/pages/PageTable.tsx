import Table from "../components/table/Table";
import datasProducts from "../database/data.json";
import NewSideBar from "../components/Sidebar/index";
const PageTable = () => {
  return (
    <div>
      <NewSideBar />
      <Table produtos={datasProducts.produtos} />
    </div>
  );
};

export default PageTable;
