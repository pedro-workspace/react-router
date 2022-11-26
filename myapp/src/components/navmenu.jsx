import React from "react";
// import Home from "../pages/home";
// import Contacts from "../pages/contacts";
import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <div>
            <nav>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
            </nav>
        </div>
    )
}