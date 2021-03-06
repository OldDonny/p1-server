import { rows, row, empty } from "./base.proc";

const newFollow = (followerid: number, followingid: number) => {
    return row('spNewFollow', [followerid, followingid])
}

const unFollow = (followerid: number, followingid: number) => {
    return empty('spUnfollow', [followerid, followingid])
}

const getFollowingChirps = (followerid: number) => {
    return rows('spGetFollowingChirps', [followerid])
}

const getFollowingUsers = (followerid: number) => {
    return rows('spGetFollowingUsers', [followerid])
}

export default {
    newFollow,
    unFollow,
    getFollowingChirps,
    getFollowingUsers
}