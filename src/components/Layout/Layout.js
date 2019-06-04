import styled from 'styled-components'

export const Header = styled.header`
    background-color: var(--color-white);
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 0;
    margin: 0;
    min-height: ${ props => props.compact ? '3rem' : '5rem' };
    padding-right: ${ props => props.compact ? 0 : '1rem' };
    transition: min-height 250ms, padding-right 250ms;
    justify-content: space-between;
    box-shadow 0 0 6px 3px rgba(0, 0, 0, 0.2);
    z-index: 1;
`

export const Main = styled.main`
    flex: 1;
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
`

export const Footer = styled.footer`
    height: 5rem;
    padding: 1rem;
    background: repeating-linear-gradient(
        135deg,
        #333,
        #333 5px,
        #444 5px,
        #444 6px
    );
    color: var(--color-grey);
    box-shadow 0 0 6px 3px rgba(0, 0, 0, 0.2);
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const Layout = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`