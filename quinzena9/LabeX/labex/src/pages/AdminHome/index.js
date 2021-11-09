import { useProtectedPage } from "../../hooks/useProtectedPage"


export function AdminHome() {

    useProtectedPage()

    return (
        <h1>Admin Page</h1>
    )
}