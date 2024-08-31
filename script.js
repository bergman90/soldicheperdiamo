document.addEventListener('DOMContentLoaded', () => {
    const euroPerSecondo1 = 0.0874; // Euro al secondo per il primo calcolatore (1,90 euro)
    const euroPerSecondo2 = 0.0790; // Euro al secondo per il secondo calcolatore (1,66 euro)

    const startDate = new Date('2024-04-01T00:00:00'); // Data di inizio per entrambi i calcolatori
    const output1 = document.getElementById('output1');
    const output2 = document.getElementById('output2');
    const totalOutput = document.getElementById('total');

    function updatePayment() {
        const now = new Date();
        const diffInSeconds = Math.floor((now - startDate) / 1000);

        // Calcola e aggiorna il primo calcolatore
        const totalPayment1 = (diffInSeconds * euroPerSecondo1).toFixed(2);
        const formattedPayment1 = Number(totalPayment1).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        output1.textContent = `€${formattedPayment1}`;

        // Calcola e aggiorna il secondo calcolatore
        const totalPayment2 = (diffInSeconds * euroPerSecondo2).toFixed(2);
        const formattedPayment2 = Number(totalPayment2).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        output2.textContent = `€${formattedPayment2}`;

        // Calcola e aggiorna il totale
        const total = (parseFloat(totalPayment1) + parseFloat(totalPayment2)).toFixed(2);
        const formattedTotal = Number(total).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        totalOutput.textContent = `Totale = €${formattedTotal}`;
    }

    setInterval(updatePayment, 1000); // Aggiorna ogni secondo
});