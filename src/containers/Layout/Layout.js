import React from 'react'
import _ from 'prop-types'
import { connect } from 'react-redux'
import { hideNotification } from '../../actions/notification'
import Wrapper from '../../components/Layout'

const LayoutContainer = ({ children, ...otherProps }) => (
    <Wrapper {...otherProps}>
        {children}
    </Wrapper>
)

LayoutContainer.propTypes = {
    children: _.node.isRequired,
    snack: _.shape({
        open: _.bool.isRequired,
        message: _.string,
        variant: _.oneOf(['error', 'success']),
    }).isRequired,
    onHideNotification: _.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    onHideNotification: () => {
        dispatch(hideNotification())
    }
})

const mapStateToProps = ({ notification }) => ({
    snack: notification.snack,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LayoutContainer)
