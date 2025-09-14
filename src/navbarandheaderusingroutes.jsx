import { Link } from 'react-router-dom';
import './header.css'
export default function Navbar() {
  return (
    <div className="header">
      <div>
        <Link to="/" className="link">
          <h2>logo</h2>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/" className="link">
              <h2>home</h2>
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              <h2>about</h2>
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              <h2>login</h2>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


/*import { Link } from 'react-router-dom';
export default function Navbar(){
    return(
        <div className="header">
            <div>
                <Link to="/" className="link"><h2>logo</h2></Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link className="link"><h2>home</h2></Link>
                    </li>
                    <li>
                        <Link className="link"><h2>about</h2></Link>
                    </li>
                    <li>
                        <Link className="link"><h2>login</h2></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}*/