"use client";

import { useState } from "react";
import DynamicForm from "@/components/forms/DynamicForm";
import type { FieldConfig } from "@/components/forms/DynamicForm";

const emergingFields: FieldConfig[] = [
  { type: "text", name: "name", label: "Full Name", required: true },
  { type: "email", name: "email", label: "Email", required: true },
  { type: "tel", name: "phone", label: "Phone / WhatsApp", required: true },
  {
    type: "select",
    name: "courseOfInterest",
    label: "Course of Interest",
    required: true,
    options: [
      "Career Launchpad Certificate",
      "Digital Skills and Workplace Productivity Certificate",
      "Business Communication and Professional Writing Certificate",
      "Introduction to Public Policy and Governance Certificate",
      "Graduate Employability and Leadership Certificate",
      "Other Certificate Course",
    ],
  },
  { type: "text", name: "currentRole", label: "Current Role (if any)", required: false },
  { type: "text", name: "organisation", label: "School / Organisation (if any)", required: false },
  {
    type: "select",
    name: "preferredMode",
    label: "Preferred Mode",
    required: true,
    options: ["Online", "Physical", "Blended"],
  },
  { type: "file", name: "cv", label: "Upload CV (optional)", required: false },
];

const executiveFields: FieldConfig[] = [
  { type: "text", name: "name", label: "Full Name", required: true },
  { type: "email", name: "email", label: "Email", required: true },
  { type: "tel", name: "phone", label: "Phone / WhatsApp", required: true },
  {
    type: "select",
    name: "courseOfInterest",
    label: "Course of Interest",
    required: true,
    options: [
      "Certificate Course",
      "MITA Academy Certificate",
      "Executive Education Programme",
      "Not Sure Yet",
    ],
  },
  { type: "text", name: "currentRole", label: "Current Role / Title", required: true },
  { type: "text", name: "organisation", label: "Organisation", required: true },
  {
    type: "select",
    name: "preferredMode",
    label: "Preferred Mode",
    required: true,
    options: ["Online", "Physical", "Blended"],
  },
  { type: "file", name: "cv", label: "Upload CV (optional)", required: false },
];

export default function ApplyFormTabs() {
  const [tab, setTab] = useState<"emerging" | "executive">("emerging");

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTab("emerging")}
          className={`px-4 py-2 text-sm font-medium ${
            tab === "emerging"
              ? "bg-navy text-white"
              : "border border-hairline text-charcoal hover:border-navy"
          }`}
        >
          Certificate / Emerging Professional Applicant
        </button>
        <button
          type="button"
          onClick={() => setTab("executive")}
          className={`px-4 py-2 text-sm font-medium ${
            tab === "executive"
              ? "bg-navy text-white"
              : "border border-hairline text-charcoal hover:border-navy"
          }`}
        >
          Executive / Professional Applicant
        </button>
      </div>

      <div className="mt-8">
        <DynamicForm
          key={tab}
          fields={tab === "emerging" ? emergingFields : executiveFields}
          submitLabel="Submit Application"
          successMessage="Your application has been received. Our admissions team will contact you shortly."
        />
      </div>
    </div>
  );
}
