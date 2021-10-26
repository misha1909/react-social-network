import { usersAPI } from "../api/api"
import { updateObjectInArray } from './../utilits/objectHelpers'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const FOLLOW_LOADING = 'FOLLOW_LOADING'
let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followLoading: []


}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.userId, { followed: true })






                // state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: true }
                //     }
                //     return u
                // })
            }
        case UNFOLLOW:
            return {
                ...state, users: updateObjectInArray(state.users, "id", action.userId, { followed: false })

                // state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: false }
                //     }
                //     return u
                // })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount }
        case TOGGLE_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        case FOLLOW_LOADING:
            return {
                ...state,
                followLoading: action.followLoading
                    ? [...state.followLoading, action.userId]
                    : state.followLoading.filter(id => id !== action.userId)

            }
        default:
            return state
    }
}
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({
    type: SET_USERS, users
})
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const setIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
export const setFollowLoading = (followLoading, userId) => ({ type: FOLLOW_LOADING, followLoading, userId })





export const getUsers = (currentPage, pageSize) => {  //thunk creator
    return async (dispatch) => {
        dispatch(setIsLoading(true))
        dispatch(setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setIsLoading(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}


const followUnfollow = async (dispatch, id, api, actionCreator) => {
    dispatch(setFollowLoading(true, id))
    let data = await api(id)
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(setFollowLoading(false, id))

}

export const follow = (id) => {
    return async (dispatch) => {
        dispatch(setFollowLoading(true, id))
        followUnfollow(dispatch, id, usersAPI.follow.bind(id), followSuccess)
    }
}


export const unfollow = (id) => {
    return async (dispatch) => {
        dispatch(setFollowLoading(true, id))
        followUnfollow(dispatch, id, usersAPI.unfollow.bind(id), unfollowSuccess)
    }
}


export default usersReducer