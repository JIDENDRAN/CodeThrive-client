import React, { useState } from "react";

interface Trip {
  id: number;
  type: "Train" | "Bus";
  from: string;
  to: string;
  price: number;
  duration: string;
}

const TicketBookingDemo: React.FC = () => {
  const [page, setPage] = useState(1);
  const [username, setUsername] = useState("");
  const [bookingType, setBookingType] = useState<"Train" | "Bus" | "">("");
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [bookedSeats] = useState<number[]>([2, 5, 7]); // pre-booked seats

  const trips: Trip[] = [
    { id: 1, type: "Train", from: "Chennai", to: "Bangalore", price: 850, duration: "5h 20m" },
    { id: 2, type: "Train", from: "Coimbatore", to: "Chennai", price: 650, duration: "6h 10m" },
    { id: 3, type: "Bus", from: "Chennai", to: "Madurai", price: 550, duration: "8h 00m" },
    { id: 4, type: "Bus", from: "Bangalore", to: "Hyderabad", price: 750, duration: "9h 30m" },
  ];

  const seatNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

  const toggleSeat = (num: number) => {
    if (bookedSeats.includes(num)) return; // cannot select booked seats
    setSelectedSeats(prev =>
      prev.includes(num) ? prev.filter(s => s !== num) : [...prev, num]
    );
  };

  const nextPage = () => setPage(p => p + 1);
  const prevPage = () => setPage(p => p - 1);

  const gst = selectedTrip ? selectedTrip.price * selectedSeats.length * 0.18 : 0;
  const total = selectedTrip ? selectedTrip.price * selectedSeats.length : 0;
  const grandTotal = total + gst;

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "20px", minHeight: "100vh", background: "#f5f7fa" }}>
      {/* HEADER */}
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Ticket Booking System</h1>
      <p style={{ textAlign: "center", color: "#555" }}>Step {page} of 5</p>

      {/* PAGE 1 - LOGIN */}
      {page === 1 && (
        <div style={{ maxWidth: "400px", margin: "0 auto", background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 6px 20px rgba(0,0,0,0.05)" }}>
          <h2>Login</h2>
          <input placeholder="Username" onChange={e => setUsername(e.target.value)} style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          <input placeholder="Password" type="password" style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          <button onClick={() => !username ? alert("Enter username!") : nextPage()} style={{ width: "100%", padding: "10px", borderRadius: "6px", background: "#4e73df", color: "#fff", fontWeight: 600 }}>Login</button>
        </div>
      )}

      {/* PAGE 2 - Booking Type */}
      {page === 2 && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Select Booking Type</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
            <button onClick={() => { setBookingType("Train"); nextPage(); }} style={{ padding: "10px 20px", borderRadius: "6px", background: "#4e73df", color: "#fff" }}>Train</button>
            <button onClick={() => { setBookingType("Bus"); nextPage(); }} style={{ padding: "10px 20px", borderRadius: "6px", background: "#4e73df", color: "#fff" }}>Bus</button>
          </div>
          <button onClick={prevPage} style={{ marginTop: "20px" }}>Back</button>
        </div>
      )}

      {/* PAGE 3 - Trip List */}
      {page === 3 && (
        <div style={{ maxWidth: "600px", margin: "20px auto" }}>
          <h2>Available {bookingType} Trips</h2>
          {trips.filter(t => t.type === bookingType).map(trip => (
            <div key={trip.id} style={{ padding: "15px", marginTop: "10px", border: "1px solid #ddd", borderRadius: "10px", cursor: "pointer", background: "#fff", boxShadow: "0 6px 15px rgba(0,0,0,0.05)" }}
              onClick={() => { setSelectedTrip(trip); nextPage(); }}>
              <h4>{trip.from} → {trip.to}</h4>
              <p>Price: ₹{trip.price}</p>
              <p>Duration: {trip.duration}</p>
            </div>
          ))}
          <button onClick={prevPage} style={{ marginTop: "10px" }}>Back</button>
        </div>
      )}

      {/* PAGE 4 - Seats */}
      {page === 4 && selectedTrip && (
        <div style={{ maxWidth: "600px", margin: "20px auto", background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 6px 20px rgba(0,0,0,0.05)" }}>
          <h2>Select Seats</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 60px)", gap: "10px", justifyContent: "center", marginTop: "15px" }}>
            {seatNumbers.map(num => (
              <div key={num} onClick={() => toggleSeat(num)}
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  cursor: bookedSeats.includes(num) ? "not-allowed" : "pointer",
                  background: bookedSeats.includes(num) ? "#e74a3b" : selectedSeats.includes(num) ? "#4e73df" : "#e9ecef",
                  color: bookedSeats.includes(num) || selectedSeats.includes(num) ? "#fff" : "#333",
                  fontWeight: 600
                }}>
                {num}
              </div>
            ))}
          </div>
          <p style={{ marginTop: "10px" }}>Selected Seats: {selectedSeats.join(", ") || "None"}</p>
          <p>Fare: ₹{total.toFixed(2)} | GST: ₹{gst.toFixed(2)} | Total: ₹{grandTotal.toFixed(2)}</p>
          <button onClick={prevPage} style={{ marginRight: "10px" }}>Back</button>
          <button onClick={nextPage} style={{ background: "#4e73df", color: "#fff", padding: "10px 20px", borderRadius: "6px" }}>Proceed to Bill</button>
        </div>
      )}

      {/* PAGE 5 - BILL / SUMMARY */}
      {page === 5 && selectedTrip && (
        <div style={{ maxWidth: "500px", margin: "20px auto", background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}>
          <h2 style={{ textAlign: "center" }}>Ticket Summary</h2>
          <p><strong>Passenger:</strong> {username}</p>
          <p><strong>Route:</strong> {selectedTrip.from} → {selectedTrip.to}</p>
          <p><strong>Type:</strong> {bookingType}</p>
          <p><strong>Seats:</strong> {selectedSeats.join(", ")}</p>
          <hr />
          <p>Fare: ₹{total.toFixed(2)}</p>
          <p>GST (18%): ₹{gst.toFixed(2)}</p>
          <h3>Total: ₹{grandTotal.toFixed(2)}</h3>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button onClick={() => window.print()} style={{ marginRight: "10px", background: "#4e73df", color: "#fff", padding: "10px 20px", borderRadius: "6px" }}>Print Ticket</button>
            <button onClick={() => setPage(1)} style={{ padding: "10px 20px", borderRadius: "6px" }}>Book Another</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketBookingDemo;
