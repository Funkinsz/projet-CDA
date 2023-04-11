import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()
    return (
        <div>
            <h2>Error Page</h2>
            <p>{error.message || error.statusText }</p>
        </div>
    )
}