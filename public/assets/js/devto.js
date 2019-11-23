/*
 * 
 * Creates a DEV feed of posts.
 * @constructor
 * @param {Element} elem - Place list of posts inside this element.
 * @param {string} username - DEV username, e.g. 'ben'.
 * @param {number} numberOfPosts - Number of posts to list. 
 */

function createFeed(elem, username, numberOfPosts = 1) {
    const feed = document.createElement('ul');
    feed.classList.add('dev-feed-list');
    getPosts(username)

        // With our posts array
        .then(function (posts) {
            posts.length = numberOfPosts;
            posts.forEach(function (post) {

                // We create an element for each item
                const item = document.createElement('li');
                item.classList.add('dev-feed-item');

                // As well as a link for users to click through
                const link = document.createElement('a');
                link.href = post.url;
                link.innerText = post.title;

                // ul -> li -> a
                item.appendChild(link);
                feed.appendChild(item);
            });

            // Attach the list of posts, rendering it
            elem.appendChild(feed);
        });
}