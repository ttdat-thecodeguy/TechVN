//// Deprecated

import React, { createContext } from "react";
import { WS_MESSAGE } from "../../constraints/Config";
import { useDispatch } from "react-redux";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
const WebSocketContext = createContext(null);

export { WebSocketContext };
const SocketProvider = ({ children }) => {
  let socket;

  if (!socket) {
    var sock = new SockJS(WS_MESSAGE);
    let stompClient = Stomp.over(sock);
    stompClient.connect(
      { username: "test" },
      function (frame) {
        stompClient.subscribe("/users/queue/messages", (messeage) => {
          console.log(messeage.body);
        });
      },
      (err) => console.log(err)
    );
  }

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
};
export default SocketProvider;
