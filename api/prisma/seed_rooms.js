const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const roomData = [
  {
    type: "Cozy",
    isMaintaining: false,
  },
  {
    type: "Cozy",
    isMaintaining: false,
  },
  {
    type: "Chillout",
    isMaintaining: false,
  },
  {
    type: "Chillout",
    isMaintaining: false,
  },
  {
    type: "Party",
    isMaintaining: false,
  },
];

prisma.room
  .createMany({
    data: roomData,
  })
  .then(() => {
    console.log("Seeded the database with initial rooms");
  })
  .catch((err) => {
    console.log("Error seeding the database with initial rooms");
    console.log(err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
