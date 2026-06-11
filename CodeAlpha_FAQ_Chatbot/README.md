# CodeAlpha AI Learning Assistant Chatbot

## About the Project

The AI Learning Assistant Chatbot is an NLP-based chatbot developed as part of the CodeAlpha Artificial Intelligence Internship. The chatbot is designed to answer common Artificial Intelligence (AI) questions by identifying the most relevant FAQ and providing an appropriate response.

This project demonstrates the application of Natural Language Processing (NLP), text preprocessing, and similarity-based question matching to create an interactive FAQ chatbot.

## Features

* Answers frequently asked questions related to Artificial Intelligence
* Uses NLP techniques for text preprocessing
* Performs tokenization and stopword removal using NLTK
* Converts text into numerical vectors using TF-IDF
* Finds the most relevant answer using Cosine Similarity
* Provides an interactive command-line chatbot experience

## Technologies Used

* Python
* Pandas
* NLTK
* Scikit-Learn
* TF-IDF Vectorizer
* Cosine Similarity

## Project Structure

CodeAlpha_AI_Learning_Assistant_Chatbot

├── faq_chatbot.py

├── faqs.csv

└── README.md

## How It Works

1. AI-related FAQs are stored in a CSV file.
2. User queries are preprocessed using NLTK.
3. TF-IDF Vectorizer converts text into numerical vectors.
4. Cosine Similarity compares the user's question with stored FAQs.
5. The chatbot retrieves and displays the most relevant answer.

## Sample Questions

* What is AI?
* What is NLP?
* What are chatbots?
* What is Generative AI?
* What skills are required for AI?

## Sample Interaction

**User:** What is AI?

**Chatbot:** AI enables machines to perform tasks that normally require human intelligence.

**User:** What is NLP?

**Chatbot:** NLP helps computers understand and process human language.

## Future Enhancements

* Add a graphical user interface (GUI)
* Expand the FAQ dataset
* Integrate voice-based interaction
* Support multiple languages
* Improve response accuracy with advanced NLP techniques

## Learning Outcomes

Through this project, I gained practical experience in:

* Natural Language Processing (NLP)
* Text Preprocessing
* TF-IDF Vectorization
* Cosine Similarity
* Python Programming
* Building FAQ-based Chatbots

## Author

**Abinaya KP**

AI Intern – CodeAlpha
