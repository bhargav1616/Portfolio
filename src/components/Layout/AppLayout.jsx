import { Outlet } from "react-router-dom"
import { Headers } from "../UI/Header"

export const AppLayout = () => {
    return (
        <>
            <Headers />
            <Outlet />
        </>
    )
}