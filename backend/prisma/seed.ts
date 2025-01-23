import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const cards = await prisma.card.createMany({
    data: [
      {
        imageURL: 'https://picsum.photos/id/100/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/101/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/102/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/103/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/104/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/106/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/107/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/108/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/109/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/110/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/111/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/112/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/113/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/114/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/115/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/116/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/117/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/118/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/119/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/120/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/121/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/122/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/123/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/124/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/125/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/126/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/127/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/128/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/129/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/130/200/300',
      },
      {
        imageURL: 'https://picsum.photos/id/131/200/300',
      },
    ],
  });

  const scoreBoard = await prisma.scoreBoard.createMany({
    data: [
      {
        name: 'John Doe',
        clicks: 40,
        timesInSeconds: 40,
      },
      {
        name: 'Jane Doe',
        clicks: 50,
        timesInSeconds: 50,
      },
      {
        name: 'John Smith',
        clicks: 60,
        timesInSeconds: 60,
      },
    ],
  });

  console.log({ cards, scoreBoard });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
