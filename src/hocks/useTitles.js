import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - LaptopResale.com`
    }, [title])
}

export default useTitle;