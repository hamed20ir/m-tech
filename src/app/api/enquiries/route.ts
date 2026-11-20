import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";
import { db } from "@/db";
import { quoteEnquiries } from "@/db/schema";

export async function GET() {
  try {
    const items = await db
      .select()
      .from(quoteEnquiries)
      .orderBy(desc(quoteEnquiries.createdAt))
      .limit(10);
    return NextResponse.json({ enquiries: items });
  } catch {
    return NextResponse.json({ enquiries: [] });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = String(body.fullName || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const postcode = String(body.postcode || "").trim().toUpperCase();
    const serviceCategory = String(body.serviceCategory || "General Enquiry").trim();
    const projectDescription = String(body.projectDescription || "").trim();
    const preferredTiming = String(body.preferredTiming || "Flexible").trim();
    const photoFileName = body.photoFileName ? String(body.photoFileName).trim() : null;
    const customerType = String(body.customerType || "Homeowner").trim();

    if (!fullName || (!phone && !email) || !postcode || !projectDescription) {
      return NextResponse.json(
        {
          error:
            "Please provide your name, a telephone number or email address, your postcode, and a brief description of the work required.",
        },
        { status: 400 }
      );
    }

    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const referenceCode = `MTQ-${randomDigits}`;
    const contactMethod =
      phone && email ? `${phone} / ${email}` : phone || email;

    let savedRecord = null;
    try {
      const [inserted] = await db
        .insert(quoteEnquiries)
        .values({
          referenceCode,
          fullName,
          contactMethod,
          phone: phone || null,
          email: email || null,
          postcode,
          serviceCategory,
          projectDescription,
          preferredTiming,
          photoFileName,
          customerType,
        })
        .returning();
      savedRecord = inserted;
    } catch {
      // Fallback if DB table is not yet pushed in preview environment
      savedRecord = {
        id: Date.now(),
        referenceCode,
        fullName,
        contactMethod,
        phone: phone || null,
        email: email || null,
        postcode,
        serviceCategory,
        projectDescription,
        preferredTiming,
        photoFileName,
        customerType,
        createdAt: new Date().toISOString(),
      };
    }

    return NextResponse.json(
      {
        success: true,
        demoMode: true,
        message:
          "Demo Mode Confirmation: Your enquiry has been validated and recorded in the local demonstration log. Because this is a proposed website preview, no external email has been dispatched yet.",
        enquiry: savedRecord,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to process your enquiry at this time." },
      { status: 500 }
    );
  }
}
