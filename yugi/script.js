async function fetchRandomCard() {
    try {
        const response = await fetch('https://db.ygoprodeck.com/api/v7/randomcard.php');
        if (response.ok) {
            const card = await response.json();
            displayCardImage(card);
        } else {
            alert('Failed to fetch card. Please try again.');
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
        console.error(error);
    }
}

function displayCardImage(card) {
    const cardInfoDiv = document.getElementById('card-info');
    cardInfoDiv.innerHTML = `
        <img src="${card.card_images[0].image_url}" alt="${card.name}">
    `;
}
