# SmartDisposalApp
An app for smart disposal of waste. Utilizes a computer vision model to classify a photo of waste and uses a map API to find disposal centers closest to your location for the waste.

# Inspiration
We, as many in our generation, care deeply about our environment. In recent years, we've heard horror stories about the state about our environment, and in particular, our climate. We've seen trash on our neighborhood sidewalks and even our beloved school's courtyards. We wanted to be part of the solution to this grave problem, and so we created SmartDisposal, an app that allows you to classify photos of trash you find and identifies the nearest disposal centers to dispose of your garbage.

# What it does
SmartDisposal is a cutting-edge app with crisp visual design and aesthetic charts/analytics.  Any time you're on a morning or afternoon stroll and you find a piece of waste, you can whip out your phone, open up the beautiful SmartDisposal app, snap a photo of your garbage, and 1) identify your garbage through our intelligent machine learning API, and 2) find the nearest disposal centers for that type of garbage with our map API.   

# How we built it
We used React Native and Expo to initialize the mobile app and used various Expo/Reactive Native libraries to access native phone features like the phone's location and camera. We also used a Tensorflow computer vision model trained on the COCO dataset for the waste classifier.

# Challenges we ran into
Since much of the technologies that we used in this app were new to us, like SQLite for the database and Postman for the API, it took us a lot of time to become familiar with these technologies. Additionally, it took us a lot of time to debug our code (especially because some of it had very little documentation associated with it).

# Accomplishments that we're proud of
Our most major accomplishment was being able to send Base64 images to our API and process/classify them. This step was fraught with errors, so we were really happy when it worked.

# What we learned
We learned how to set up a local database on a React Native app and how to send information between a mobile app and an API.

# What's next for Smart Disposal
A potential next step is improving our classifier, as it can occasionally misclassify images. Additionally, we've thought of creating a web app to accompany our mobile app so people can easily access this if they can't download the app.