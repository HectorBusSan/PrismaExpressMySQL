const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });
    const explorer1= await prisma.post.upsert({
      where: {id: 1 },
      update: {},
      create: {
        name: 'Explorer1',
        lang: "es",
        missionCommander: "Node",
        enrollment:1
      }
    });
    const explorer2= await prisma.post.upsert({
      where: {id: 2 },
      update:{},
      create:{
        name: 'Explorer2',
        lang: "es",
        missionCommander: "Node",
        enrollment:1
      }
    });
    const explorer3= await prisma.post.upsert({
      where: {id: 3 },
      update:{},
      create:{
        name: 'Explorer1',
        lang: "es",
        missionCommander: "Java",
        enrollment:1
      }
    });
    const explorer4= await prisma.post.upsert({
      where: {id: 4 },
      update:{},
      create:{
        name: 'Explorer4',
        lang: "es",
        missionCommander: "Java",
        enrollment:1
      }
    });
    const explorer5= await prisma.post.upsert({
      where: {id: 5 },
      update:{},
      create:{
        name: 'Explorer5',
        lang: "es",
        missionCommander: "Java",
        enrollment:1
      }
    });
    console.log('Create explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

// (async function main() {
//   try{
//     
//   }catch(e){
//     console.error(e);
//     process.exit(1);
//   }finally{
//     await prisma.$disconnect();
//   }
// })