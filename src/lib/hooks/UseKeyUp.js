import { useState, useEffect } from 'react'

const useKeyUp = () => {
    let [keyUp, setKeyUp] = useState()

    const handleKeyPress = (e) => {
        setKeyUp(e.code)
        setTimeout(() => {
            setKeyUp(null)
        }, 50)
    }


    useEffect(() => {
        window.addEventListener('keyup', handleKeyPress)
        return (() => {
            window.removeEventListener('keyup', handleKeyPress)
        })
    })

    return keyUp
}

export default useKeyUp