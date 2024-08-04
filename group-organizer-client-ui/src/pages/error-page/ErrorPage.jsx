import { useRouteError } from "react-router";
import { NavBar } from "../../components/nav-bar/NavBar";
import "./errorPage.css"

export const ErrorPage = () => {
const error = useRouteError();

return (
    <div className="error-page">
<NavBar />
<h2>somthing went worng</h2>
<p>{error.statusCode || 500}</p>
<p>{error.message || "An unknown error occurred"} </p>

    </div>
)
}