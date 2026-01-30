// Get elements
const reviewForm = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");

// Function to handle review form submission
reviewForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the values from the form
    const bookTitle = document.getElementById("bookTitle").value;
    const authorName = document.getElementById("authorName").value;
    const reviewText = document.getElementById("reviewText").value;
    const rating = document.getElementById("rating").value;

    // Create a new review object
    const review = {
        bookTitle,
        authorName,
        reviewText,
        rating
    };

    // Call the function to display the new review
    displayReview(review);

    // Reset the form after submission
    reviewForm.reset();
});

// Function to display the review
function displayReview(review) {
    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");

    reviewDiv.innerHTML = `
        <h3>${review.bookTitle} by ${review.authorName}</h3>
        <p><strong>Rating:</strong> <span class="rating">${review.rating}</span></p>
        <p>${review.reviewText}</p>
    `;

    reviewList.appendChild(reviewDiv);
}
