document.addEventListener("DOMContentLoaded", () => {
    fetch('YOUR_BACKEND_API_URL')  // Replace with your backend API URL
        .then(response => response.json())
        .then(data => {
            const eventCount = data.totalEvents;  // Assuming backend returns { totalEvents: number }
            document.getElementById('eventCount').innerText = eventCount;
        })
        .catch(error => console.error('Error fetching event count:', error));
});
