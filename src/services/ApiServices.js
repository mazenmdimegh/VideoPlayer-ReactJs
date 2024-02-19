import { category, sideBarMenu } from "../dumpData";
import store from "../hooks/store";


async function Login() {
    store.dispatch({ type: 'SET_LOADING', payload: true })
    await fetch("https://api.vimeo.com/oauth/authorize/client", {
        method: "POST",
        headers: {
            "Authorization": "basic "+process.env.REACT_APP_API_KEY,
            "Content-type": "application/json",
            "Accept": "application/vnd.vimeo.*+json;version=3.4",
        },
        body: JSON.stringify({
            "grant_type": "client_credentials",
            "scope": "public"
        })
    })
        .then(response => response.json())
        .then(response => {
            window.sessionStorage.setItem("access_token", response.access_token)
            getAllVideos()
        })
        .catch(error => console.error(error));
}


export async function getAllVideos() {
    store.dispatch({ type: 'SET_LOADING', payload: true })
    const access_token = window.sessionStorage.getItem("access_token")
    if (access_token == "undefined" || access_token == undefined) {
        await Login()
    }else{

        await fetch("https://api.vimeo.com/videos?query=4lfa", {
            method: "GET",
        headers: {
            "Authorization": "bearer " + access_token,
            "Content-type": "application/json",
        }
    })
        .then(response => response.json())
        .then(videos => {
            store.dispatch({ type: 'SET_DATA', payload: videos.data })
            store.dispatch({ type: 'SET_LOADING', payload: false })
            console.log(videos)
            return videos
        })
        .catch(error => console.error(error));
        // return undefined
    }
}

export function getById(id) {
    store.dispatch({ type: 'SET_LOADING', payload: true })
    const access_token = window.sessionStorage.getItem("access_token")
    fetch("https://api.vimeo.com/videos?uris=/videos/" + id, {
        method: "GET",
        headers: {
            "Authorization": "bearer " + access_token,
            "Content-type": "application/json",
        }
    })
        .then(response => response.json())
        .then(videos => {
            store.dispatch({ type: 'SET_SELECTEDVIDEO', payload: videos.data[0] })
            store.dispatch({ type: 'SET_LOADING', payload: false })
            return videos.data[0]
        })
        .catch(error => console.error(error));
    return undefined
}

export function searchVideo(keyword) {
    store.dispatch({ type: 'SET_LOADING', payload: true })
    const access_token = window.sessionStorage.getItem("access_token")
    fetch("https://api.vimeo.com/videos?query=" + keyword, {
        method: "GET",
        headers: {
            "Authorization": "bearer " + access_token,
            "Content-type": "application/json",
        }
    })
        .then(response => response.json())
        .then(videos => {
            store.dispatch({ type: 'SET_DATA', payload: videos.data })
            store.dispatch({ type: 'SET_LOADING', payload: false })
            return videos
        })
        .catch(error => console.error(error));
    return undefined
}
export function getSimilarVideo(id) {
    return undefined
}
export function getCategories() {
    return category
}
export function getItems() {
    return sideBarMenu
}
export function UserLogout() {
    window.sessionStorage.removeItem("access_token")
    store.dispatch({ type: 'SET_LOADING', payload: false })
}