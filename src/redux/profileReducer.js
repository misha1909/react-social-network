import { profileAPI } from './../api/api'
const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
let initialState = {
    postsData: [
        { id: 1, message: "Hello everyone!))", likesCount: 12 },
        { id: 2, message: "I like hot-dog very much!", likesCount: 42 },
        { id: 3, message: "My favoutite football club is Liverpool!", likesCount: 8 }
    ],
    newPostText: "",
    profile: null,
    status: ""
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.newPost,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        case DELETE_POST:
            return {
                ...state, postsData: state.postsData.filter(p => p.id != action.id)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}
export const addPostCreator = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)

    dispatch(setUserProfile(data))
}


export const deletePostCreator = (id) => ({ type: DELETE_POST, id })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
