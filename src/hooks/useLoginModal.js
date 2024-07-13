import { create } from "zustand";

const useLoginModal = create((set) => ({
    isModalOpen: false,
    openModal: () => {
        console.log("modal opened")
        set({ isModalOpen: true });
    },
    closeModal: () => set({ isModalOpen: false }),
}))

export default useLoginModal;