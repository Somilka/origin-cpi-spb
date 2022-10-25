import { useCallback, useContext, useEffect } from "react";

import { ModalContext } from "./modules/ModalsManagerContext";

export default function Modal() {
    const modalContext = useContext(ModalContext);

    const openModal = useCallback(() => {
        console.log("lololo");
        debugger;
    }, []);

    useEffect(() => {
        modalContext.openModal = openModal;
        debugger;
    }, [modalContext, openModal]);

    return <div className="modal">Hello</div>;
}
