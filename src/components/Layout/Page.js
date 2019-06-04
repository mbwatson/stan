import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Layout, Header, Footer, Main, Content } from './Layout'
import { Button } from '../Button'
import { Menu, MenuItem } from '../Menu'
import { Divider } from '../Divider'
import { Brand } from '../Brand'
import { Rotator } from '../Transformers'
import { ExpandIcon, LockIcon, ExitIcon } from '../Icons'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { navigate } from 'gatsby'
import '../../styles/base.scss'
import '../../styles/globals.scss'

const WINDOW_WIDTH_THRESHOLD = 1080
const MENU_WIDTH = 250

const MenuToggleButton = styled(Button)`
    padding: 0 1rem;
    transition: opacity 250ms, transform 250ms;
    ${ props => props.visible ? `
        opacity: 1.0;
        pointer-events: default;
        transform: translateX(0%)
    ` : `
        opacity: 0.0;
        pointer-events: none;
        transform: translateX(-100%)
    `
    }
`

const isPartiallyActive = path => {
    return (
        path === '/'
            ? window.location.pathname === '/'
                ? true
                : false
            : window.location.pathname.startsWith(path)
                ? true
                : false
    )
}

export const Page = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const windowWidth = useWindowWidth(window.innerWidth)
    const handleToggleMenu = () => setMenuOpen(!menuOpen)
    const isCompact = () => windowWidth < 800
    const [compact, setCompact] = useState(isCompact())

    useEffect(() => setCompact(isCompact()), [windowWidth])
    
    return (
        <StaticQuery query={
            graphql`
                query SiteDataQuery {
                    site {
                        siteMetadata {
                            title
                            menuItems {
                                text
                                path
                            }
                        }
                    }
                }
            `}
        render={
            data => (
                <Layout style={{ overflow: 'hidden' }}>
                    <Header compact={ compact }>
                        <MenuToggleButton visible={ windowWidth < WINDOW_WIDTH_THRESHOLD } onClick={ handleToggleMenu }>
                            { compact ? null : 'Menu' } <Rotator rotated={ menuOpen }><ExpandIcon /></Rotator>
                        </MenuToggleButton>
                        <Brand compact={ compact } style={{ flex: 1 }}><Link to="/">{ data.site.siteMetadata.title }</Link></Brand>
                    </Header>
                    <Main style={{
                        position: 'relative',
                        transform: menuOpen || windowWidth >= WINDOW_WIDTH_THRESHOLD ? `translateX(${ MENU_WIDTH }px)` : 'translateX(0)',
                        transition: 'transform 500ms',
                    }}>
                        <Menu compact={ compact } width={ MENU_WIDTH }>
                            {
                                data.site.siteMetadata.menuItems.map(({ text, path }) => {
                                    if (text && path) {
                                        return (
                                            <MenuItem key={ text } to={ path } partiallyActive={ isPartiallyActive(path) ? true : false }>
                                                { text }
                                            </MenuItem>
                                        )
                                    } else {
                                        return <Divider />
                                    }
                                })
                            }
                        </Menu>
                        <Content
                            compact={ compact }
                            pushedAside={ menuOpen }
                            maxWidth={ WINDOW_WIDTH_THRESHOLD - MENU_WIDTH }
                            onClick={ menuOpen === true ? handleToggleMenu : () => {} }
                        >
                            { children }
                        </Content>
                    </Main>
                    <Footer>
                        &copy; { new Date().getFullYear() }
                    </Footer>
                </Layout>
            )}
        />
    )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}
