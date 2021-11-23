
import '../stylesheets/App.css';
import {Routes, Route} from 'react-router-dom'
import { LoginComponent } from './LoginComponent';
import { RegisterComponent } from './RegisterComponent';
import { useState } from 'react';
import { NavComponent } from './NavComponent';
import {loginAsUser} from '../api/UsersApi.js'
function App() {
  const[user,login] = useState({
    id: localStorage.id || 0,
    email: localStorage.email || undefined
  });

  function handleUserLogin(email, password){
    const fetchData = async (email, password) => {
      loginAsUser(email, password)
              .then(result => {
                 login({id: result[0].id, email: result[0].email});
                 localStorage.id = result[0].id;
                localStorage.email = result[0].email
                
              })
              .catch(error => { console.error(error); throw error; });
    };
    fetchData(email, password);
  }

  function handleLogout(){
    localStorage.removeItem("email");
    localStorage.removeItem('id');
  }
  return (
    <>
    <NavComponent user={user} signOut = {handleLogout}/>
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<LoginComponent login={handleUserLogin}/>} />
        <Route path="/sign-up" element={<RegisterComponent/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
