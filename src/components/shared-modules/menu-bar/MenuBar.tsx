import { googleLogout } from '@react-oauth/google';

const MenuBar = () => {
  const handleLogoutClick = () => {
    googleLogout();
  };

  return (
    <ul>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/about'>About</a>
      </li>
      <li>
        <button onClick={handleLogoutClick}>Log out</button>
      </li>
    </ul>
  );
};

export default MenuBar;
