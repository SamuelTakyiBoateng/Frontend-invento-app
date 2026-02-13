import axios from "axios";

const API = axios.create({
    baseURL: "http:/localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export interface LoginData {
    username: string;
    password: string;
}

export interface SignupData {
    username: string;
    email: string;
    password: string;
}

export const loginUser = (data: LoginData) =>
    API.post("/auth/login", data);

export const signupUser = (data: SignupData) =>
    API.post("/auth/signup", data);