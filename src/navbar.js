const { Link, NavLink } = ReactRouterDOM;

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
      <Link className="navbar-brand" to="/">
        BadBank
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav m1-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/createaccount" data-toggle="tooltip" title="Create a New Account">
              Create Account
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/deposit" data-toggle="tooltip" title="Deposit Money">
              Deposit
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/withdraw" data-toggle="tooltip" title="Withdraw Money">
              Withdraw
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/all-data" data-toggle="tooltip" title="Show All Users Data">
              All Data
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login" data-toggle="tooltip" title="Login to Existing Account">
              Login
            </NavLink>
          </li>
        
          
        </ul>
      </div>
    </nav>
  );
}
