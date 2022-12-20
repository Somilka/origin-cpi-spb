import { useContext, useEffect } from "react";

import { ModalContext } from "../../modules/ModalsManagerContext";

export default function CallMasterBtn(props) {
    const modalContext = useContext(ModalContext);
    const openModal = modalContext.openModal;
    
    console.log('CMB, openModal: ' + openModal);

    useEffect(() => {
        console.log('CMB, f-useEffect, modalContext, openModal:', { modalContext, openModal });
        // debugger;
    }, [modalContext, openModal])

    return (
        <div></div>
        // <div
        //     className={"callmaster btn " + props.className}
        //     onClick={openModal}
        // >
        //     Заказать мастера на замер
        // </div>
    );
}
