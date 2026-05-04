"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!FORMSPREE_ENDPOINT) {
            setStatus("error");
            setErrorMessage(
                "The form isn't wired up yet. Email chris@oldforrest.net directly.",
            );
            return;
        }

        const form = event.currentTarget;
        const data = new FormData(form);

        setStatus("submitting");
        setErrorMessage("");

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                form.reset();
                setStatus("success");
            } else {
                const body = await res.json().catch(() => null);
                const msg =
                    body?.errors?.[0]?.message ??
                    "Something went wrong sending the message.";
                setStatus("error");
                setErrorMessage(msg);
            }
        } catch {
            setStatus("error");
            setErrorMessage(
                "Network error. Email chris@oldforrest.net if this keeps happening.",
            );
        }
    }

    if (status === "success") {
        return (
            <div className="bg-cream-2 border border-rule rounded-md p-6">
                <div className="font-heading text-xl text-forest-deep mb-2">
                    Got it. Talk soon.
                </div>
                <p className="text-sm text-ink-2 leading-relaxed">
                    We&apos;ll get back to you within one business day. If
                    it&apos;s urgent, email{" "}
                    <a
                        href="mailto:chris@oldforrest.net"
                        className="text-forest underline underline-offset-2 hover:text-ember"
                    >
                        chris@oldforrest.net
                    </a>
                    .
                </p>
            </div>
        );
    }

    const submitting = status === "submitting";

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Your name" name="name" required />
                <Field label="Company" name="company" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone (optional)" name="phone" type="tel" />
            </div>
            <Field label="Who referred you? (optional)" name="referrer" />
            <TextAreaField
                label="What's frustrating you about the stack right now?"
                name="message"
                required
            />

            {/* Honeypot — bots fill this, humans don't */}
            <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="absolute -left-[9999px]"
                aria-hidden
            />

            {status === "error" && errorMessage && (
                <div className="text-sm text-[#a8341a]" role="alert">
                    {errorMessage}
                </div>
            )}

            <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-cream bg-forest hover:bg-forest-deep disabled:opacity-60 disabled:cursor-not-allowed rounded-md transition-colors"
            >
                {submitting ? (
                    <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending…
                    </>
                ) : (
                    <>
                        Send the note
                        <ArrowRight size={18} />
                    </>
                )}
            </button>
        </form>
    );
}

interface FieldProps {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
}

function Field({ label, name, type = "text", required }: FieldProps) {
    return (
        <label className="block">
            <span className="block text-xs font-sans tracking-[0.08em] uppercase font-bold text-ink-3 mb-1.5">
                {label}
                {required && <span className="text-ember ml-1">*</span>}
            </span>
            <input
                type={type}
                name={name}
                required={required}
                className="w-full rounded-md border border-rule bg-cream/40 px-3 py-2.5 text-base text-ink focus:border-forest focus:bg-white focus:outline-none transition-colors"
            />
        </label>
    );
}

interface TextAreaFieldProps {
    label: string;
    name: string;
    required?: boolean;
}

function TextAreaField({ label, name, required }: TextAreaFieldProps) {
    return (
        <label className="block">
            <span className="block text-xs font-sans tracking-[0.08em] uppercase font-bold text-ink-3 mb-1.5">
                {label}
                {required && <span className="text-ember ml-1">*</span>}
            </span>
            <textarea
                name={name}
                required={required}
                rows={5}
                className="w-full rounded-md border border-rule bg-cream/40 px-3 py-2.5 text-base text-ink focus:border-forest focus:bg-white focus:outline-none transition-colors resize-y"
            />
        </label>
    );
}
