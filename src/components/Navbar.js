import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/UserAction";


export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const dispatch = useDispatch();

  const { currentUser } = userstate;

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {/* // style={{ position:"fixed", width:"100%",}}> */}
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <img className="burger" src ="https://img.freepik.com/free-vector/little-nugget-logo-text-design_1308-69717.jpg?w=1480&t=st=1674021523~exp=1674022123~hmac=d132fa94b7a3380013fca6536cfcea8a43748cd9227182095b3d8ef8baab02b1"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {currentUser ? (
                <li>
                     
                  <div className="dropdown m-2">
                    <a
                      className="dropdown-toggle nav-link"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {currentUser.name}
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="/orders">
                          Orders
                        </a>
                      </li>
                  
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => dispatch(logoutUser())}
                        >
                          <li>Logout</li>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                <>
                   
                   <li className="nav-item mt-2">
                  <a className="nav-link" href="/home">
                    Home
                  </a>
                 
                </li>
               
                <li className="nav-item mt-2">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                 
                </li>
           
                </>

              )}

              <li className="nav-item mt-2">
                <a className="nav-link" href="/cart">
                  Cart {cartstate.cartItems.length}
                </a>
              </li>

              

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
