function search() {
    const input = document.getElementById('search').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    fetch('travel_recommendations_api.json')
        .then(response => response.json())
        .then(data => {
        const country = data.countries.find(c=>c.name.toLowerCase() === input);
            if (!country) {
            resultDiv.innerHTML = "Country not found";
            return;
        }
            resultDiv.innerHTML +=`<h2>${countries.name}</h2>`;
            countries.cities.forEach(city => {
                resultDiv.innerHTML +=`<div class="city_card">
                <h3>${city.name}</h3>
                <p>${city.description}</p>
                </div>`;
            });
        })
        .catch(err => {
            resultDiv.innerHTML = "Error loading data.";
            console.error(err);
        });
        function reset() {
            document.getElementById('search').value = "";
            document.getElementById('result').innerHTML = "";
        }
}