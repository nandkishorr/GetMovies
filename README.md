# GetMovies

A React application for reviewing movies. Users can search for movies, mark them as favourites, store favourites in local storage, and find movies from the favourite list.

## Features

- Display a list of movies.
- Search for movies.
- Mark movies as favourites.
- Store favourite movies in local storage.
- View and search through favourite movies.

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/movie-reviewer.git
    cd movie-reviewer
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Start the development server:**

    ```sh
    npm start
    ```

    The application will be available at `http://localhost:3000`.



   
4. **Similarly the vite frontend file is opend with yarn:**
   
   ```sh
    npm yarn
    ```
    
   The application will be available at `http://localhost:5173`.
   
## Usage

- **Search for a movie**: Use the search bar to filter movies by title.
- **Add to favourites**: Click the favourite icon on a movie.
- **View favourites**: Navigate to the "Favourites" page to see and search through your favourite movies.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-feature-branch`
5. Open a pull request.

## End points

1. Get Movies [GET /api/movies].
2. Search Movies [GET /api/movies/search?title={title}].

## .ENV Variables

**Front-End Url**:

    1. BASE_URL="http://localhost:3000" (domain of back-end api)
    
**Back-End Url**:  

    1. MONGODB_URL="mongodb connection url"
    
## Links

- **Frontend Url**: [Live Demo](https://get-movies-gamma.vercel.app)
-  **Backend Url**: [Live Demo](https://getmovies-backend-a11o.onrender.com)
-   **Backend Repo**: [Repo Link](https://github.com/nandkishorr/GetMovies-backend.git)




