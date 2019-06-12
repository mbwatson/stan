import { useState, useEffect } from 'react'

let defaultWidth

// This conditional makes the build work.
// The browser handles this fine during development.
// However, Node has no window object, so we check here to see if it exists.
if (typeof window !== 'undefined') {
    defaultWidth = window.innerWidth
}

export const useWindowWidth = (initialWidth = defaultWidth) => {
    const [width, setWidth] = useState(initialWidth)
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    
    return [width, setWidth]
}
