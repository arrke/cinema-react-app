import { Link, useNavigate, Navigate} from "react-router-dom";
import '../stylesheets/NavComponent.scss'
export function NavComponent({user, signOut}) {
  let navigate = useNavigate();
  function logout(){
    signOut()
    navigate('/')
  }
  return (
    <div className="NavComponent">
      <Link to="/" className="NavComponent__home-link"><h1 className="NavComponent__home">Cinema</h1></Link>
      <nav>
        <Link className="NavComponent__elem" to="/about">About</Link>
      </nav>
      {user.email === undefined?
      <Link className="NavComponent__elem NavComponent__elem-login" to="/sign-in">Login</Link>:
      <a href="/" className="NavComponent__elem NavComponent__elem-login" onClick={logout}>Sign out</a>}
    </div>
  );
}
