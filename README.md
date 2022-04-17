#Inspiration
We, as many in our generation, care deeply about our environment. In recent years, we've heard horror stories about the state of our environment, and in particular, our climate. We've seen trash on our neighborhood sidewalks and even our beloved school's courtyards. However, whenever we came across a piece of recyclable material, we didn’t know the proper way to dispose of it. We wanted to be part of the solution to this grave problem, and so we created SmartDisposal, an app that allows you to classify photos of trash you find and identifies the nearest disposal centers to dispose of your garbage.

#What it does
SmartDisposal is a cutting-edge app with crisp visual design and aesthetic charts/analytics. Any time you're on a morning or afternoon stroll and you find a piece of waste, you can whip out your phone, open up the beautiful SmartDisposal app, snap a photo of your garbage, and 1) identify your garbage through our intelligent machine learning API, 2) find the nearest disposal centers for that type of garbage with our map API, and 3) read interesting facts about the object.

#How we built it
We used React Native and Expo to initialize the mobile app and used various Expo/Reactive Native libraries to access native phone features like the phone's location and camera. For our map page we used an uncommon map API called MapBoxGL because it was free to use and had all the features we wanted. We also used SQLite for our database because it was easy to use. We also used a Tensorflow computer vision model trained on the COCO dataset for the waste classifier. We used GitHub to host our code and share it with all the other team members.

#Challenges we ran into
Since much of the technologies that we used in this app were new to us, like SQLite for the database and Postman for the API, it took us a lot of time to become familiar with these technologies. In addition, since we had little experience using Android Studio, implementing all our technologies without compatibility issues was a major challenge. Although we found it difficult to maintain proper version control of our SDKs, libraries, and frameworks, we were able to use GitHub to properly collaborate and resolve merge conflicts.

#Accomplishments that we're proud of
Our most major accomplishment was being able to send Base64 images to our API and process/classify them. This step was fraught with errors, so we were really happy when it worked. We are also proud that we were able to actually integrate everything together in an aesthetic package, SmartDisposal.

#What we learned
We learned how to set up a local database on a React Native app and how to send information between a mobile app and an API. We also learned how to use new APIs like Mapbox GL in our implementation for Smart Disposal.

#What's next for Smart Disposal
A potential next step is improving the accuracy of our classifier, as it can occasionally misclassify images, and increase the possible materials the classifier can identify. Additionally, we've thought of creating a web app to accompany our mobile app so people can easily access this if they can't download the app.
