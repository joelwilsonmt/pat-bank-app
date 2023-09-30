import React from 'react';

const AllData = () => {
    const ctx = React.useContext(UserContext);
  
    console.log('User data from context:', ctx.users); // Log user data to check
  
    return (
      <>
        <h5 className="mt-4">All Data in Store</h5>
        {ctx.users.map((user, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="card-text">
                <strong>Password:</strong> {user.password}
              </p>
              <p className="card-text">
                <strong>Balance:</strong> ${user.balance.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </>
    );
  }
  
  export default AllData;
  