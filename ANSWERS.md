# Unit-3/Sprint-3 - Sprint Challenge - Answers

-   [x] Explain what a token is used for.

    >   A token -- in our case, a JWT (JSON Web Token) -- is used to authenticate and verify a user's permissions in an application.

-   [x] What steps can you take in your web apps to keep your data secure?

    >   We can make sure to never store sensitive information in plain text, to clear any potentially senstive information either periodically or when exiting our app, to both authenticate and periodically **re**-authenticate users, and to use HTTP*S* for our requests.

-   [x] Describe how web servers work.

    >   Web servers are busy programs that buzz around waiting for requests. When a web server receives a request, it gets a little hit of electro-dopamine, and proceeds to process the request. Some types of requests that we've used are the `POST`, `GET`, `PUT`, and `DELETE` requests, but there are more out there. After the server processes the request, it responds to the requester with a status code (a number indicating whether or not the server is happy with the request) and maybe a longer message.

-   [x] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    >   **CRUD** stands for **C**reate, **R**ead, **U**pdate, **D**elete. Here is how they map to the HTTP requests we know:
    >
    >   **C**reate : `POST`
    >
    >   **R**ead : `GET`
    >
    >   **U**pdate : `PUT`
    >
    >   **D**elete : `DELETE`
