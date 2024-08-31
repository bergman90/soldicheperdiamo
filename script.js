document.addEventListener('DOMContentLoaded', () => {
    const euroPerSecondo1 = 0.0874; // Euro al secondo per il primo calcolatore
    const euroPerSecondo2 = 0.0790; // Euro al secondo per il secondo calcolatore

    const startDate = new Date('2024-04-01T00:00:00'); // Data di inizio per i calcolatori
    const referenceDate = new Date('2010-05-12T00:00:00'); // Data di riferimento per il terzo calcolatore

    const output1 = document.getElementById('output1');
    const output2 = document.getElementById('output2');
    const totalOutput = document.getElementById('total');
    const timeElapsedOutput = document.getElementById('timeElapsed');

    function formatCurrency(value) {
        return Number(value).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function updatePayment() {
        const now = new Date();
        const diffInSeconds = Math.floor((now - startDate) / 1000);

        // Calcola e aggiorna il primo calcolatore
        const totalPayment1 = (diffInSeconds * euroPerSecondo1).toFixed(2);
        output1.textContent = `€${formatCurrency(totalPayment1)}`;

        // Calcola e aggiorna il secondo calcolatore
        const totalPayment2 = (diffInSeconds * euroPerSecondo2).toFixed(2);
        output2.textContent = `€${formatCurrency(totalPayment2)}`;

        // Calcola e aggiorna il totale
        const total = (parseFloat(totalPayment1) + parseFloat(totalPayment2)).toFixed(2);
        totalOutput.textContent = `Totale = €${formatCurrency(total)}`;

        // Calcola e aggiorna il tempo trascorso dal 12 maggio 2010
        const elapsedSeconds = Math.floor((now - referenceDate) / 1000);
        timeElapsedOutput.textContent = formatTime(elapsedSeconds);
    }

    setInterval(updatePayment, 1000); // Aggiorna ogni secondo
});
