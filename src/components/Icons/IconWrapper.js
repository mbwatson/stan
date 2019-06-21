import styled from 'styled-components'
import PropTypes from 'prop-types'

export const IconWrapper = styled.picture`
    display: inline-block;
    padding: ${ props => props.pad };
`

IconWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    pad: PropTypes.string.isRequired,
}

IconWrapper.defaultProps = {
    pad: '0',
}
