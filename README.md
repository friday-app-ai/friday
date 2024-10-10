
# Friday - Personalized Education with AI

## Overview

**Friday** is an AI-powered educational platform that customizes learning experiences by designing personalized courses based on user preferences. It uses advanced technologies to offer real-time question tracking, exams, and AI interviews with text-to-speech functionality, providing an adaptive and interactive learning environment.

## Features

- **Personalized Learning**: Courses are dynamically generated based on user preferences and learning history.
- **Real-Time Question Tracking**: Monitors user progress and adjusts content accordingly in real time.
- **Exams and Assessments**: Provides custom exams to evaluate user knowledge and skills.
- **AI Interviews**: Simulates AI-driven interviews using text-to-speech to enhance the learning experience.

## Tech Stack

- **Frontend**: 
  - **Next.js**: For building the user interface and server-side rendering.
  
- **Backend**:
  - **Node.js**: Handles server-side logic and API routes.
  - **LangChain**: Powers the AI-driven course generation and interview simulation.
  
- **Database**: 
  - **MongoDB**: Stores user data, course progress, and learning preferences.
  
- **Cloud Services**:
  - **Google Cloud Platform (GCP)**: Used for hosting, data storage, and scalable infrastructure.
  
- **AI & NLP**:
  - **Text-to-Speech**: Converts interview text into speech for AI-driven interactions.
  - **Large Language Models (LLMs)**: Utilized for course generation and question-answering features.

## Installation

1. **Clone the repository**:
   ```bash
    git clone  https://github.com/friday-app-ai/friday
   ```

2. **Install dependencies**:
   Navigate to the project folder and run:
   ```bash
   cd friday-ai-education-platform
   npm install
   ```

3. **Set up MongoDB**:
   - Ensure MongoDB is running locally or set up your MongoDB Atlas instance.
   - Add the MongoDB connection string to your `.env` file:
     ```
     MONGO_URI=<your-mongodb-connection-string>
     ```

4. **Configure GCP Services**:
   - Set up GCP services such as storage and compute instances for hosting the platform.
   - Add relevant GCP credentials in the `.env` file:
     ```
     GCP_KEY=<your-gcp-api-key>
     ```

5. **Run the application**:
   ```bash
   npm run dev
   ```

6. **Access the platform**:
   Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Usage

1. **Create a New User**: 
   - Sign up and provide learning preferences, such as subject areas, difficulty level, and learning goals.
   
2. **Start a Course**: 
   - The system will generate a personalized course based on your inputs and previous progress.

3. **Real-Time Question Tracking**:
   - As you go through the material, Friday tracks your understanding and adjusts content dynamically to suit your pace.

4. **Exams and AI Interviews**:
   - Take custom-designed exams or participate in AI interviews with text-to-speech for simulated learning interactions.



## Future Enhancements

- **Multilingual Support**: Add support for more languages in the AI interviews and course generation.
- **Mobile App**: Build a mobile version of the platform for wider accessibility.
- **AI-Driven Feedback**: Implement personalized feedback for each user after exams or interviews based on performance.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with any improvements, bug fixes, or new features.


