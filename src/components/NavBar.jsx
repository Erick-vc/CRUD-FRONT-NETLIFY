import { Link } from "react-router-dom";

function NavBar() {

let ubicacionPrincipal = window.pageYOffset; //0


  window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //100
    if(ubicacionPrincipal>=desplazamientoActual) { // 0 > 100
        document.getElementsByTagName("nav")[0].style.top="0px";
    } else {
        document.getElementsByTagName("nav")[0].style.top="-100px";
    }
    ubicacionPrincipal=desplazamientoActual; //100
})



  return (
    <nav className="bg-neutral-800 flex h-16 fixed w-full 
    items-center justify-center sm:justify-between sm:px-20
    py-4" style={{
    transition: 'ease-in-out 0.5s'

    }}>
      <Link to='/' className="text-white font-bold hidden sm:flex">
      <h1>Vite - MySQL</h1>
      </Link>
      <ul className="flex gap-x-3 flex-wrap">
        <li>
          <Link to="/" className="bg-slate-200 px-2 py-1">Home</Link>
        </li>
        <li className="">
          <Link to="/new" className="bg-teal-200 w-48 px-2 py-1">Create clients</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
