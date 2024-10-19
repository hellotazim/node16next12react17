import {useEffect} from "react";

export default function AdminRedirect(){

    useEffect(() => {
        const host = window.location.hostname;
        const subdomain = host.split('.')[0];
        window.location.href = `https://hotel.managebeds.app?projectRef=${subdomain}`
    }, []);

    return (
        <div>Redirecting...</div>
    )
}