import {row, rows, empty} from './base.proc'

const all = () => {
    return rows('spGetChirps');
 };
 
 const read = (id: Number) => {
     return row('spGetChirp', [id])
 };
 
 const create = (userid: Number, message: String) => {
     return row('spInsertChirp', [userid, message])
 };
 
 const destroy = (id: Number) => {
    return empty('spDeleteChirp', [id])
 };
 
 const update = (id: Number, userid: Number, message: String) => {
    return rows('spUpdateChirp', [id, userid, message])
 };


 export default {
     all,
     create,
     read,
     destroy,
     update
 }
