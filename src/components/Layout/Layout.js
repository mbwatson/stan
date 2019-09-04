import styled from 'styled-components'

export const Header = styled.header`
    // & * { border: 1px solid #f99; }
    background-color: var(--color-white);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    padding: 0;
    margin: 0;
    min-height: ${ props => props.compact ? '3rem' : '5rem' };
    transition: min-height 250ms, padding-right 250ms;
    z-index: 99;
    max-width: 1030px;
`

export const Main = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    background-color: var(--color-white);
`

export const Content = styled.div`
    padding: ${ props => props.compact ? '2rem' : '3rem' };
    line-height: ${ props => props.compact ? 2 : 1.75 };
    transition: padding 250ms;
    flex: 1;
    filter: ${ props => props.pushedAside ? 'opacity(0.25)' : '' };
    transition: filter 250ms, padding 250ms;
    max-width: ${ props => props.maxWidth }px;
    height: 100%;
    & a {
        font-weight: bold;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        color: var(--color-primary-dark);
        border-bottom-color: transparent;
        transition: color 250ms, border-bottom-color 250ms;
        &:hover {
            color: var(--color-primary);
            border-bottom-color: var(--color-primary);
        }
    }
`

export const Footer = styled.footer`
    height: 5rem;
    padding: 1rem;
    background: repeating-linear-gradient(
        135deg,
        #333,
        #333 5px,
        #111 5px,
        #111 6px
    );
    color: var(--color-grey);
    box-shadow 0 0 6px 3px rgba(0, 0, 0, 0.2);
    z-index: 99;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: sticky;
    bottom: 0;
`

export const Layout = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`