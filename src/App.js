import logo from './logo.svg';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './App.css';

function App() {
  const { control, handleSubmit, reset } = useForm();
  const [users, setUsers] = useState([]);

  const onSubmit = (data) => {
    const newUser = {
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      website: data.website || '-',
    };
    setUsers([...users, newUser]);
    reset();
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleClearTable = () => {
    setUsers([]);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputRow">
          <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                  <input
                      {...field}
                      type="text"
                      placeholder="Имя"
                      className={`inputField ${fieldState.invalid ? 'invalid' : ''}`}
                  />
              )}
          />
          <Controller
              name="username"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                  <input
                      {...field}
                      type="text"
                      placeholder="Username"
                      className={`inputField ${fieldState.invalid ? 'invalid' : ''}`}
                  />
              )}
          />
          <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                  <input
                      {...field}
                      type="email"
                      placeholder="Email"
                      className={`inputField ${fieldState.invalid ? 'invalid' : ''}`}
                  />
              )}
          />
          <Controller
              name="phone"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                  <input
                      {...field}
                      type="text"
                      placeholder="Телефон"
                      className={`inputField ${fieldState.invalid ? 'invalid' : ''}`}
                  />
              )}
          />
          <Controller
              name="website"
              control={control}
              rules={{ required: false }}
              render={({ field }) => (
                  <input
                      {...field}
                      type="text"
                      placeholder="Веб-сайт"
                      className="inputField"
                  />
              )}
          />
        </div>
        <div className="buttonRow">
          <button type="submit">Создать</button>
          <button type="button" onClick={handleClearTable}>Очистить таблицу</button>
        </div>
      </form>

      {users.length === 0 ? (
          <div className="message">Таблица пуста</div>
      ) : (
          <table className="userTable">
            <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Действие</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Удалить</button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
      )}

    </div>
  );
}

export default App;
