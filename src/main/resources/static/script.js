function createSeats() {
  const seatsGrid = document.getElementById("seatsGrid");
  if (!seatsGrid) return;

  for (let row = 1; row <= 5; row++) {
    for (let col = 1; col <= 8; col++) {
      let seat = document.createElement("div");
      seat.classList.add("seat");
      seat.innerText = row + "-" + col;
      seat.onclick = () => seat.classList.toggle("selected");
      seatsGrid.appendChild(seat);
    }
    seatsGrid.appendChild(document.createElement("br"));
  }
}

function confirmBooking() {
  alert("Booking Confirmed! (We’ll later connect this with database)");
  window.location.href = "booking.html";
}

window.onload = createSeats;