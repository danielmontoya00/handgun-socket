// JWT
//2e89ed9e7c282bc38037c1cb3602b4e988c98859a85546313b4bace46514febfffef5f4368f515d5fef29768545498ecfc566446cc3eaac288f565c2eae7d37b1351f9b8e942488f13e9184ec482c4972b2cd4f1cc1dd1ebad92e786b36512c219ee48fbdf89be64bfa2c69aff73e6e14b228dae80fa072583645b0b1c176b7c
const { Server } = require("socket.io");
const io = new Server(3000);

const admins = [];

io.on("connection", function(socket) {
  console.log("usuario conectado");

  socket.on("incidente", function(data) {
    console.log("Existe un nuevo incidente.");

    for(let i = 0; i < admins.length; i++) {
        io.sockets.socket(admins[i]).emit(data);
    }
  });

  socket.on("admin", function(data) {
    admins.push("socket.id");
  });
});