# Mini Diary Backend

## :gear: Run the project locally

### Requirements
- [NodeJS in its LTS version](https://nodejs.org/en/download/)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Dbeaver](https://dbeaver.io/download/)
- Docker

### Commands

- Clone this repository

```
git clone https://github.com/rubemfsv/Mini-Diary-Backend.git
```

- Install the postgres image on your docker container by the following code (note we are using port 5430 in our postgres in this project):
```
docker run --name postgres_diary -e POSTGRES_PASSWORD=docker -p 5430:5432 -d postgres
```

- Start postgres image
```
docker start postgres_diary
```

- Open the Dbeaver and create a new connection with Postgres. Change the port to 5430 and in the password, you type "docker", as you have defined above when create a postgres image on docker.

- After that, create a new database in yout postgres connection inside Dbeaver. Write "mini_diary" in the database name. 

- In the project folder, install all the dependencies indicated in the package.json
```
yarn 
```

- Run the project
```
yarn start
```

#### Have fun!
