import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { SelectButton } from "primereact/selectbutton";
import { useEffect, useState } from "react";
import { ProductService } from "./produtosSevice";

export function Dashboard() {
  const [products, setProducts] = useState([]);
  const [sizeOptions] = useState([
    { label: "Small", value: "small" },
    { label: "Normal", value: "normal" },
    { label: "Large", value: "large" },
  ]);
  const [size, setSize] = useState(sizeOptions[1].value);

  useEffect(() => {
    ProductService.getProductsMini().then((data: any) => setProducts(data));
  }, []);

  return (
    <>
      <DataTable
        value={products}
        size={"large"}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </>
  );
}
