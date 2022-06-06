import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard';
import Users from './users'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Createuser from './createuser';
import Userview from './userview';
import Edit from './edit';
import { UserProvider } from './UserContext';
import { useState } from 'react';


function App() {
  
  const [users, setUsers] = useState([]);

  return (

    <BrowserRouter>
      <div id='wrapper'>
        <UserProvider value={{users, setUsers}}>
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div class="container-fluid">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/userscreate" element={<Createuser />} />
                  <Route path="/users-view/:id" element={<Userview />} />
                  <Route path="/users-edit/:id" element={<Edit />} />
                </Routes>
              </div>
            </div>
          </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
