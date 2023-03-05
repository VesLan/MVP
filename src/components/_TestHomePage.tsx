import { useContext } from 'react';
import { AuthContext } from './_AuthProvider';

export const TestHomePage = () => {
  const { userId, handleLogOut } = useContext(AuthContext);

  return (
    <section>
      <h5>
        Your ID is: <span>{userId}</span>
      </h5>
      <button className="btn-logout" onClick={handleLogOut}>
        Log out
      </button>
    </section>
  );
};
