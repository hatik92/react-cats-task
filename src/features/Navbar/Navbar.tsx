import React, { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import './navbar.module.sass'
import styles from './navbar.module.sass'

const Navbar: React.FC<any> = () => {
  const loc = useLocation()
  const [isShow, setIsShow] = useState(true);
  return (<>
      <p onClick={() => setIsShow(!isShow)}>X</p>
    {isShow && <nav>
      <ul>
        <li>
          <Link to="/" className={loc.pathname === '/' ? styles.active : ''}>Home</Link>
        </li>
        <li>
          <Link to="/posts" className={loc.pathname === '/posts' ? styles.active : ''}>Posts</Link>
        </li>
        <li>
          <Link to="/users" className={loc.pathname === '/users' ? styles.active : ''}>Users</Link>
        </li>
      </ul>
    </nav>}
    <div className={styles.pagesSection}>
      <Outlet />
    </div>
  </>)
}


export default Navbar