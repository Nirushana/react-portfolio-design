import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarBtnWrap } from './SidebarElements';

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Home</SidebarLink>
                <SidebarLink to="/">About</SidebarLink>
                <SidebarLink to="/">Services</SidebarLink>
                <SidebarLink to="/">Projects</SidebarLink>
                <SidebarLink to="/">Contact</SidebarLink>
            </SidebarMenu>
            
            <SidebarBtnWrap />
        </SidebarContainer>
    )
}
 
export default Sidebar
