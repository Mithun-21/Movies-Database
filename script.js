function searchMovies() {
    let query = document.getElementById("searchInput").value;

    if (!query) {
        alert("Please enter a movie title");
        return;
    }

    fetch(`http://localhost:3000/search?query=${query}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("Failed to fetch movies");
        });
}

function displayResults(data) {
    const resultsContainer = document.getElementById('movieResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (data.Search) {
        data.Search.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            movieDiv.innerHTML = `
                <h3>${movie.Title}</h3>
                <p>Year: ${movie.Year}</p>
                <img src="${movie.Poster}" alt="${movie.Title} Poster">
            `;
            resultsContainer.appendChild(movieDiv);
        });
    } else {
        resultsContainer.innerHTML = 'No movies found.';
    }
}


