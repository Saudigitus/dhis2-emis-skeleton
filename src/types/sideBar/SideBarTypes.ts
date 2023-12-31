interface SideBarItemProps {
    title: string
    subItems: SideBarSubItemProps[]
}

interface SideBarItemTitleProps {
    title: string
}

interface SideBarSubItemProps {
    label: string
    showBadge: boolean
    icon: string
    route: string
}

interface SideBarCollapseProps {
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}
export type {SideBarItemProps, SideBarItemTitleProps, SideBarSubItemProps, SideBarCollapseProps}
