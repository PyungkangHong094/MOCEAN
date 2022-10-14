import { useQuery } from "react-query";
import ApiClient from "../api-client";

export const useSignIn = (email, password) => {
    const getSignIn = async () => {
        const { data } = await ApiClient().get(`login?email=${email}&password=${password}`);
        return data;
    }

    return useQuery('sign-in', getSignIn);
}