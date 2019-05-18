import React from 'react';
import { connect } from 'react-redux'
import { addActions, subActions, getUserActions } from './store/actions'
import logo from './logo.svg';
import './App.css';

function App(props) {
  console.log('props: ', props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Luisk {props.value} {props.loading ? `cargando`: `buscando`}
        </a>

        <button onClick={props.add}> Add </button>
        <button onClick={props.sub}> Sub </button>
      </header>
      <div>
        <p>
          <span>Obtener Usuarios</span> <button onClick={props.getUsers}> Buscar</button>
        </p>
        <table>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <tbody>
            { props.users.map((item, index) => (<tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = ({ app, users }) => {
  console.log('users: ', users);
  return ({
  value: app.value,
  users: app.users,
  loading: users.loading
  
})
}

const mapDispatchToProps = (dispatch) => {
  return ({
    add: () => dispatch(addActions()),
    sub: () => dispatch(subActions()),
    getUsers: () => getUserActions(dispatch),
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
