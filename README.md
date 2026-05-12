# Tic Tac Toe Game

A dark-themed React and TypeScript Tic Tac Toe game with score tracking, game history, and Docker support.

![Dark Tic Tac Toe gameplay](docs/screenshots/app-dark-gameplay.png)

## Clone And Run Locally

Clone the project:

```bash
git clone https://github.com/bader2424/tic-tac-game.git
cd tic-tac-game
git switch helm
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:5173
```

## Run With Docker Compose

Build and start the app:

```bash
docker compose up --build
```

Open:

```text
http://127.0.0.1:8080
```

Stop the app:

```bash
docker compose down
```

## Run With Plain Docker

Build the image:

```bash
docker build -t tic-tac-game:local .
```

Run the container:

```bash
docker run --rm -p 8080:80 tic-tac-game:local
```

Open:

```text
http://127.0.0.1:8080
```
