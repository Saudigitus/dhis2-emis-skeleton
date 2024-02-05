import { Navigate } from "react-router-dom";
import React from "react";
import { SideBarLayout, SimpleLayout, FullLayout } from "../../layout"
import { Cards, ButtonsPage, Home, RegistrationModal, SummaryModal, Titles, TagAlerts, GenericForm} from "../../pages";
import TableComponent from "../../pages/table/Table";

export default function RouteList() {
    return [
        {
            path: "/",
            layout: SimpleLayout,
            component: () => <Navigate to="/cards" replace />
        },
        {
            path: "/home",
            layout: SideBarLayout,
            component: Home
        },
        {
            path: "/table",
            layout: FullLayout,
            component: () => <TableComponent />
        },
        {
            path: "/buttons",
            layout: SideBarLayout,
            component: ButtonsPage
        },
        {
            path: "/cards",
            layout: SideBarLayout,
            component: Cards
        },
        {
            path: "/modal-registration",
            layout: SideBarLayout,
            component: RegistrationModal
        },
        {
            path: "/modal-summary",
            layout: SideBarLayout,
            component: SummaryModal
        },
        {
            path: "/text",
            layout: SideBarLayout,
            component: Titles
        },
        {
            path: "/tags",
            layout: SideBarLayout,
            component: TagAlerts
        },
        {
            path: "/form",
            layout: FullLayout,
            component: GenericForm
        }
    ]
}
