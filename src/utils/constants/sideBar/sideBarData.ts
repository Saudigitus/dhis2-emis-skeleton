import gauge from "../../../assets/images/sidebar/gauge.svg"
import fileDocument from "../../../assets/images/sidebar/file-document.svg"
import glyph from "../../../assets/images/sidebar/Glyph.svg"
import listAdd from "../../../assets/images/sidebar/listAdd.svg"
import logOut from "../../../assets/images/sidebar/log-out.svg"
import { type SideBarItemProps } from "../../../types/sideBar/SideBarTypes"

function sideBarData (): SideBarItemProps[] {
    return [
        {
            title: "Components",
            subItems: [
                {
                    icon: listAdd,
                    label: "Cards",
                    showBadge: false,
                    route: "/cards"
                },
                {
                    icon: glyph,
                    label: "Buttons",
                    showBadge: false,
                    route: "/buttons"
                },
                {
                    icon: logOut,
                    label: "Table",
                    showBadge: false,
                    route: "/table"
                },
                {
                    icon: listAdd,
                    label: "Form",
                    showBadge: false,
                    route: "/form"
                },
                {
                    icon: fileDocument,
                    label: "Tags",
                    showBadge: false,
                    route: "/tags"
                },
                {
                    icon: fileDocument,
                    label: "Titles",
                    showBadge: false,
                    route: "/text"
                }
            ]
        },
        {
            title: "Modal",
            subItems: [
                {
                    icon: gauge,
                    label: "Registration",
                    showBadge: false,
                    route: "/modal-registration"
                },
                {
                    icon: glyph,
                    label: "Summary",
                    showBadge: false,
                    route: "/modal-summary"
                }
            ]
        }
    ]
}
export {sideBarData}
