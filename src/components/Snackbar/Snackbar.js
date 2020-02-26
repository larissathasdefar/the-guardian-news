import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import Snackbar from '@material-ui/core/Snackbar'

const color = {
    error: '#d32f2f',
    success: '#43a047',
}

const Snack = styled(Snackbar)`
    && > div {
        ${({ variant }) => variant ? `background: ${color[variant]};` : ''}
    }
`

const Wrapper = ({variant, ...otherProps}) => (
    <Snack
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        variant={variant}
        autoHideDuration={3000}
        {...otherProps}
    />
)

Wrapper.propTypes = {
    variant: _.oneOf(['success', 'error']),
}

Wrapper.defaultProps = {
    variant: 'success',
}

export default Wrapper
