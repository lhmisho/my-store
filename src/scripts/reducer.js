const init = {
    b_list: []
}

const reducer = (state = [], action) =>{
    switch(action.type){
        case 'CREATE_BOOKMARKS':{
            // let bookmark = [...state]
            return state.concat(action.payload) 
        }
        case 'REMOVE_BOOKMARKS':{
            return state.filter(bookmark => bookmark._id !== action.payload)
        }
        case 'TOGGLE_BOOKMARKS':{
            return state.map(bookmark => {
                if(bookmark._id === action.payload){
                    return bookmark.isFav = !bookmark.isFav
                }
            })
        }
        case 'slider':{
            // let slider_data = [...state]
            return action.payload.slider_data
        }
        default: return state
    }
}

export default reducer