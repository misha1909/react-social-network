import { createSelector } from "reselect"

export const getAllUsers = (state) => {
    return state.usersPage.users
}
// export const getAllUsersSelector = (state) => {
//     return getAllUsers(state).filter(u => true)
// }
export const getAllUsersSelectorSuper = createSelector(getAllUsers, (users) => {
    return users.filter(u => true)
})
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsLoading = (state) => {
    return state.usersPage.isLoading
}
export const getFollowLoading = (state) => {
    return state.usersPage.followLoading
}
