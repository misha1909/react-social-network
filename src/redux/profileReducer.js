import { usersAPI } from './../api/api'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
let initialState = {
    postsData: [
        { id: 1, message: "Hello everyone!))", likesCount: 12 },
        { id: 2, message: "I like hot-dog very much!", likesCount: 42 },
        { id: 3, message: "My favoutite football club is Liverpool!", likesCount: 8 }
    ],
    newPostText: "",
    profile: null
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: "",
                postsData: [...state.postsData, newPost]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}
export const addPost = () => ({ type: ADD_POST })
export const updateNewPost = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        }
        )
}

