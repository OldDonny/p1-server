import {row, rows, empty} from './base.proc'

const all = () => {
    return rows('spGetChirps');
 };
 
 const read = (id:number) => {
     return row('spGetChirp', [id])
 };
 
 const create = (userid:number, message: string) => {
     return row('spInsertChirp', [userid, message])
 };
 
 const destroy = (id: number) => {
    return empty('spDeleteChirp', [id])
 };
 
 const update = (id: number, userid: number, message: string) => {
    return rows('spUpdateChirp', [id,userid,message])
 };


 export default {
     all,
     create,
     read,
     destroy,
     update
 }
