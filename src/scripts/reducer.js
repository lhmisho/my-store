const init = [
    {
        url: "https://www.facebook.com",
        domainName: "facebook.com",
        isFav: false,
        _id: 'asdfasdf'
    }
]

const reducer = (state = init, action) =>{
    switch(action.type){
        case 'CREATE_BOOKMARKS':{
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
        default: return state
    }
}

export default reducer