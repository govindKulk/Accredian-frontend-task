import { create } from "zustand";

const useModalStore = create((set) => ({
    isModalOpen: false,
    openModal: () => {
        console.log("modal opened")
        set({ isModalOpen: true });
    },
    closeModal: () => set({ isModalOpen: false }),

}))

export default useModalStore;