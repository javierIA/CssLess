import {Link, NavLink} from 'react-router-dom'
export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"  
            className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink >
      
        </li>
        <li>
          <Link 
            to="/admin"
            className={({ isActive }) => (isActive ? "active" : "")}>
            UserAdmin
          </Link >
        </li>
        <li>
          <Link
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}>
            Products
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

            to="/test" 
            className={({ isActive }) => (isActive ? "active" : "")}>
            Test
          </Link >
        </li>
      </ul>
    </div>
  );
}
