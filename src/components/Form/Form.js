import useLocalStorage from '../../hooks/useLocalStorage';
import { useContext } from 'react';
import ctx from 'context/authContext';

export default function Form() {
  const { user, logIn, logOut } = useContext(ctx);

  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      {user ? (
        <>
          <button type="button" onClick={logOut}>
            LogOut
          </button>
          <span>{user}</span>
        </>
      ) : (
        <button type="button" onClick={logIn}>
          LogIn
        </button>
      )}
      <form autoComplete="off">
        <label>
          Email: &nbsp;
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password: &nbsp;
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Sign up </button>
      </form>
    </>
  );
}
