document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dataForm');
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting normally

        // Get form values
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;

        // Create a new row
        const newRow = tableBody.insertRow();
        const nameCell = newRow.insertCell(0);
        const ageCell = newRow.insertCell(1);

        nameCell.textContent = name;
        ageCell.textContent = age;

        // Clear the form
        form.reset();
    });
});
