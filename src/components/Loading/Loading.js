import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'

const Wrapper = styled.div`
    text-align: center;
`

const News = () => (
    <Wrapper>
        <CircularProgress />
    </Wrapper>
)

export default News;
