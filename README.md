# Mod-08-Assignment

## Node.js Project

I developed a simple Node.js server to handle HTTP requests and serve HTML and CSS files. The server responds to different routes and includes a custom 404 page for undefined routes.

### Installation and Setup

1. Cloned the repository and navigated into the project directory:
    ```bash
    git clone https://github.com/Hassansherafatmand/Mod-08-Assignment.git
    cd Mod-08-Assignment
    ```

2. Ensured Node.js was installed.

### Server Implementation

Using Node.js `http`, `fs`, and `path` modules, I set up a server that listens on `127.0.0.1:8080` and serves files based on the URL.

### Functionality

- **serveFile(filePath, res, contentType)**: Reads and sends the specified file as a response, serving a custom 404 page if the file is not found.

### Routes and Responses

- `/` or `/index.html`: Serves `index.html`.
- `/about.html`: Serves `about.html`.
- `/contact-me.html`: Serves `contact-me.html`.
- `/styles.css`: Serves `styles.css`.
- Any other route: Serves `404.html`.

### Running the Server

To start the server, run:
node index.js
