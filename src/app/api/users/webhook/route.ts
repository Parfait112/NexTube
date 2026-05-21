import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    // Verify Clerk webhook
    const evt = await verifyWebhook(req);

    const eventType = evt.type;

    console.log("Webhook Event:", eventType);

    // =================================
    // USER CREATED
    // =================================
    if (eventType === "user.created") {
      const {
        id,
        first_name,
        last_name,
        image_url,
      } = evt.data;

      // Build full name
      const fullName =
        `${first_name || ""} ${last_name || ""}`.trim();

      await prisma.user.create({
        data: {
          clerk_id: id,
          name: fullName || "Unknown User",
          image_url: image_url || "",
        },
      });

      console.log("User inserted");
    }

    // =================================
    // USER UPDATED
    // =================================
    if (eventType === "user.updated") {
      const {
        id,
        first_name,
        last_name,
        image_url,
      } = evt.data;

      const fullName =
        `${first_name || ""} ${last_name || ""}`.trim();

      await prisma.user.update({
        where: {
          clerk_id: id,
        },
        data: {
          name: fullName || "Unknown User",
          image_url: image_url || "",
          updated_at: new Date(),
        },
      });

      console.log("User updated");
    }

    // =================================
    // USER DELETED
    // =================================
    if (eventType === "user.deleted") {
      const { id } = evt.data;

      if (id) {
        await prisma.user.delete({
          where: {
            clerk_id: id,
          },
        });

        console.log("User deleted");
      }
    }

    return new Response("Webhook received", {
      status: 200,
    });
  } catch (error) {
    console.error("Webhook error:", error);

    return new Response("Webhook error", {
      status: 400,
    });
  }
}