import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <li>
          <NavLink to='/Monsters'>Monsters</NavLink>
        </li>
        <li>
          <NavLink to='/AddMonster'>Add Monster Student</NavLink>
        </li>
      </nav>
      <Outlet />
    </>
  );
};

export default Home;
