import './table.css';

interface Product {
  id: number;
  nome: string;
  preco: number;
  quantidade_vendida: number;
}

interface TableProps {
  produtos: Product[];
}

const Table: React.FC<TableProps> = ({ produtos }) => {

  return (
    <div className='table'>
      <h3 className='h3'>Tabela de Produtos</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>PREÇO</th>
            <th>QUANTIDADE VENDIDA</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>{produto.quantidade_vendida}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}

export default Table;