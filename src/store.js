import { writable } from 'svelte/store';

export const items = writable([]);
// export const item = writable(''); // TMP
export const logging=writable({}) // TMP {username,password}
export const users=writable([]) // {username,password}
export const signedin=writable({user:undefined}) // {user:string}

export const login = {

    signin:'sign in',
    signup:'sign up'
}