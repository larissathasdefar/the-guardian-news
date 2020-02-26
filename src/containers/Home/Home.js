import React, { useCallback, useEffect, useState } from 'react'
import _ from 'prop-types'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { loadNews } from '../../actions/home'
import News from '../../components/News'
import Loading from '../../components/Loading'
import { useScroll } from '../../utils/infinityScroll'

const HomeContainer = ({ news, loading, onLoadNews }) => {
    const [page, setPage] = useState(1)

    const handleReachEnd = useCallback(
        () => {
            const newPage = page + 1
            onLoadNews(newPage)
            setPage(newPage)
        },
        [page, onLoadNews]
    )

    useScroll({
        onReachEnd: handleReachEnd
    })

    useEffect(() => {
        onLoadNews(1)
    }, [onLoadNews])

    return (
        <div>
            <Typography paragraph>Home</Typography>
            {
                news.map(item => (
                    <a key={item.id} href={item.webUrl}>
                        <News
                            section={item.sectionName}
                            title={item.webTitle}
                            date={item.webPublicationDate}
                        />
                    </a>
                ))
            }
            { loading ? <Loading /> : null }
        </div>
    )
}

HomeContainer.propTypes = {
    news: _.arrayOf(_.shape({
        sectionName: _.string.isRequired,
        webTitle: _.string.isRequired,
        webPublicationDate: _.string.isRequired,
        webUrl: _.string.isRequired,
    })).isRequired,
    loading: _.bool.isRequired,
    onLoadNews: _.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    onLoadNews: (page = 1) => {
        dispatch(loadNews(page))
    }
})

const mapStateToProps = state => ({
    news: state.home.news,
    loading: state.home.loading,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeContainer)
