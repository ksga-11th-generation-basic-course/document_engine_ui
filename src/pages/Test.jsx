import React from "react";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");

export const Test = () => {
  const [message, setMessage] = useState("");
  const [messageReceive, setMessageReceive] = useState([]);
  const [room, setRoom] = useState("");

  const join = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceive((prev) => [...prev, data.message]);
    });
  }, [socket]);

  return (
    <div className="bg-white h-screen">
      <input
        placeholder="Message..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
      <input placeholder="Room..." onChange={(e) => setRoom(e.target.value)} />
      <button onClick={join}>Join</button>
      <h1>
        Message :{" "}
        {messageReceive.map((val) => (
          <p>{val}</p>
        ))}
      </h1>
    </div>
  );
};
