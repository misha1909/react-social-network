import { addPostCreator, deletePostCreator, profileReducer } from "./profileReducer"
import React from 'react'

let state = {
    postsData: [
        { id: 1, message: "Hello everyone!))", likesCount: 12 },
        { id: 2, message: "I like hot-dog very much!", likesCount: 42 },
        { id: 3, message: "My favoutite football club is Liverpool!", likesCount: 8 }
    ]
}
test('new post added', () => {
    let action = addPostCreator("test adding post")
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(4)
})
test('new post text is correct', () => {
    let action = addPostCreator("test adding post")
    let newState = profileReducer(state, action)
    expect(newState.postsData[3].message).toBe("test adding post")
})
test('delete post', () => {
    let action = deletePostCreator(1)
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(2)
})
test('check deleting post', () => {
    let action = deletePostCreator(10000)
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(3)
})