import createStore from '../../store'
import reducer from './reducer'
import createListItem from './creatListItem'

const store = createStore(reducer)


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

            const li = createListItem({ url, domainName, isFav, _id })
            console.log(li)
            bookmarks.appendChild(li)
            event.target.value = ''
        }
    }
}

function getDomainName(url) {
    return url.match(/:\/\/(.[^/]+)/)[1]
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