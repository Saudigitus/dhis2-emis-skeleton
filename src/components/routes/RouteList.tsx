import { Navigate } from "react-router-dom";
import React from "react";
import { SideBarLayout, SimpleLayout } from "../../layout"
import { AppsConfiguration, AppsInstallation, StaffAttendance, StaffEnrollment, StaffProgram, StudentsAttendance, StudentsEnrollment, StudentsPerformance, StudentsProgram, StudentsSocioEconomics } from "../../pages";

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
            component: StudentsProgram
        },
        {
            path: "/student/enrollment",
            layout: SideBarLayout,
            component: StudentsEnrollment
        },
        {
            path: "/student/socio-economics",
            layout: SideBarLayout,
            component: StudentsSocioEconomics
        },
        {
            path: "/student/attendance",
            layout: SideBarLayout,
            component: StudentsAttendance
        },
        {
            path: "/student/performance",
            layout: SideBarLayout,
            component: StudentsPerformance
        },
        {
            path: "/staff/program",
            layout: SideBarLayout,
            component: StaffProgram
        },
        {
            path: "/staff/enrollment",
            layout: SideBarLayout,
            component: StaffEnrollment
        },
        {
            path: "/staff/attendance",
            layout: SideBarLayout,
            component: StaffAttendance
        },
        {
            path: "/apps/installation",
            layout: SideBarLayout,
            component: AppsInstallation
        },
        {
            path: "/apps/configuration",
            layout: SideBarLayout,
            component: AppsConfiguration
        }
    ]
}
