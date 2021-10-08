let initialState = {
    menuData: [
        { to: "/profile", link: "Profile" },
        { to: "/dialogs", link: "Dialogs" },
        { to: "/users", link: "Users" },
        { to: "/news", link: "News" },
        { to: "/music", link: "Music" },
        { to: "/settings", link: "Settings" },
        { to: "/friends", link: "Friends" }
    ]
}
export const navbarReducer = (state = initialState, action) => {
    return state
}
