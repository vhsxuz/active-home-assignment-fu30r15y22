import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Clear existing data
  await prisma.nFT.deleteMany();

  const nfts = [];
  for (let i = 1; i <= 142; i++) {
    nfts.push({
      name: `Metaverse Explorer #${i}`,
      description: `A unique digital collectible representing achievement #${i} in the NFT Campaign.`,
      image: `https://api.dicebear.com/7.x/identicon/svg?seed=nft-${i}`,
      ownerAddress: i % 2 === 0 ? '0x1234567890123456789012345678901234567890' : null,
    });
  }

  for (const nft of nfts) {
    await prisma.nFT.create({
      data: nft,
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
