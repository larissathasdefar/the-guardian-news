import React from 'react'
import { render } from '@testing-library/react'
import News from './News'

const props = {
    section: 'Football',
    date: "2020-02-25T19:00:35Z",
    title: "Real Madrid and ban give Pep Guardiola highest-stakes test yet",
}

describe('News component', () => {
    test('Renders News component', async () => {
        const { findByTestId } = render(<News {...props} />)
        const component = await findByTestId('news-content')

        expect(component).toHaveTextContent(props.title)
        expect(component).toHaveTextContent('25/02/2020 16:00:35')
    })

    test('Snapshot', () => {
        const { asFragment } = render(<News {...props} />)
        expect(asFragment()).toMatchSnapshot()
    })

})
