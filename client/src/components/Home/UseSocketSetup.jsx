import {useContext, useEffect} from "react";
import socket from "../../socket"
import {AccountContext} from "../AccountContext";

const useSocketSetup = () => {
    const {setUser} = useContext(AccountContext)
    useEffect(() =>{
        socket.connect()
        socket.on("connect_error", () => {
            console.log('yes')
            setUser({loggedIn: false})
        })
        return () => {
            socket.off("connect_error");
        }
    }, [setUser])
}

export default useSocketSetup;