import { Navigate } from "react-router-dom";
import React from "react";
import { SideBarLayout, SimpleLayout } from "../../layout"
import { Cards, ButtonsPage, Home, Modal, Titles, TagAlerts} from "../../pages";
import TableComponent from "../../pages/table/Table";

export default function RouteList() {
    return [
        {
            path: "/",
            layout: SimpleLayout,
            component: () => <Navigate to="/student/program" replace />
        },
        {
            path: "/student/program",
            layout: SideBarLayout,
            component: Home
        },
        {
            path: "/student/enrollment",
            layout: SideBarLayout,
            component: () => <TableComponent />
        },
        {
            path: "/student/socio-economics",
            layout: SideBarLayout,
            component: ButtonsPage
        },
        {
            path: "/student/attendance",
            layout: SideBarLayout,
            component: Cards
        },
        {
            path: "/student/performance",
            layout: SideBarLayout,
            component: Modal
        },
        {
            path: "/staff/program",
            layout: SideBarLayout,
            component: Titles
        },
        {
            path: "/staff/enrollment",
            layout: SideBarLayout,
            component: TagAlerts
        },
        {
            path: "/staff/attendance",
            layout: SideBarLayout,
            component: Cards
        },
        {
            path: "/apps/installation",
            layout: SideBarLayout,
            component: Cards
        },
        {
            path: "/apps/configuration",
            layout: SideBarLayout,
            component: Cards
        }
    ]
}
