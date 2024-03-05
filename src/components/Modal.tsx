import React, { useState, useEffect } from "react";

type ModalProperties = {
    children: React.ReactNode,
    label: string;
}

export function toggleModal(id: string) {
    const modalElement = document.getElementById(id) as HTMLDialogElement;
    const modalActive = modalElement?.hasAttribute("open");
    if (modalElement) {
        if (modalActive) {
            modalElement.close();
        } else if (!modalActive) {
            modalElement.showModal();
        }
    }
}

export default function Modal ({
    children,
    label
}: ModalProperties) {
    return (
        <dialog id={label}>
            {children}
        </dialog>
    )
}