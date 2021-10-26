const ADD_MESSAGE = 'ADD-MESSAGE'
let initialState = {
    dialogsData: [
        { id: 1, name: "Andrew" },
        { id: 2, name: "Ann" },
        { id: 3, name: "Victor" },
        { id: 4, name: "Alex" },
        { id: 5, name: "Sasha" },
        { id: 6, name: "Vadim" },
        { id: 7, name: "Alina" },
        { id: 8, name: "Irina" },
        { id: 9, name: "Dima" },
        { id: 10, name: "Nazar" },
        { id: 11, name: "Grisha" }
    ],
    messagesData: [
        { id: 1, message: "Hello:)" },
        { id: 2, message: "Hi, my dear friend" },
        { id: 3, message: "where`re you now?" },
        { id: 4, message: "i`m going for a walk" },
        { id: 5, message: "okay, have a nice day bro:)" }
    ]
}
export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = action.newMessage
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 6, message: text }]
            }
        default:
            return state
    }
}
export const addMessageCreator = (newMessage) => ({ type: ADD_MESSAGE, newMessage })

