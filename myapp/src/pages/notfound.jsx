import React from "react";
import { Link } from "react-router-dom";

export default function NotFound () {

    return (
        <div>
            <h1>Error 404</h1>
            <h2>Not Found</h2>
            <Link to="/">Go Back</Link>
        </div>
    )
}