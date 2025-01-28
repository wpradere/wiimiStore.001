"use client"

import React, { useState } from "react";

const WhatsappFloating = () => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => setVisible(false);

    return (
        visible && (
            <div className="fixed bottom-5 right-5 z-50 flex items-center justify-center bg-green-500 p-3 rounded-full">
                <a
                    href="https://wa.me/573507798422"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-12 h-12"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                        className="w-full h-full"
                    />
                </a>
                {/*boton de whasapp cerrar */}
                {/*
                <button
                    onClick={handleClose}
                    className="absolute top-0 right-0  text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer text-xs"
                >
                    X
                </button>
                */}
            </div>
        )
    );
};

export default WhatsappFloating;
