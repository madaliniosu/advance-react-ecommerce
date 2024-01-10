import { Link } from "react-router-dom";

export default function NotFound () {
    return (
        <div className="not-found">
            <h2>Page not found!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Go to <Link to="/">Homepage.</Link></p>
        </div>

    );
}