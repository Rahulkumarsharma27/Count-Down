const endDate = "29 May 2024 10:16 PM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff <= 0) {
        document.getElementById("cracker").style.display = "block";
        clearInterval(intervalId);
        inputs[0].value = 0;
        inputs[1].value = 0;
        inputs[2].value = 0;
        inputs[3].value = 0;
        return;
    }

    const days = Math.floor(diff / (60 * 60 * 24));
    const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((diff % (60 * 60)) / 60);
    const seconds = Math.floor(diff % 60);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
};

// Call the clock function immediately to set the initial values
clock();

// Update the countdown every second
const intervalId = setInterval(clock, 1000);