import React from 'react';

export default ({ users, query }) => {
  return (
    <div className="container">
      <input type="text" value={query} />
      <ul>
        {users.map(user =>
          <li>
            <img src={user.picture.thumbnail} alt="" />
            {user.name.first} {user.name.last}
          </li>,
        )}
      </ul>
    </div>
  );
};
