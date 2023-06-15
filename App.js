import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <div className="app_body">
            <BrowserRouter>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Chat />}>
                  <Route path="/rooms/:roomId" element={<Chat />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
