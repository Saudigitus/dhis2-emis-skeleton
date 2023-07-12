import { Navigate } from "react-router-dom";
import React from "react";
import { SideBarLayout, SimpleLayout, HeadBarLayout } from "../../layout"
import { DashboardCards, Button, Home } from "../../pages";

function RouteList() {
    return [
        {
            path: "/",
            layout: SimpleLayout,
            component: () => <Navigate to="/home" replace />
        },
        {
            path: "/home",
            layout: SideBarLayout,
            component: Home
        },
        {
            path: "/table",
            layout: HeadBarLayout,
            component: () => <span>Table</span>
        },
        {
            path: "/buttons",
            layout: SideBarLayout,
            component: Button
        },
        {
            path: "/card",
            layout: SideBarLayout,
            component: DashboardCards
        }
    ]
}
export { RouteList }
