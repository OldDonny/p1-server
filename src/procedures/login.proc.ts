import { rows, row, empty } from "./base.proc";

const login = (username: string) => {
    return row('spGetUserByUsername', [username])
}


export default{
    login
}