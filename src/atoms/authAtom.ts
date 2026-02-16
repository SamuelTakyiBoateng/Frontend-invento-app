import { atomWithStorage } from "jotai/utils";

export interface AuthUser {
    username: string;
    token: string;
}


export const authAtom = atomWithStorage<AuthUser> ("auth", {
    username : "",
    token: ""
})