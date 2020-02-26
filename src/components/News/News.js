import React from 'react'
import _ from 'prop-types'
import styled from 'styled-components'
import { format } from 'date-fns'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Wrapper = styled(Card)`
    margin-bottom: 6px;
    cursor: pointer;

    &:hover {
        background-color: #eeeeee;
    }
`

const Actions = styled(CardActions)`
    justify-content: space-between;
`

const News = ({ title, section, date }) => (
    <Wrapper data-testid="news-content">
        <CardContent>
            <Typography gutterBottom>
                {`[${section}] ${title}`}
            </Typography>
        </CardContent>
        <Actions>
            <Button size="small">Learn More</Button>
            <Typography variant="caption">{format(new Date(date), 'dd/MM/yyyy HH:mm:ss')}</Typography>
        </Actions>
    </Wrapper>
)

News.propTypes = {
    title: _.string.isRequired,
    section: _.string.isRequired,
    date: _.string.isRequired,
}

export default News;
