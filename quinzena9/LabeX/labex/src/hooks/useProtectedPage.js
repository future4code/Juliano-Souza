import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useProtectedPage() {
    
    let navigate = useNavigate();

    const token = localStorage.getItem('Token')

    useEffect(() => {

        if (!token) {
            navigate(`/login`);
        } 

    }, [navigate, token])
    
    return
}