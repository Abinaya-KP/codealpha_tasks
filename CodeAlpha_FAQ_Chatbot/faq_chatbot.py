import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load FAQ data
faq_data = pd.read_csv("faqs.csv")

questions = faq_data["Question"]
answers = faq_data["Answer"]

# Convert questions into vectors
vectorizer = TfidfVectorizer()
faq_vectors = vectorizer.fit_transform(questions)

print("FAQ Chatbot Started!")
print("Type 'exit' to quit.")

while True:
    user_input = input("\nYou: ")

    if user_input.lower() == "exit":
        print("Chatbot: Goodbye!")
        break

    # Convert user question into vector
    user_vector = vectorizer.transform([user_input])

    # Find similarity
    similarity = cosine_similarity(user_vector, faq_vectors)

    # Get best matching question
    best_match = similarity.argmax()

    # Check similarity score
    if similarity[0][best_match] > 0.2:
        print("Chatbot:", answers[best_match])
    else:
        print("Chatbot: Sorry, I don't understand that question.")