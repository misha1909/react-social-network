// import dialogsReducer from "./dialogsReducer"
// import navbarReducer from "./navbarReducer"
// import profileReducer from "./profileReducer"
// let store = {
//     _state: {
//         navBar: {
//             menuData: [
//                 { to: "/profile", link: "Profile" },
//                 { to: "/dialogs", link: "Dialogs" },
//                 { to: "/news", link: "News" },
//                 { to: "/music", link: "Music" },
//                 { to: "/settings", link: "Settings" },
//                 { to: "/friends", link: "Friends" }
//             ]
//         },
//         profilePage: {
//             postsData: [
//                 { id: 1, message: "Hello everyone!))", likesCount: 12 },
//                 { id: 2, message: "I like hot-dog very much!", likesCount: 42 },
//                 { id: 3, message: "My favoutite football club is Liverpool!", likesCount: 8 }
//             ],
//             newPostText: ""
//         },
//         dialogsPage: {
//             dialogsData: [
//                 { id: 1, name: "Andrew" },
//                 { id: 2, name: "Ann" },
//                 { id: 3, name: "Victor" },
//                 { id: 4, name: "Alex" },
//                 { id: 5, name: "Sasha" },
//                 { id: 6, name: "Vadim" },
//                 { id: 7, name: "Alina" },
//                 { id: 8, name: "Irina" },
//                 { id: 9, name: "Dima" },
//                 { id: 10, name: "Nazar" },
//                 { id: 11, name: "Grisha" }
//             ],
//             messagesData: [
//                 { id: 1, message: "Hello:)" },
//                 { id: 2, message: "Hi, my dear friend" },
//                 { id: 3, message: "where`re you now?" },
//                 { id: 4, message: "i`m going for a walk" },
//                 { id: 5, message: "okay, have a nice day bro:)" }
//             ],
//             newMessageText: ""
//         },
//     },
//     _callSubscriber() {
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.navBar = navbarReducer(this._state.navBar, action)
//         this._callSubscriber(this._state)
//     }
// }
// window.store = store
// export default store