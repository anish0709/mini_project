import React, { useState } from 'react';

const LogoutPage = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing session, removing tokens, etc.)
    // For this example, I'll just set a state to simulate logging out
    setIsLoggedOut(true);
  };

  return (
    <div>
      {isLoggedOut ? (
        <div>
          <h1>You have successfully logged out.</h1>
          <p>Thank you for using our service!</p>
        </div>
      ) : (
        <div>
          <h1>Logout Page</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LogoutPage;
