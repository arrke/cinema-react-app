
import '../stylesheets/App.css';
import {Routes, Route} from 'react-router-dom'
import { LoginComponent } from './LoginComponent';
import { RegisterComponent } from './RegisterComponent';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<LoginComponent/>} />
        <Route path="/sign-up" element={<RegisterComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
