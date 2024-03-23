/*
    Shazib Amjad
    100889284
    2024-03-22
    Lab 3 - js file
*/



document.addEventListener("DOMContentLoaded", function() {
    const blogContainer = document.getElementById('blog-posts');

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const card = document.createElement('div');
                card.classList.add('card');

                const title = document.createElement('h2');
                title.textContent = post.title;

                const body = document.createElement('p');
                body.textContent = post.body;

                card.appendChild(title);
                card.appendChild(body);

                // Making a request to Pixabay API for images
                fetch(`https://pixabay.com/api/?key=shazib12&q=${post.title}&image_type=photo`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.hits && data.hits.length > 0) {
                            const image = document.createElement('img');
                            image.src = data.hits[0].webformatURL; // Use the first image from the response
                            card.appendChild(image);
                        }
                    })
                    .catch(error => console.error('Error fetching image:', error));

                blogContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching blog posts:', error);
        });
});
