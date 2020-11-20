# Freespee Dogs

This is a skeleton for a fullstack application. Fork this repository and submit a PR with your implementation. Follow the requirements in REQUIREMENTS.md.

## Development

Set up your own `.env` file

```
cp apps/api/.env.example apps/api/.env
```

Install dependencies

```
yarn
```

Start docker

```
docker-compose up
```

Run the migrations and seed the database

```
yarn migrate
```

Start the backend API

```
yarn start api
```

Start the angular application

```
yarn start
```

## Tests

Run the frontend tests

```
yarn test
```

Run the backend tests

```
yarn test api
```
