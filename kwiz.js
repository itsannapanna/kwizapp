// Get all genre buttons
const genreButtons = document.querySelectorAll('.genre-button');

// Add event listeners to each button
genreButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Extract genre from button class (replaces spaces with hyphens)
    const genre = button.className.replace(/\s+/g, '-').replace('genre-button', '');

    // Store genre in session storage and redirect to quiz page
    sessionStorage.setItem('quizGenre', genre);
    window.location.href = 'quiz.html';
  });
});
