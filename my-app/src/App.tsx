import { Outlet } from "react-router";
import Cabecalho from "./components/Cabacalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape"




export default function App() {
  return (
    <div>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  )
}