import { FC, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addCategory, getCategories, selectCategories } from './SidebarSlice';
import cn from 'classnames'
import './sidebar.module.sass'
import s from './sidebar.module.sass'
// import styles from './sidebar.module.sass'

// interface Category {
//   id: number;
//   name: string;
// }

const Sidebar: FC<any> = () => {
  const dispatch = useAppDispatch()
  // const [categories, setCategories] = useState<Category[]>([]);
  const [categoryValue, setcategoryValue] = useState('');
  const [sidebarShow, setsidebarShow] = useState(false);
  const [categoriesShow, setcategoriesShow] = useState(false);
  const myCategories = useAppSelector(selectCategories)
  // const loc = useLocation()
  // const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);
  console.log(sidebarShow);

  const sidebarClasses = cn(
    s.sidebar,
    sidebarShow ? s.show : ''
  )
  const outletClasses = cn(
    s.outlet,
    sidebarShow ? s.show : ''
  )
  // const btnClasses = cn(
  //   s.btn,
  //   sidebarShow ? s.click : ''
  // )
  const btnClasses = cn(
    'fas fa-bars',
    sidebarShow ? s.click : ''
  )
  const categoriesClasses = cn(
    s.feat_show,
    categoriesShow ? s.show : ''
  )
  const spanClasses = cn(
    'fas fa-caret-down first',
    categoriesShow ? s.rotate : ''
  )
  const categoriesBtnClasses = cn(
    s.btn,
    categoriesShow ? s.click : ''
  )

  return (<>

    {/* <div className={btnClasses} onClick={() => setsidebarShow(!sidebarShow)}>
    </div> */}
    <nav className={sidebarClasses}>
      <div className={s.text}>
        Side Menu
        <span className={btnClasses} onClick={() => setsidebarShow(!sidebarShow)}></span>
      </div>
      {sidebarShow && <ul>
        <li>
          <NavLink
          to="/"
          className={({ isActive }) => isActive ? s.activeLink : ''}
          onClick={() => {categoriesShow && setcategoriesShow(!categoriesShow)}}
          >Home</NavLink>
        </li>
        <li>
          <NavLink
            to="/category"
            className={({ isActive }) => isActive ? s.activeLink : ''}
            onClick={() => setcategoriesShow(!categoriesShow)} >
            All Categories
            <span className={spanClasses}></span>
          </NavLink>
          <ul className={categoriesClasses}>
            {myCategories.map(category => (
              <li key={category.id}>
                <NavLink
                  to={`category/${category.id}`}
                  className={({ isActive }) => isActive ? s.activeLink : ''}
                  children={category.name.charAt(0).toUpperCase() + category.name.slice(1)} ></NavLink>
              </li>
            ))}
          </ul>
        </li>
      </ul>}
    </nav>
    <div className={outletClasses}>
      <Outlet />
    </div>
  </>)
}

export default Sidebar