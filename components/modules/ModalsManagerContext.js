import { createContext } from "react";

const defaultModalContext = {
    openModal: undefined
};

export const ModalContext = createContext(defaultModalContext);