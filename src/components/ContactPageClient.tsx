"use client";

import React, { useState, useEffect, useCallback } from "react";
import { QuoteForm } from "@/components/QuoteForm";

interface DemoEnquiry {
  id: number;
  referenceCode: string;
  fullName: string;
  contactMethod: string;
  postcode: string;
  serviceCategory: string;
  projectDescription: string;
  preferredTiming: string;
  customerType: string;
  createdAt: string;
}

export function ContactPageClient() {
  const [enquiries, setEnquiries] = useState<DemoEnquiry[]>([]);
  const [showDemoLog, setShowDemoLog] = useState(false);

  const loadEnquiries = useCallback(async () => {
    try {
      const res = await fetch("/api/enquiries");
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data.enquiries || []);
      }
    } catch {
      // ignore in demo preview
    }
  }, []);

  useEffect(() => {
    loadEnquiries();
  }, [loadEnquiries]);

  return (
    <div className="space-y-8">
      <div id="quote-form">
        <QuoteForm onSubmitted={loadEnquiries} />
      </div>

      {/* Collapsible Demo Enquiry Preview Log */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
              Proposed Website Demonstration Feature
            </span>
            <h3 className="text-sm font-bold text-slate-900">
              Recent Test Enquiries Captured ({enquiries.length})
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setShowDemoLog((prev) => !prev)}
            className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-xs font-semibold text-slate-700 cursor-pointer"
          >
            {showDemoLog ? "Hide Demo Log" : "View Demo Log"}
          </button>
        </div>

        {showDemoLog && (
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
            {enquiries.length === 0 ? (
              <p className="text-xs text-slate-500">
                No test enquiries submitted yet in this session. Use the form
                above to test the quotation workflow.
              </p>
            ) : (
              enquiries.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>
                      {item.referenceCode} • {item.fullName} ({item.postcode})
                    </span>
                    <span className="text-amber-700">
                      {item.serviceCategory}
                    </span>
                  </div>
                  <p className="text-slate-600">{item.projectDescription}</p>
                  <div className="text-[11px] text-slate-400">
                    Contact: {item.contactMethod} • Timing:{" "}
                    {item.preferredTiming}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
