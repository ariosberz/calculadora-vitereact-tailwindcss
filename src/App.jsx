import Calculadora from "./components/Calculadora";
import Titulo from "./components/Titulo";

function App() {


  return (
    //Contenedor de toda la página
    <div className="
    min-w-screen min-h-screen
    bg-gradient-to-r from-indigo-300 to-cyan-100
    ">
      <Titulo />
      <div className="py-10 w-screen h-max flex flex-col items-center ">
        <Calculadora />  
      </div>  
    </div>
  );
};

export default App
