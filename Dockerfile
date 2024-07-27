
# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

ENV MONGODB_URI=mongodb+srv://tejes14319:test@friday.euxoeki.mongodb.net/?retryWrites=true&w=majority&appName=friday
ENV AUTH_SECRET=rIkQehotA59V4k+VL0ZA+Pai+CCs6bssgP+Wjz9MCRE=
ENV AUTH_RESEND_KEY=re_R2F2S3Q8_HBBHNAwsWuHAHrPPZ74SVWHn
ENV NODE_ENV=production
ENV OPENAI_API_KEY=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

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]
