import { category } from "../dumpData";
import store from "../hooks/store";


async function Login() {
    store.dispatch({ type: 'SET_LOADING', payload: true })
    await fetch("https://api.vimeo.com/oauth/authorize/client", {
        method: "POST",
        headers: {
            "Authorization": "basic ZWFjMWFiNTY0YzJmMjg4MDM1NWU3ZmUwNTBkYzBiYTljOTA1Nzk4NjpKZTU2TERqK1BFdVQycnVHS05SYUhpSjBqQldRMFc4OWt2aUtXbUJtdUh0dWtOWmtkd0wxOFZjZFZ5ejFPcm5kd2J4Y0VDalR3cHhhdjNlYW84SHVsRk1QdC9CSWVDT21yVVhyZm1IdTVIZFdXbEZ4U0FIN3kvL1YvQlduV2xhdQ==",
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
            store.dispatch({ type: 'SET_LOADING', payload: false })
        })
        .catch(error => console.error(error));
}


export async function getAllVideos() {
    store.dispatch({ type: 'SET_LOADING', payload: true })
    const access_token = window.sessionStorage.getItem("access_token")
    if (access_token == "undefined" || access_token == undefined) {
        await Login()
    }
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
export function UserLogout() {
    window.sessionStorage.removeItem("access_token")
    store.dispatch({ type: 'SET_LOADING', payload: false })
}