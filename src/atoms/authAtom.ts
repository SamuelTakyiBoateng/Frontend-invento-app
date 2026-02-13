import { atom } from "jotai";

export interface AuthUser {
    username: string;
    token: string;
}

export const authAtom = atom <AuthUser | null>(null);