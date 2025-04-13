import { useState } from "react";
import L from 'leaflet';
import { useEffect, useRef } from 'react';

export default function CheckoutPage() {
    const [location, setLocation] = useState({ lat: 28.6139, lng: 77.2090 });


    const [address, setAddress] = useState({
        name: "",
        phone: "",
        street: "",
        city: "",
        pincode: "",
        state: "",
    });

    const [paymentMethod, setPaymentMethod] = useState("card");
    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        expiry: "",
        cvv: "",
    });
    const [upiID, setUpiID] = useState("");

    const handleAddressChange = (e) => {
        setAddress((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Address:", address);
        console.log("Payment Method:", paymentMethod);
        if (paymentMethod === "card") console.log("Card Details:", cardDetails);
        if (paymentMethod === "upi") console.log("UPI ID:", upiID);
        alert("Order placed (mock)");
    };

    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current && !mapRef.current._leaflet_id) {
            const map = L.map(mapRef.current).setView([28.6139, 77.2090], 13); // Default to New Delhi
    
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            }).addTo(map);
    
            let marker = L.marker([28.6139, 77.2090], { draggable: true }).addTo(map);
    
            map.on("click", function (e) {
                const { lat, lng } = e.latlng;
                marker.setLatLng([lat, lng]);
                setLocation({ lat, lng });
                console.log("Selected location:", lat, lng); // you can store this in state if needed
            });
            
            
        }
    }, []);
    


    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {/* Address Form */}
                <div className="bg-white p-6 rounded-xl shadow space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Shipping Address</h3>

                    <input type="text" name="name" placeholder="Full Name" value={address.name} onChange={handleAddressChange} className="w-full border p-2 rounded" required />
                    <input type="text" name="phone" placeholder="Phone Number" value={address.phone} onChange={handleAddressChange} className="w-full border p-2 rounded" required />
                    <input type="text" name="street" placeholder="Street Address" value={address.street} onChange={handleAddressChange} className="w-full border p-2 rounded" required />

                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" name="city" placeholder="City" value={address.city} onChange={handleAddressChange} className="w-full border p-2 rounded" required />
                        <input type="text" name="state" placeholder="State" value={address.state} onChange={handleAddressChange} className="w-full border p-2 rounded" required />
                    </div>

                    <input type="text" name="pincode" placeholder="Pincode" value={address.pincode} onChange={handleAddressChange} className="w-full border p-2 rounded" required />

                    <div>
                        
                        <div>
                            <p className="text-gray-700 font-medium mb-2">Select Location on Map</p>
                            <div ref={mapRef} className="w-full h-48 rounded border" />
                        </div>

                    </div>
                </div>

                {/* Payment + Order Summary */}
                <div className="bg-white p-6 rounded-xl shadow space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Payment Method</h3>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="payment" value="card" checked={paymentMethod === "card"} onChange={(e) => setPaymentMethod(e.target.value)} />
                                Credit / Debit Card
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="payment" value="cod" checked={paymentMethod === "cod"} onChange={(e) => setPaymentMethod(e.target.value)} />
                                Cash on Delivery
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="payment" value="upi" checked={paymentMethod === "upi"} onChange={(e) => setPaymentMethod(e.target.value)} />
                                UPI / Wallet
                            </label>
                        </div>

                        {/* Dynamic Payment Fields */}
                        {paymentMethod === "card" && (
                            <div className="mt-4 space-y-2">
                                <input
                                    type="text"
                                    placeholder="Card Number"
                                    value={cardDetails.cardNumber}
                                    onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                                    className="w-full border p-2 rounded"
                                    required
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Expiry (MM/YY)"
                                        value={cardDetails.expiry}
                                        onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                                        className="w-full border p-2 rounded"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="CVV"
                                        value={cardDetails.cvv}
                                        onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                                        className="w-full border p-2 rounded"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {paymentMethod === "upi" && (
                            <div className="mt-4">
                                <input
                                    type="text"
                                    placeholder="Enter UPI ID"
                                    value={upiID}
                                    onChange={(e) => setUpiID(e.target.value)}
                                    className="w-full border p-2 rounded"
                                    required
                                />
                            </div>
                        )}
                    </div>

                    {/* Order Summary */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Order Summary</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>Wireless Headphones - $49.99</li>
                            <li>USB-C Cable (x2) - $40.00</li>
                            <hr />
                            <li className="font-semibold mt-2">Total: $89.99</li>
                        </ul>
                    </div>

                    <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-semibold transition">
                        Procide to Pay
                    </button>
                </div>
            </form>
        </div>
    );
}
