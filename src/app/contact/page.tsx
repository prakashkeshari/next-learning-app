"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState("");

    // Handle input change
    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle submit
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setResponseMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setResponseMsg("Contact Saved Successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setResponseMsg(data.error || "Something went wrong");
            }
        } catch (err) {
            setResponseMsg("Network error");
        }

        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto p-5 border rounded-lg mt-10 shadow text-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

            <form onSubmit={handleSubmit}>
                <label className="block mb-2">Name</label>
                <input
                    className="w-full border p-2 rounded mb-4 text-gray-900"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label className="block mb-2">Email</label>
                <input
                    className="w-full border p-2 rounded mb-4 text-gray-900"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label className="block mb-2">Message</label>
                <textarea
                    className="w-full border p-2 rounded mb-4 text-gray-900"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <button
                    disabled={loading}
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                >
                    {loading ? "Saving..." : "Submit"}
                </button>
            </form>

            {responseMsg && (
                <p className="mt-4 text-center font-medium">{responseMsg}</p>
            )}
        </div>
    );

}
