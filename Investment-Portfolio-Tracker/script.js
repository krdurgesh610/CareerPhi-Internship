
document.addEventListener('DOMContentLoaded', function() {
    
    const investmentForm = document.getElementById('investment-form');
    const investmentTable = document.getElementById('investment-table');
    const totalValueElement = document.getElementById('total-value');
    const ctx = document.getElementById('pie-chart').getContext('2d');
    
    
    let investments = [];
    
    
    let pieChart;

    
    function updateTotalValue() {
        
        const totalValue = investments.reduce((acc, investment) => acc + investment.currentValue, 0);
        
        totalValueElement.textContent = totalValue.toFixed(2); 
    }
    
    
    function renderInvestments() {
        
        investmentTable.innerHTML = '';

        investments.forEach((investment, index) => {
            const percentageChange = ((investment.currentValue - investment.amountInvested) / investment.amountInvested * 100).toFixed(2);
            
            const row = document.createElement('tr');
            
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
            
            
            investmentTable.appendChild(row);
        });
        
        
        updateTotalValue();
        renderPieChart();
    }
    
    
    function renderPieChart() {
        
        const labels = investments.map(i => i.assetName);
        const data = investments.map(i => i.currentValue);
        
        
        if (pieChart) {
            pieChart.destroy();
        }

        
        pieChart = new Chart(ctx, {
            type: 'pie',  
            data: {
                labels: labels, 
                datasets: [{
                    data: data,  
                    backgroundColor: ['red', 'yellow', 'blue', 'aqua', 'green']
                }]
            },
            options: {
                responsive: true,  
                plugins: {
                    legend: {
                        position: 'top',  
                    },
                    tooltip: {  
                        callbacks: {
                            
                            label: function(tooltipItem) {
                                return `${tooltipItem.label}: $${tooltipItem.raw.toFixed(2)}`;
                            }
                        }
                    }
                }
            }
        });
    }


    window.updateInvestment = function(index) {
       
        const newValue = prompt('Enter new current value:', investments[index].currentValue);
        
        
        if (newValue !== null) {
            investments[index].currentValue = parseFloat(newValue);
           
            renderInvestments();
        }
    }
    
   
    window.removeInvestment = function(index) {
        
        investments.splice(index, 1);
        
        renderInvestments();
    }
    
    
    investmentForm.addEventListener('submit', (e) => {
        
        e.preventDefault();
        

        const assetName = document.getElementById('asset-name').value;
        const amountInvested = parseFloat(document.getElementById('amount-invested').value);
        const currentValue = parseFloat(document.getElementById('current-value').value);
        
        if (assetName && !isNaN(amountInvested) && !isNaN(currentValue)) {
            
            investments.push({ assetName, amountInvested, currentValue });
            
            renderInvestments();
            
            investmentForm.reset();
        }
    });

    
    renderInvestments();
});
