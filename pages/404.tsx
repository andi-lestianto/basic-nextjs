import { useRouter } from "next/router";
import { useEffect } from "react"

export default function Custom404() {

    const userouter = useRouter();

    useEffect(() => {
        setTimeout(() => {
            userouter.push('/')
        }, 2000);
    }, [])

    return (
        <>
            <h1 className="title-not-found">Opss...</h1>
            <p className="title-not-found">Page not found</p>
        </>
    )
}
