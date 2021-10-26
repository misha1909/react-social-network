import React from 'react'
import { create } from 'react-test-renderer'
import Paginator from './paginator'
describe("Paginator component test", () => {
    test("Pages count have to be 10! not 11", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />)
        const root = component.root
        let spans = root.findAllByType('span')
        expect(spans.length).toBe(10)
    })
    test("Show button NEXT when pagesCount > 10", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />)
        const root = component.root
        let button = root.findAllByType('button')
        expect(button.length).toBe(1)
    })
})