# Memory Matching Game

## deployed version

frontend: https://memory-game-frontend-lfp1.onrender.com

backend (swagger): https://memory-game-backend-vc9i.onrender.com/api

if can't play because server down please waiting for 2 minute sever auto re-deploy
ps. I use free plan so server very low speed

## How to run Frontend

### Run on local

move to directory `/frontend` then type following command

```
pnpm install
pnpm run dev
```

## How to run backend

### Run with docker

move to directory `/backend` then type following command

```
docker-compose up
```

then migrate seed ONLY ONCE

need to create file .env in root of `/backend`
and push env
`DATABASE_URL="postgres://myuser:mypassword@localhost:5432/memoryGame"`'

then type following command to migrate seed

```
npx prisma db push
npm run seed
```
