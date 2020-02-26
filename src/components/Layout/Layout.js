import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import Snackbar from '../Snackbar'
import Typography from '@material-ui/core/Typography'

const Wrapper = styled.div`
    a {
        text-decoration: none;
    }
`

const Header = styled.div`
    display: flex;
    height: calc(100px - 32px);
    background: #e7edef;
    align-items: center;
    padding: 16px;
`

const Body = styled.div`
    min-height: calc(100vh - 100px);
    max-width: 880px;
    margin: 0 auto;
    padding: 10px;
`

const Layout = ({children, snack, onHideNotification, ...otherProps}) => {
    return (
        <Wrapper data-testid="layout-content">
            <Header {...otherProps}>
                <Typography variant="h3">The Guardian</Typography>
            </Header>
            <Body>{children}</Body>
            <Snackbar
                open={snack.open}
                variant={snack.type}
                onClose={onHideNotification}
                message={snack.message}
            />
        </Wrapper>
    )
}

Layout.propTypes = {
    snack: _.shape({
        open: _.bool,
        type: _.oneOf(['error', 'success']),
        message: _.string,
    }),
    children: _.node.isRequired,
    onHideNotification: _.func.isRequired,
}

Layout.defaultProps = {
    snack: {
        open: false,
        type: 'success',
        message: '',
    }
}

export default Layout
