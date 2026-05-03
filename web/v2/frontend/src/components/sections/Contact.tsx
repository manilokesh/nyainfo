import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Blob from "@/components/Blob";
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

    const inputCls =
        "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl focus-visible:ring-brand focus-visible:border-brand";

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative py-24 md:py-32 bg-white overflow-hidden"
        >
            <Blob
                variant={1}
                soft
                className="absolute -top-32 -left-24 w-[520px] opacity-90"
            />
            <Blob
                variant={3}
                className="absolute -bottom-24 -right-32 w-[380px] opacity-15"
            />
            <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <div>
                    <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-brand">
                        Let&apos;s talk
                    </p>
                    <h2 className="font-display mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900">
                        Tell us about your project.
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
                        Drop a line about what you&apos;re building. We&apos;ll reply
                        within one business day with next steps and a short discovery
                        call invite.
                    </p>

                    <ul className="mt-10 space-y-5" data-testid="contact-info">
                        <li className="flex items-start gap-4">
                            <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft">
                                <Mail className="h-4 w-4 text-brand" />
                            </span>
                            <div>
                                <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold">
                                    Email
                                </div>
                                <a
                                    href={`mailto:${site.brand.email}`}
                                    className="text-slate-900 text-base font-semibold hover:text-brand"
                                >
                                    {site.brand.email}
                                </a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft">
                                <Phone className="h-4 w-4 text-brand" />
                            </span>
                            <div>
                                <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold">
                                    Phone
                                </div>
                                <span className="text-slate-900 text-base font-semibold">
                                    {site.brand.phone}
                                </span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft">
                                <MapPin className="h-4 w-4 text-brand" />
                            </span>
                            <div>
                                <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold">
                                    Where we are
                                </div>
                                <span className="text-slate-900 text-base font-semibold">
                                    {site.brand.address}
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                <form
                    onSubmit={onSubmit}
                    data-testid="contact-form"
                    className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)]"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="name"
                                className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold"
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
                                className={inputCls}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="email"
                                className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold"
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
                                className={inputCls}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="company"
                                className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold"
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
                                className={inputCls}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="subject"
                                className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold"
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
                                className={inputCls}
                            />
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-2">
                        <label
                            htmlFor="message"
                            className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold"
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
                            className={`${inputCls} resize-none`}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        data-testid="contact-submit-button"
                        className="mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-brand hover:bg-brand-strong disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-7 py-3.5 transition shadow-brand hover:shadow-brand-lg"
                    >
                        {loading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            <Send className="h-4 w-4" />
                        )}
                        {loading ? "Sending..." : "Send message"}
                    </button>

                    <p className="mt-4 text-xs text-slate-500">
                        By submitting you agree to our standard NDA / DPA terms.
                        We&apos;ll never share your details.
                    </p>
                </form>
            </div>
        </section>
    );
}
