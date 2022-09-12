import { WebhookClient } from "discord.js";

class webhookHelper {
    async webhookClient(
        wID: string,
        wToken: string,
        msg?: string,
        embed?: any[],
        file?: any[],
        attachment?: []
    ) {
        const webhookClient = new WebhookClient({
            id: wID,
            token: wToken,
        });

        webhookClient.send({ content: msg, embeds: embed, files: file, attachments: attachment });
    }
}

export const { webhookClient } = new webhookHelper();
