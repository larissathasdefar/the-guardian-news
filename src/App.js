import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from './containers/Layout'
import Home from './containers/Home'
import store from './store'

function App() {

    return (
        <Provider store={store}>
            <Layout>
                <Route exact path="/" component={Home} />
            </Layout>
        </Provider>
    )
}

export default App;
