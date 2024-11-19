import { useEffect } from "react"

const useClickOutside = (ref, callback, shouldIgnore = false) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target) && !shouldIgnore) callback()
    }

    document.addEventListener("click", handleClickOutside, { capture: true })

    return () => document.removeEventListener("click", handleClickOutside, { capture: true })
  }, [ref, callback, shouldIgnore])
}

export default useClickOutside
