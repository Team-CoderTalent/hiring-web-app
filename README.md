#hiring-web-app

Who's still hiring in London? 

With the rise of #layoffs in the past few weeks due #covid19. 
To anyone who has lost their job. It ain't over!

My team and I have developed a simple web app that lists all the companies #NowHiring talent in London. If you are looking for a job or want to list a job, here it is!

[http://who-is-hiring.codertalent.io/](http://who-is-hiring.codertalent.io/)
---
### Installation 

```bash
cd backend && yarn install
cp env.sample .env.development 
cd ../client && yarn install
```
or with docker:

```bash
docker-compose up --build
```
---
### Start

```bash
cd backend && yarn dev
cd client && yarn start
open http://localhost:3000/
```

or with docker:

```bash
open http://localhost:8082/
```
---

