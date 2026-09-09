import { Link } from 'react-router';

export default function Menu() {
return (
    <nav>
    <Link to="/">Início</Link>
    <Link to="/Produtos">Produtos</Link>
    <Link to="/Editar-produtos">Editar Produtos</Link>
    </nav>
);
}