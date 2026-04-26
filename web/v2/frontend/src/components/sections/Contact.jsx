import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const initial = { name: "", email: "", company: "", subject: "", message: "" };

export default function Contact() {
    const [form, setForm] = useState(initial);
    const [loading, setLoading] = useState(false);

    const onChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            toast.error("Please fill in your name, email and message.");
            return;
        }
        setLoading(true);
        try {
            const { data } = await axios.post(`${API}/contact`, form);
            toast.success(
                data?.message ||
                    "Thanks! We've received your message and will get back to you shortly.",
            );
            setForm(initial);
        } catch (err) {
            const detail =
                err?.response?.data?.detail?.[0]?.msg ||
                err?.response?.data?.detail ||
                "Something went wrong. Please try again.";
            toast.error(typeof detail === "string" ? detail : "Submission failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <div>
                    <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-blue-400">
                        Let's talk
                    </p>
                    <h2 className="font-display mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                        Tell us about your project.
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
                        Drop a line about what you're building. We'll reply within one
                        business day with next steps and a short discovery call invite.
                    </p>

                    <ul className="mt-10 space-y-5" data-testid="contact-info">
                        <li className="flex items-start gap-4">
                            <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 border border-blue-500/30">
                                <Mail className="h-4 w-4 text-blue-300" />
                            </span>
                            <div>
                                <div className="text-sm uppercase tracking-[0.18em] text-slate-500">
                                    Email
                                </div>
                                <a
                                    href={`mailto:${site.brand.email}`}
                                    className="text-white text-base hover:text-blue-300"
                                >
                                    {site.brand.email}
                                </a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 border border-blue-500/30">
                                <Phone className="h-4 w-4 text-blue-300" />
                            </span>
                            <div>
                                <div className="text-sm uppercase tracking-[0.18em] text-slate-500">
                                    Phone
                                </div>
                                <span className="text-white text-base">
                                    {site.brand.phone}
                                </span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 border border-blue-500/30">
                                <MapPin className="h-4 w-4 text-blue-300" />
                            </span>
                            <div>
                                <div className="text-sm uppercase tracking-[0.18em] text-slate-500">
                                    Where we are
                                </div>
                                <span className="text-white text-base">
                                    {site.brand.address}
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                <form
                    onSubmit={onSubmit}
                    data-testid="contact-form"
                    className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-6 md:p-10 shadow-[0_0_60px_-20px_rgba(59,130,246,0.45)]"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="name"
                                className="text-xs uppercase tracking-[0.18em] text-slate-400"
                            >
                                Name *
                            </label>
                            <Input
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={onChange}
                                placeholder="Jane Doe"
                                data-testid="contact-input-name"
                                required
                                className="bg-slate-950/60 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="email"
                                className="text-xs uppercase tracking-[0.18em] text-slate-400"
                            >
                                Email *
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={onChange}
                                placeholder="jane@company.com"
                                data-testid="contact-input-email"
                                required
                                className="bg-slate-950/60 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="company"
                                className="text-xs uppercase tracking-[0.18em] text-slate-400"
                            >
                                Company
                            </label>
                            <Input
                                id="company"
                                name="company"
                                value={form.company}
                                onChange={onChange}
                                placeholder="Acme Inc."
                                data-testid="contact-input-company"
                                className="bg-slate-950/60 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="subject"
                                className="text-xs uppercase tracking-[0.18em] text-slate-400"
                            >
                                Subject
                            </label>
                            <Input
                                id="subject"
                                name="subject"
                                value={form.subject}
                                onChange={onChange}
                                placeholder="New SaaS build"
                                data-testid="contact-input-subject"
                                className="bg-slate-950/60 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-2">
                        <label
                            htmlFor="message"
                            className="text-xs uppercase tracking-[0.18em] text-slate-400"
                        >
                            Message *
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={form.message}
                            onChange={onChange}
                            placeholder="Tell us a bit about your project, timeline, and stack."
                            data-testid="contact-input-message"
                            required
                            className="bg-slate-950/60 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-blue-500 resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        data-testid="contact-submit-button"
                        className="mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-6 py-3 transition shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_40px_rgba(59,130,246,0.65)]"
                    >
                        {loading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            <Send className="h-4 w-4" />
                        )}
                        {loading ? "Sending..." : "Send message"}
                    </button>

                    <p className="mt-4 text-xs text-slate-500">
                        By submitting you agree to our standard NDA / DPA terms. We'll
                        never share your details.
                    </p>
                </form>
            </div>
        </section>
    );
}
