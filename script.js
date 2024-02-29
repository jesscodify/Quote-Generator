const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', getQuote);

function getQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteText.textContent = `"${data.content}"`;
            authorText.textContent = `- ${data.author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteText.textContent = 'Failed to fetch quote. Please try again later.';
            authorText.textContent = '';
        });
}

// Initial Quote on Page Load
getQuote();
