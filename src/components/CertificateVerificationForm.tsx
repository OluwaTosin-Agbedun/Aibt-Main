"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function CertificateVerificationForm() {
  const [checked, setChecked] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setChecked(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          name="certificateNumber"
          placeholder="Certificate number (e.g. AIBT-2026-000123)"
          required
          className="flex-1 border border-hairline bg-white px-3 py-2.5 text-sm text-charcoal focus:border-navy focus:outline-none"
        />
        <button
          type="submit"
          className="bg-navy px-6 py-2.5 text-sm font-medium text-white hover:bg-navy-dark"
        >
          Verify
        </button>
      </form>

      {checked && (
        <div className="mt-6 border border-hairline bg-offwhite p-6 text-sm text-charcoal/90">
          Certificate verification is not yet active. AIBT and MITA Academy
          certificates are issued with a unique number and QR code — once
          issuance begins, this page will confirm a certificate&rsquo;s
          authenticity in real time.
        </div>
      )}
    </div>
  );
}
