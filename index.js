fetch('blogs.md')
    .then(response => response.text())
    .then(content => {
        console.log(content);
    })
    .catch(error => {
        console.log('Error fetching in blogs:', error);
});