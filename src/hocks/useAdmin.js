import { useEffect, useState } from "react"



const useAdmmin = email => {
    const [isAdmin, setIsAdmin] = useState(false)

    const [isAdminLoading, setIsAdminLoadig] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://laptop-resell-server-cyan.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsAdmin(data.isAdmin)

                    setIsAdminLoadig(false)
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useAdmmin;