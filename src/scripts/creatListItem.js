import {store} from './app'

const createListItem = bookmark =>{
    const li = document.createElement('li')
    li.className = 'list-group-item d-flex'
    
    const img = document.createElement('img')
    let url = "https://logo.clearbit.com/" + bookmark.domainName
    // console.log(bookmark)
    img.src = url
    img.src = bookmark.domainName
    img.className = 'avatar'

    const text = document.createElement('p')
    text.className = 'lead ml-4'
    text.innerHTML = bookmark.domainName
    text.style.cursor = 'pointer'
    text.onclick = function(){
        window.open(bookmark.url, '_blank')
    }

    const icons = document.createElement('div')
    icons.className = 'ml-auto'

    const fav = document.createElement('span')
    const i = document.createElement('i')
    i.className = `${bookmark.isFav ? 'fas' : 'far'} fa-heart` 
    fav.appendChild(i)
    fav.onclick = function(){
        store.dispatch({
            type: 'TOGGLE_BOOKMARKS',
            payload: bookmark._id
        })
    }

    const remove = document.createElement('span')
    remove.innerHTML = `<i class="fas fa-trash" ></i>`
    remove.className = "mx-3"

    icons.append(fav, remove)

    li.append(img, text, icons)

    return li
}

export default createListItem
