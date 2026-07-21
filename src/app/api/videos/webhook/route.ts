import { headers } from "next/headers";
import {
    VideoAssetCreatedWebhookEvent,
    VideoAssetErroredWebhookEvent,
    VideoAssetReadyWebhookEvent,
    VideoAssetTrackReadyWebhookEvent 
} from "@mux/mux-node/resources/webhooks/webhooks"
import { mux } from "@/lib/mux";
import { prisma } from "@/lib/prisma";

const SIGNING_SECRET = process.env.MUX_WEBHOOK_SECRET!;


type WebhookEvent = | VideoAssetCreatedWebhookEvent | VideoAssetErroredWebhookEvent | VideoAssetReadyWebhookEvent | VideoAssetTrackReadyWebhookEvent

export const POST = async (request: Request) => {
    if (!SIGNING_SECRET) {
        throw new Error("MUX_WEBHOOK_SECRET is not set")
    }

    const headerPayLoad = await headers();
    const muxSignature = headerPayLoad.get("mux-signature");

    if (!muxSignature) {
        return new Response("No signature found", {status: 401});
    }

    const payload = await request.json();
    const body = JSON.stringify(payload);

    mux.webhooks.verifySignature(
        body,
        {
            "mux-signature": muxSignature
        },
        SIGNING_SECRET
    );

    switch (payload.type as WebhookEvent["type"]) {
        case "video.asset.created": {
            const data = payload.data as VideoAssetCreatedWebhookEvent["data"];
            if (!data.upload_id) {
                return new Response("No upload ID found", {status: 400});
            }
            await prisma.videos.update({
                where: {
                    muxUploadId: String(data.upload_id)
                },
                data: {
                    muxAssetId: data.id,
                    muxStatus: data.status,
                }
            });
            break;
        }        
    }

    return new Response("Webhook received", {status: 200})

};