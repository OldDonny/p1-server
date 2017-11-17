import { rows, row, empty } from "./base.proc";

const all = () => {
   return rows('spGetUsers');
};

const read = (id: number) => {
    return row('spGetUser', [id]);
};

const create = (name: string, username: string, email: string, password: string) => {
    return row('spInsertUser', [name, username, email, password])
};

const destroy = (id: number) => {
    return empty('spDeleteUser', [id])
};

const update = (id: number, name: string, username: string, email: string, password: string) => {
    return empty('spUdateUser',[id, name, username, email, password])
};


export default {
    create,
    read, 
    update,
    destroy,
    all
}