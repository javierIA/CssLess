import {Link, NavLink} from 'react-router-dom'
export default function NavBar() {
  return (
    <div>
       <ul style={{display: 'flex', justifyContent: 'space-between',width:"100%"}}>
        <li>
          <NavLink
            to="/"  
            className={({ isActive }) => (isActive ? "active" : "")}>
            Inicio
          </NavLink >
      
        </li>
        <li>
          <Link 
            to="/admin"
            className={({ isActive }) => (isActive ? "active" : "")}>
            Administrador
          </Link >
        </li>
        <li>
          <Link
            to="/admin/products"
            className={({ isActive }) => (isActive ? "active" : "")}>
            Productos
          </Link >
        </li>
        <li>
          <Link

            to="/tickets" 
            className={({ isActive }) => (isActive ? "active" : "")}>
            Tickets
          </Link >
        </li>
        <li>
          <Link

            to="/rejections" 
            className={({ isActive }) => (isActive ? "active" : "")}>
            Razones de rechazo
          </Link >
        </li>
           <li>
          <Link

            to="/test" 
            className={({ isActive }) => (isActive ? "active" : "")}>
            Test
          </Link >

        </li>
        <li>
          <Link

            to="/admin/clients" 
            className={({ isActive }) => (isActive ? "active" : "")}>
            Clientes
          </Link >
          
        </li>
        <li>
          <Link

            to="/admin/rejection_causes" 
            className={({ isActive }) => (isActive ? "active" : "")}>
            Rechazos
          </Link >
          
        </li>
      </ul>
     
    </div>
  );
}
