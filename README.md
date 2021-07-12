# resumebuilder
Built using React.JS and Spring/Java

See it in action (kind of):

https://sharon-resumebuilder.netlify.app

Backend is deployed here:
https://sharon-resumebuilder.herokuapp.com/

(It will show a "whitelabel" error since there's no frontend, but if you go to something like this link:

https://sharon-resumebuilder.herokuapp.com/resumes/1

It will display the json data at the given endpoint.)

Note: Netlify's data retrieval (in my experience) is very very very slow. The /view and /pdf pages may not even load.
It's better to just run it locally on your own computer

# First Page (Enter your info):

![Screen Shot 2021-07-11 at 2 17 37 PM](https://user-images.githubusercontent.com/49866981/125185543-0ee7be00-e258-11eb-8cdd-9e7f738fe7e6.png)

![Screen Shot 2021-07-11 at 2 17 47 PM](https://user-images.githubusercontent.com/49866981/125185557-2161f780-e258-11eb-95b1-e91c34ac385d.png)

![Screen Shot 2021-07-11 at 2 17 55 PM](https://user-images.githubusercontent.com/49866981/125185565-28890580-e258-11eb-900b-4c78109f78c3.png)

Follow link to second page.
# Second Page (Table of all resume entries created during session)

![Screen Shot 2021-07-11 at 2 20 07 PM](https://user-images.githubusercontent.com/49866981/125185572-2de65000-e258-11eb-9197-772d8b6b2d33.png)

Follow links to individual Pdf.
# Example Pdf:

![Screen Shot 2021-07-11 at 2 20 42 PM](https://user-images.githubusercontent.com/49866981/125185577-350d5e00-e258-11eb-978a-461011a431c7.png)

# Running on your computer:
First, download the files on your computer

To run:
In terminal, navigate to the resumebuilder folder.

Run this command:

$ ./mvnw spring-boot:run

In a new tab of terminal, navigate to the resumebuilder folder.
Then cd into frontend:

$ cd frontend

Install the node modules:
$ npm install

Run this command:
$ npm start

This will open up localhost:3000 in your default browser.
