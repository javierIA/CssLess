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

       
      </ul>
    </div>
  );
}
