# Memory Matching Game

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
