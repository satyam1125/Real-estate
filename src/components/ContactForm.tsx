import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("rent");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  function validate() {
    if (!name.trim()) return "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Please enter a valid email.";
    if (!/^\d{7,15}$/.test(phone.replace(/\D/g, ""))) return "Please enter a valid phone number (7-15 digits).";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setSuccess(err);
      return;
    }

    setSubmitting(true);
    setSuccess(null);

    // simulate request
    await new Promise((r) => setTimeout(r, 800));

    // TODO: replace with real API call
    console.log({ name, email, phone, service, message });

    setSubmitting(false);
    setSuccess("Thank you — we received your request. We'll contact you shortly.");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setService("rent");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 bg-card p-6 rounded-lg border border-border">
      <h3 className="text-xl font-semibold mb-2 text-foreground">Get Started</h3>

      {success && (
        <div className={`rounded-md p-3 text-sm ${success.startsWith("Thank") ? "bg-green-50 text-green-800" : "bg-yellow-50 text-yellow-800"}`}>
          {success}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-muted-foreground">Full name</label>
          <input value={name} onChange={e => setName(e.target.value)} required className="w-full border px-3 py-2 rounded bg-background" />
        </div>

        <div>
          <label className="block text-sm font-medium text-muted-foreground">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" required className="w-full border px-3 py-2 rounded bg-background" />
        </div>

        <div>
          <label className="block text-sm font-medium text-muted-foreground">Phone</label>
          <input value={phone} onChange={e => setPhone(e.target.value)} required className="w-full border px-3 py-2 rounded bg-background" placeholder="e.g. 9876543210" />
        </div>

        <div>
          <label className="block text-sm font-medium text-muted-foreground">Service</label>
          <select value={service} onChange={e => setService(e.target.value)} className="w-full border px-3 py-2 rounded bg-background">
            <option value="rent">Rent</option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-muted-foreground">Message (optional)</label>
        <textarea value={message} onChange={e => setMessage(e.target.value)} className="w-full border px-3 py-2 rounded bg-background" rows={4} />
      </div>

      <div className="flex items-center justify-between">
        <button type="submit" disabled={submitting} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60">
          {submitting ? "Sending..." : "Submit Request"}
        </button>

        <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:underline">Or call us: +91 98765 43210</a>
      </div>
    </form>
  );
}
