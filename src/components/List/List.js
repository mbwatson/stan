import styled from 'styled-components'

export const List = styled.ul(({ bullets }) => `
    list-style-type: ${ bullets ? 'disc' : 'none' };
    margin: 0 0 2rem 1rem;
    padding: 0;
`)
