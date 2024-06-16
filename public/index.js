async function fetchData(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    try {
        const response = await fetch('/api/data');
        const data = await response.text(); // Assuming the response is plain text
        document.getElementById('data').value = data; // Update the textarea content
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    fetch('/');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetch-data').addEventListener('click', fetchData);
});