"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
    });

    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState("");

    // Handle input change
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle submit
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setResponseMsg(data.error || "Something went wrong");
            }
        } catch {
            setResponseMsg("Network error");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-50 py-12 px-4 flex flex-col items-center overflow-x-hidden">
            <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl">
                <h2 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                    Contact Us
                </h2>

                <form onSubmit={handleSubmit}>
                    <label className="block mb-2 text-slate-300 font-medium">Name</label>
                    <input
                        className="w-full bg-slate-900/50 border border-slate-700 p-3 rounded-lg mb-4 text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label className="block mb-2 text-slate-300 font-medium">Email</label>
                    <input
                        className="w-full bg-slate-900/50 border border-slate-700 p-3 rounded-lg mb-4 text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label className="block mb-2 text-slate-300 font-medium">Phone</label>
                    <input
                        className="w-full bg-slate-900/50 border border-slate-700 p-3 rounded-lg mb-4 text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <label className="block mb-2 text-slate-300 font-medium">Message</label>
                    <textarea
                        className="w-full bg-slate-900/50 border border-slate-700 p-3 rounded-lg mb-6 text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all h-32"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />

                    <button
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Saving..." : "Submit"}
                    </button>
                </form>

                {responseMsg && (
                    <p className={`mt-4 text-center font-medium ${responseMsg.includes("Success") ? "text-green-400" : "text-red-400"}`}>
                        {responseMsg}
                    </p>
                )}
            </div>
        </div>
    );

}
