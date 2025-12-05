FROM node:20

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies including tailwind
RUN npm install

# Copy all project files (including tailwind.config.js and postcss.config.js)
COPY . .

EXPOSE 5173

ENV CHOKIDAR_USEPOLLING=true

CMD ["npm", "run", "dev", "--", "--host"]
