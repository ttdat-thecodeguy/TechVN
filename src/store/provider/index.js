import React, { createContext } from 'react'
import { WS_MESSAGE } from '../../constraints/Config'
const WebSocketContext = createContext(null)
export { WebSocketContext }
const SocketProvider = ({ children }) => {
    let ws;
    
    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    );
}
export default SocketProvider;