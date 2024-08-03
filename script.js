document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const loadingDiv = document.getElementById('loading');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    fetchButton.addEventListener('click', async () => {
        const entity = document.getElementById('entity').value;
        const id = document.getElementById('id').value;

        // Очистка полей
        resultDiv.innerHTML = '';
        errorDiv.innerHTML = '';
        loadingDiv.style.display = 'block';

        try {
            const response = await fetch(`https://swapi.py4e.com/api/${entity}/${id}/`);
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }

            const data = await response.json();
            loadingDiv.style.display = 'none';
            displayResult(data);
        } catch (error) {
            loadingDiv.style.display = 'none';
            errorDiv.textContent = `Произошла ошибка: ${error.message}`;
        }
    });

    function displayResult(data) {
        resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    }
});
