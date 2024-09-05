// Waits for the DOM to fully load before executing the JavaScript code.
document.addEventListener('DOMContentLoaded', function() {
    // Grabs references to HTML elements related to the form, table, total value display, and chart.
    const investmentForm = document.getElementById('investment-form');
    const investmentTable = document.getElementById('investment-table');
    const totalValueElement = document.getElementById('total-value');
    const ctx = document.getElementById('pie-chart').getContext('2d');
    
    // Initialize an empty array to hold all the investments.
    let investments = [];
    
    // Variable to hold the instance of the pie chart.
    let pieChart;

    // Function to calculate and update the total value of all investments.
    function updateTotalValue() {
        // Sum up the current value of each investment.
        const totalValue = investments.reduce((acc, investment) => acc + investment.currentValue, 0);
        // Update the total value displayed on the webpage.
        totalValueElement.textContent = totalValue.toFixed(2); // Display the value with 2 decimal places.
    }
    
    // Function to render all investments in the table.
    function renderInvestments() {
        // Clears the previous table rows (if any) to avoid duplication.
        investmentTable.innerHTML = '';
        
        // Loop through the 'investments' array to create table rows for each investment.
        investments.forEach((investment, index) => {
            // Calculate the percentage change between the invested amount and the current value.
            const percentageChange = ((investment.currentValue - investment.amountInvested) / investment.amountInvested * 100).toFixed(2);
            
            // Create a new table row element.
            const row = document.createElement('tr');
            
            // Set the HTML content of the row with investment details and buttons for updating and removing.
            row.innerHTML = `
                <td>${investment.assetName}</td>  <!-- Asset name -->
                <td>$${investment.amountInvested.toFixed(2)}</td>  <!-- Amount invested -->
                <td>$${investment.currentValue.toFixed(2)}</td>  <!-- Current value -->
                <td>${percentageChange}%</td>  <!-- Percentage change -->
                <td>
                    <button onclick="updateInvestment(${index})">Update</button> <!-- Button to update the investment -->
                    <button onclick="removeInvestment(${index})">Remove</button> <!-- Button to remove the investment -->
                </td>
            `;
            
            // Append the new row to the investment table in the DOM.
            investmentTable.appendChild(row);
        });
        
        // After rendering the table, update the total value and refresh the pie chart.
        updateTotalValue();
        renderPieChart();
    }
    
    // Function to render the pie chart showing the portfolio distribution.
    function renderPieChart() {
        // Create arrays for labels (asset names) and data (current values).
        const labels = investments.map(i => i.assetName);
        const data = investments.map(i => i.currentValue);
        
        // If the pie chart already exists, destroy it to avoid duplicating charts.
        if (pieChart) {
            pieChart.destroy();
        }

        // Create a new pie chart using the Chart.js library.
        pieChart = new Chart(ctx, {
            type: 'pie',  // Define the chart type as 'pie'.
            data: {
                labels: labels,  // Asset names as labels.
                datasets: [{
                    data: data,  // Current values as the data.
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'] // Predefined colors for the pie segments.
                }]
            },
            options: {
                responsive: true,  // Ensures the chart is responsive and adjusts to different screen sizes.
                plugins: {
                    legend: {
                        position: 'top',  // Display the legend at the top of the chart.
                    },
                    tooltip: {  // Customize tooltips that appear when hovering over pie segments.
                        callbacks: {
                            // Customize the tooltip label to show the asset name and its corresponding value.
                            label: function(tooltipItem) {
                                return `${tooltipItem.label}: $${tooltipItem.raw.toFixed(2)}`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Function to handle updating the value of a specific investment.
    // It is globally accessible due to the 'window.' declaration.
    window.updateInvestment = function(index) {
        // Prompt the user to enter a new value for the selected investment.
        const newValue = prompt('Enter new current value:', investments[index].currentValue);
        
        // If the user enters a value (and doesn't cancel), update the investment's current value.
        if (newValue !== null) {
            investments[index].currentValue = parseFloat(newValue);
            // Re-render the investments to reflect the updated value.
            renderInvestments();
        }
    }
    
    // Function to handle removing an investment from the list.
    // It is also globally accessible through the 'window.' declaration.
    window.removeInvestment = function(index) {
        // Remove the investment at the specified index.
        investments.splice(index, 1);
        // Re-render the investments to reflect the removal.
        renderInvestments();
    }
    
    // Event listener for handling the form submission when adding a new investment.
    investmentForm.addEventListener('submit', (e) => {
        // Prevent the default form submission behavior (which would reload the page).
        e.preventDefault();
        
        // Get the input values for the new investment (asset name, amount invested, and current value).
        const assetName = document.getElementById('asset-name').value;
        const amountInvested = parseFloat(document.getElementById('amount-invested').value);
        const currentValue = parseFloat(document.getElementById('current-value').value);
        
        // Check if all input values are valid (not empty and numbers where expected).
        if (assetName && !isNaN(amountInvested) && !isNaN(currentValue)) {
            // Add the new investment to the 'investments' array.
            investments.push({ assetName, amountInvested, currentValue });
            // Re-render the investments in the table and update the pie chart.
            renderInvestments();
            // Reset the form fields to be ready for the next input.
            investmentForm.reset();
        }
    });

    // Initial rendering of the investments (which will be empty on the first load).
    renderInvestments();
});
