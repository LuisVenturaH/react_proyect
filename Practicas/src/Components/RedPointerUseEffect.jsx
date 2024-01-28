import React, { useEffect, useState } from "react";

export default function RedPointUseEffect({ children }) {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        function handleMove(e) {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('pointermove', handleMove)
        return () => {
            window.removeEventListener('pointermove', handleMove)
        }
    }, [])

    return(
    <div style={{
        position: 'absolute',
        backgroundColor: 'green',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,        
    }} 
    {...children}
    />
    )
}