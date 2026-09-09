import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import ObservadorDeRota from "./components/ObservadorDeRota/ObservadorDeRota";

export default function App() {
  return (
    <div>
      <ObservadorDeRota/>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  )
}
