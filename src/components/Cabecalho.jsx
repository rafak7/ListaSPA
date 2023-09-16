import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
        <Link to='/'>Home</Link>
        <Link to='/produtos'> Produtos </Link>
    </header>
  )
}
