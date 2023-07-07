import React from 'react'
import style from "./SideBar.module.css"
import { SideBarItemTitle } from './SideBarItemTitle'
import { SideBarSubItem, type SideBarSubItemProps } from './SideBarSubItem'

interface SideBarItemProps {
    title: string
    subItems: SideBarSubItemProps[]
}

function SideBarItem({ title, subItems }: SideBarItemProps): React.ReactElement {
    return (
        <section className={style.SideBarItemContainer}>
            <SideBarItemTitle title={title} />
            <ul className={style.SideBarItemListContainer}>
                {subItems.map((subItem, index) => (
                    <SideBarSubItem key={index} icon={subItem.icon} label={subItem.label} showBadge={subItem.showBadge} />
                ))}
            </ul>
        </section>
    )
}
export { SideBarItem }