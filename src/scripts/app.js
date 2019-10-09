import createStore from '../../store'
import reducer from './reducer'
import createListItem from './creatListItem'
import axios from 'axios'
export const store = createStore(reducer)

store.subscribe(()=>{
    console.log(store.getState().data)
})

window.onload = function () {
    const urlInput = document.getElementById('urlInput')
    const favoriteBookmarks = document.getElementById('favoriteBookmarks')
    const bookmarks = document.getElementById('bookmarks')

    urlInput.onkeypress = function (event) {
        if (event.key === 'Enter') {
            const url = event.target.value
            const domainName = getDomainName(url)
            const isFav = false
            const _id = UUID()
            // console.log(domainName)
            store.dispatch({
                type: 'CREATE_BOOKMARKS',
                payload: {
                   _id, url, domainName, isFav
                }
            })
            // const li = createListItem({ url, domainName, isFav, _id })
            // console.log(li)
            // bookmarks.appendChild(li)
            event.target.value = ''
        }
    }

    store.subscribe(() => {
        bookmarks.innerHTML = null
        store.getState().forEach(item => {
            let li = createListItem(item)
            bookmarks.appendChild(li)
        })
    })

    store.subscribe(() => {
        favoriteBookmarks.innerHTML = null
        store.getState().forEach(item => {
            if(item.isFav){
                let li = createListItem(item)
                favoriteBookmarks.appendChild(li)
            }
        })
    })

    axios.get('http://localhost:8000/api/consumer/v1/categories/slider/')
        .then(res => {
            store.dispatch({
                type: 'slider',
                payload:{
                    slider_data: res.data
                }
            })
        })
        .catch(err => console.log(err))
}

function getDomainName(url) {
    let new_url = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)
    // console.log(new_url)
    return new_url[2]
}


function UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}