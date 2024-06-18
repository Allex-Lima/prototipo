import Table from '../components/table/Table';
import datasProducts from '../database/data.json';

const PageTable = () => {
  return (
    <div>
     <Table produtos={datasProducts.produtos}/>
    </div>
  )
}

export default PageTable