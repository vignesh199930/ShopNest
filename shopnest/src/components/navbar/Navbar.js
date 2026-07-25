import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Navbar({ cart, wishlist, search, setSearch }) {

  const isLoggedIn = localStorage.getItem("isLoggedIn")
  const navigate = useNavigate();
  const handleLogout =() =>{
    localStorage.removeItem("isLoggedIn");
    navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          ShopNest
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

          </ul>

          <form className="d-flex me-auto" style={{marginLeft: "90PX", width: "350px"}}>
            <input
            className="form-control"
              type="text"
              value={search}
              onChange={(e)=> {
                setSearch(e.target.value);
                navigate('/');
              }}
              placeholder="Search for Mobiles, Laptops, shoes...🔍"
             />
             
          </form>

          <ul className="navbar-nav">

            <li className="nav-item">

              <NavLink className="nav-link" to='/profile'>
                Profile
              </NavLink>
            </li>

           <NavLink className='nav-link'
           to='/cart'>
            🛒 Cart({cart.length})
           </NavLink>

            <li className="nav-item">
              <NavLink className='nav-link'
              to='/wishlist'>
                 ❤️Wishlist
                 ({wishlist.length})
              </NavLink>
            </li>

            <NavLink className='nav-link'
            to='/orders'>
              Orders
            </NavLink>

         


            {!isLoggedIn ? (
        <li className="nav-item ">
        <Link className="nav-link " to="/login">
         Login
         </Link>
        </li>
      ) : (
     <li className="nav-item">
      <button
       className="btn btn-danger btn-sm ms-2 mt-2"
      onClick={handleLogout}
       >
      Logout
        </button>
       </li>
       )}

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;