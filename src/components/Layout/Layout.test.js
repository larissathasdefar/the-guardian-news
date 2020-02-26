import React from 'react'
import { render } from '@testing-library/react'
import Layout from './Layout'

describe('Layout component', () => {
    test('Renders Layout component', async () => {
        const { findByTestId } = render(
            <Layout onHideNotification={() => {}}>
                Testando o componente de layout do projeto
            </Layout>
        )
        const component = await findByTestId('layout-content')

        expect(component).toHaveTextContent('The Guardian')
        expect(component).toHaveTextContent('Testando o componente de layout do projeto')
    })

    test('Snapshot', () => {
        const { asFragment } = render(
            <Layout onHideNotification={() => {}}>
                Testando o componente de layout do projeto
            </Layout>
        )
        expect(asFragment()).toMatchSnapshot()
    })

})
