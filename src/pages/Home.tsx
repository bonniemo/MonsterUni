import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
      <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/Monsters'>Monsters Alumni</NavLink>
        </li>
        <li>
          <NavLink to='/AddMonster'>Add Monster Student</NavLink>
        </li>
      </nav>
      <Outlet />
      <h1>MonsterAcademy</h1>
    </>
  );
};

export default Home;
