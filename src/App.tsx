import React, { useEffect } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';  
import Chat from './components/Chat/Chat'; 
import { useSelector } from 'react-redux';
import Login from './components/Login/Login';
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallBack } from './utils/ErrorFallBack';

function App() {

  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      // console.log(loginUser);
      if (loginUser) {
        dispatch(login({
          uid: loginUser.uid,
          photo: loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName,
        }));
      } else {
        dispatch(logout())
      }
    });
  },[dispatch])

  return (
    <div className="App">
      {user ? (
        <>
          {/* sidebar */}
          <ErrorBoundary FallbackComponent={ErrorFallBack}>
            <Sidebar />
          </ErrorBoundary>
    
          {/* chat */}
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
