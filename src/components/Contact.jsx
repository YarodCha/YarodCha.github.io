import { useEffect, useMemo, useReducer, useState } from 'react';

export default function Contact() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  const initialState = {
    favorites: [],
  };

  const favoriteReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  const handleClick = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));

    return () => {};
  }, []);

  // const date = new Date();
  // const filteredUsers = filterUsers();
  const filteredUsers = useMemo(filterUsers, [search, users]);
  
  function filterUsers() {
    return users.filter((user) => {
      console.log('ejecutando filterUsers');
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  }


  return (
    <div>
      <h1>Contact me</h1>

      <div>
        <input type="text" value={search} onChange={handleSearch} />

        <div>
          <ul>
            {filteredUsers.map((filteredUser) => (
              <li key={filteredUser.id}> {filteredUser.name} </li>
            ))}
          </ul>
          <hr />
        </div>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {' '}
            {user.name}{' '}
            <button type="button" onClick={() => handleClick(user)}>
              Add to Favorite
            </button>{' '}
          </li>
        ))}
      </ul>

      <h2>Favorites</h2>
      <ul>
        {state.favorites.map((favorite) => (
          <li key={favorite.id}> {favorite.name} </li>
        ))}
      </ul>
    </div>
  );
}
