import { data } from "../dumpData";

export function getById(id) {
    const result = data.filter((video) => video.uri.split("/")[2] ==id);
    return result
}
export function getAllVideos() {
    return data
}
export function UserLogout() {

}