import settings from "../../../assets/images/sidebar/settings.svg"
import gauge from "../../../assets/images/sidebar/gauge.svg"
import fileDocument from "../../../assets/images/sidebar/file-document.svg"
import appsLoggOut from "../../../assets/images/sidebar/apps-loggOut.svg"
import glyph from "../../../assets/images/sidebar/Glyph.svg"
import listAdd from "../../../assets/images/sidebar/listAdd.svg"
import { type SideBarItemProps } from "../../../types/sideBar/SideBarTypes"

function sideBarData(): SideBarItemProps[] {
    return [
        {
            title: "Students",
            subItems: [
                {
                    icon: settings,
                    label: "Program",
                    showBadge: false,
                    route: "/home4"
                },
                {
                    icon: listAdd,
                    label: "Enrollment",
                    showBadge: false,
                    route: "/enrollment"
                },
                {
                    icon: fileDocument,
                    label: "Socio - economics",
                    showBadge: false,
                    route: "/home3"
                },
                {
                    icon: glyph,
                    label: "Attendance",
                    showBadge: false,
                    route: "/home1"
                },
                {
                    icon: gauge,
                    label: "Performance",
                    showBadge: false,
                    route: "/home2"
                }
            ]
        },
        {
            title: "Staff",
            subItems: [
                {
                    icon: settings,
                    label: "Program",
                    showBadge: false,
                    route: "/home4"
                },
                {
                    icon: listAdd,
                    label: "Enrollment",
                    showBadge: false,
                    route: "/enrollment"
                },
                {
                    icon: glyph,
                    label: "Attendance",
                    showBadge: false,
                    route: "/home7"
                }
            ]
        },
        {
            title: "Overview",
            subItems: [
                {
                    icon: appsLoggOut,
                    label: "Apps Instalation",
                    showBadge: false,
                    route: "/home4"
                },
                {
                    icon: appsLoggOut,
                    label: "Modules Configuration",
                    showBadge: false,
                    route: "/home4"
                }
            ]
        }
    ]
}
export { sideBarData }
