"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export type FieldConfig =
  | {
      type: "text" | "email" | "tel" | "date" | "number";
      name: string;
      label: string;
      required?: boolean;
      placeholder?: string;
    }
  | {
      type: "select";
      name: string;
      label: string;
      options: string[];
      required?: boolean;
    }
  | {
      type: "textarea";
      name: string;
      label: string;
      required?: boolean;
      placeholder?: string;
    }
  | {
      type: "file";
      name: string;
      label: string;
      required?: boolean;
    };

export default function DynamicForm({
  fields,
  submitLabel,
  successMessage,
}: {
  fields: FieldConfig[];
  submitLabel: string;
  successMessage: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-hairline bg-offwhite p-8 text-center">
        <p className="font-serif text-xl font-semibold text-navy">Thank you</p>
        <p className="mt-2 text-sm text-charcoal/80">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {fields.map((field) => (
        <div
          key={field.name}
          className={field.type === "textarea" ? "sm:col-span-2" : ""}
        >
          <label htmlFor={field.name} className="text-sm font-medium text-navy">
            {field.label}
            {field.required && <span className="text-wine"> *</span>}
          </label>

          {field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              required={field.required}
              className="mt-2 w-full border border-hairline bg-white px-3 py-2.5 text-sm text-charcoal focus:border-navy focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select an option
              </option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              rows={5}
              className="mt-2 w-full border border-hairline bg-white px-3 py-2.5 text-sm text-charcoal focus:border-navy focus:outline-none"
            />
          ) : field.type === "file" ? (
            <input
              id={field.name}
              name={field.name}
              type="file"
              required={field.required}
              className="mt-2 w-full border border-hairline bg-white px-3 py-2.5 text-sm text-charcoal file:mr-4 file:border-0 file:bg-offwhite file:px-3 file:py-1.5 focus:border-navy focus:outline-none"
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              className="mt-2 w-full border border-hairline bg-white px-3 py-2.5 text-sm text-charcoal focus:border-navy focus:outline-none"
            />
          )}
        </div>
      ))}

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="bg-navy px-6 py-3 text-sm font-medium text-white hover:bg-navy-dark"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
