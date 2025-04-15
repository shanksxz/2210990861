A simple social media analytics dashboard built with React, TypeScript, and Tailwind CSS.

## Features
- **Top Users Page**: Displays the top 5 users with the highest number of posts
- **Trending Posts**: Shows posts with the maximum number of comments
- **Real-time Feed**: Dynamic feed showing the latest posts with auto-refresh

## Tech Stack
### Frontend
- React 18
- TypeScript
- Tailwind CSS
- React Router
- Tanstack Query
- Axios
- Vite

### Backend
- Node.js
- Express
- Axios
- CORS

## Project Structure 

```
server/
├── src/
│ ├── routes/
│ ├── controller/
│ ├── services/
│ └── types/
```

```
client/
├── src/
│ ├── features/
│ ├── components/
│ ├── services/
│ ├── types/
│ └── routes/
```

## Installation
### Backend

```
cd server
mv .env.example .env # add your own env variables
pnpm install
pnpm run dev
```

### Frontend

```
cd client
pnpm install
pnpm run dev
```
