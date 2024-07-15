import { create } from "zustand";

const useModalStore = create((set) => ({
    isModalOpen: false,
    type: null,
    openModal: (type) => {
        console.log("modal opened")

        switch (type) {
            case 'login':
                set({ type: 'login' });
                break;
            case 'register':
                set({ type: 'register' });
                break;
            case 'referral':
                set({ type: 'referral' });
                break;
            default:
                set({ type: null });
                break;
        }

        set({ isModalOpen: true });
    },
    closeModal: () => set({ isModalOpen: false }),

}))

export default useModalStore;