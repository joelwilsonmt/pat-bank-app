import React from 'react';
import UserContext from './context';

function AllData() {
  const ctx = React.useContext(UserContext);

  console.log('User data from context:', ctx.users); // Log user data to check

  return (
    <>
      <h5 className="mt-4">All Data in Store</h5>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {ctx.users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>${user.balance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AllData;

