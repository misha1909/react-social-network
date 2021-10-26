import React from 'react'
import ProfileStatus from './profileStatus';
import { create } from 'react-test-renderer'
describe("Test ProfileStatus", () => {
    test("Status from props have to be in state", () => {
        const component = create(<ProfileStatus status="test status text" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test status text");
    });
    test("Span have to be shown", () => {
        const component = create(<ProfileStatus status="test status text" />);
        const root = component.root
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });
    test("Span have to be shown", () => {
        const component = create(<ProfileStatus status="test status text" />);
        const root = component.root
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });
    test("Status text have to be correct", () => {
        const component = create(<ProfileStatus status="test status text" />);
        const root = component.root
        let span = root.findByType('span');
        expect(span.children[0]).toBe("test status text");
    });
    test("Input have to be shown in editMode instead of span", () => {
        const component = create(<ProfileStatus status="test status text" />);
        const root = component.root
        let span = root.findByType('span');
        span.props.onDoubleClick()
        let input = root.findByType('input');
        expect(input.props.value).toBe("test status text");
    });
    test("Callback have to be called", () => {
        const mockCallBack = jest.fn()
        const component = create(<ProfileStatus status="test status text" updateStatus={mockCallBack} />);
        const instance = component.getInstance()
        instance.inActiveEditMode()
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});