import { create } from 'zustand';
import { toast } from 'sonner';

export const useAuthStore = create((set) => ({
    user: null,
    setUser: (user) => set({ user: user }),
    verifyLoading: false,
    setVerifyLoading: (verifyLoading) => set({ verifyLoading: verifyLoading }),
    verifySuccess: false,
    setVerifySuccess: (verifySuccess) => set({ verifySuccess: verifySuccess }),
    authType: "sign-in",
    setAuthType: (authType) => set({ authType: authType }),
    registerLoading: false,
    setRegisterLoading: (registerLoading) => set({ registerLoading: registerLoading }),

    performSignUp: async (email, password) => {
        try {
            useAuthStore.getState().setRegisterLoading(true);
            const CustomHeader = new Headers();
            CustomHeader.append('Content-Type', 'application/json')
            const config = {
                method: 'POST',
                headers: CustomHeader,
                body: JSON.stringify({ email, password })
            }
            await fetch(`/api/sign-up`, config)
                .then(response => response.json())
                .then(result => {
                    if (result.success === true) {
                        toast.success(result.msg);
                        useAuthStore.getState().setAuthType("sign-in");
                    }

                    if (result.success === false) toast.error(result.msg);
                })
                .finally(() => {
                    useAuthStore.getState().setRegisterLoading(false);
                })
        }
        catch (error) {
            toast.error("Something went wrong... Try again later!");
        }
    },
    performSignIn: async (email, password, navigate) => {
        try {
            useAuthStore.getState().setVerifyLoading(true);
            const CustomHeader = new Headers();
            CustomHeader.append('Content-Type', 'application/json')
            const config = {
                method: 'POST',
                headers: CustomHeader,
                body: JSON.stringify({ email, password })
            }
            await fetch(`/api/sign-in`, config)
                .then(response => response.json())
                .then(result => {
                    if (result.success === true) {
                        toast.success(result.msg);
                        localStorage.setItem('login_token', result.loginToken);
                        navigate('/');
                    }

                    if (result.success === false) {
                        toast.error(result.msg);
                        useAuthStore.getState().setVerifyLoading(false);
                    }
                })
        }
        catch (error) {
            useAuthStore.getState().setVerifyLoading(false);
            toast.error("Something went wrong... Try again later!");
        }
    },
    performLoadUser: async () => {
        if (localStorage.getItem("login_token") === null || localStorage.getItem("login_token") === "") return;
        try {
            useAuthStore.getState().setVerifyLoading(true);
            const CustomHeader = new Headers();
            CustomHeader.append("login_token", localStorage.getItem("login_token"));
            const config = {
                method: 'GET',
                headers: CustomHeader
            }
            await fetch(`/api/load-user`, config)
                .then(response => response.json())
                .then(result => {
                    if (result.success === true) {
                        useAuthStore.getState().setUser(result.user);
                        useAuthStore.getState().setVerifyLoading(false);
                        useAuthStore.getState().setVerifySuccess(true);
                    }

                    if (result.success === false) {
                        localStorage.removeItem("login_token");
                        useAuthStore.getState().setVerifyLoading(false);
                        useAuthStore.getState().setVerifySuccess(false);
                    }
                })
        }
        catch (error) {
            localStorage.removeItem("login_token");
            useAuthStore.getState().setVerifyLoading(false);
            useAuthStore.getState().setVerifySuccess(false);
        }
    }
}));