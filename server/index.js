const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A client connected.");

  socket.on("disconnect", () => {
    console.log("A client disconnected.");
  });

  socket.on("remove_workspace", (workspaceId) => {
    socket.broadcast.emit("remove_workspace_success", workspaceId);
  });

  socket.on("remove_member", (workspaceIdProp) => {
    console.log(workspaceIdProp);
    socket.broadcast.emit("remove_member_success", workspaceIdProp);
  });
});

server.listen(3001, () => {
  console.log("Server is running");
});
