import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Layout, Header, Footer, Main, Content } from '../Layout'
import { Button } from '../Button'
import { Menu, MenuItem } from '../Menu'
import { Divider } from '../Divider'
import { Brand } from '../Brand'
import { Rotator } from '../Transformers'
import { ExpandIcon } from '../Icons'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import '../../styles/base.css'
import '../../styles/globals.css'

const WINDOW_WIDTH_THRESHOLD = 1080
const MENU_WIDTH = 250

const MenuToggleButton = styled(Button)`
    padding: 0 1rem;
    transition: opacity 250ms, transform 250ms;
    opacity: 1.0;
    pointer-events: default;
    transform: translateX(0%);
    @media (min-width: ${ WINDOW_WIDTH_THRESHOLD }px) {
        opacity: 0.0;
        pointer-events: none;
        transform: translateX(-100%);
    }
`

const MainContainer = styled(Main)`
    position: relative;
    transition: transform 500ms;
    flex: 1;
    flex-grow: 1;
    transform: translateX(${ props => props.shifted ? MENU_WIDTH : 0 }px);
    @media (min-width: ${ WINDOW_WIDTH_THRESHOLD }px) {
        transform: translateX(${ MENU_WIDTH }px);
    }
`

const isPartiallyActive = process.env.NODE_ENV === 'development'
    ? path => {
        return typeof window !== 'undefined' ? (
            path === '/'
                ? window.location.pathname === '/' ? true : false
                : window.location.pathname.startsWith(path) ? true : false
        ) : false
    } : path => {
        return typeof window !== 'undefined' ? (
            path === '/'
                ? window.location.pathname === '/stan/' ? true : false
                : window.location.pathname.startsWith('/stan' + path) ? true : false
        ) : false
    }

export default ({ children }) => {
    const [windowWidth, ] = useWindowWidth()
    const [menuOpen, setMenuOpen] = useState(false)
    const handleToggleMenu = () => setMenuOpen(!menuOpen)
    const isCompact = useCallback(() => windowWidth < 800, [windowWidth])
    const [compact, setCompact] = useState(isCompact())

    useEffect(() => {
        setCompact(isCompact())
        if (windowWidth > WINDOW_WIDTH_THRESHOLD) setMenuOpen(false)
    }, [windowWidth, isCompact])
    // useEffect(() => {
    //     setTimeout(setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0), null)
    // }, [])
    
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
                <Layout>
                    <Header compact={ compact }>
                        <MenuToggleButton onClick={ handleToggleMenu }>
                            { compact ? null : 'Menu' } <Rotator rotated={ menuOpen }><ExpandIcon /></Rotator>
                        </MenuToggleButton>
                        <Brand compact={ compact } style={{ flex: 1 }}><Link to="/">{ data.site.siteMetadata.title }</Link></Brand>
                    </Header>
                    <MainContainer shifted={ menuOpen }>
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
                    </MainContainer>
                    <Footer>
                        &copy; { new Date().getFullYear() }
                    </Footer>
                </Layout>
            )}
        />
    )
}
