"use client";

import { useState,useEffect } from "react";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    if(!isMounted) return null;

    return (
        <>
        <AuthModal />
        <UploadModal />
        </>
    );
}

export default ModalProvider;