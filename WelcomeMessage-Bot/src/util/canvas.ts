//#region Canvas Thing
import Canvas from "@napi-rs/canvas";
import { AttachmentBuilder, WebhookClient } from "discord.js";
import { request } from "undici";
class CanCan {
    async cancan(user: any, msg: string, state: string, webhId: string, webhToken: string) {
        const canvas = Canvas.createCanvas(700, 250);
        const context = canvas.getContext("2d");
        const background = await Canvas.loadImage(
            "https://i.imgur.com/9iSSezU.jpeg"
        );

        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        context.strokeStyle = "#ff0000";
        context.strokeRect(0, 0, canvas.width, canvas.height);
        context.font = "28px monteserrat";
        context.fillStyle = "#ffffff";
        context.fillText(msg, canvas.width / 2.5, canvas.height / 3.5);
        context.font = applyText(canvas, `${user.user.username}!`);
        context.fillStyle = "#ffffff";
        context.fillText(
            `${user.user.username}!`,
            canvas.width / 2.5,
            canvas.height / 1.8
        );
        context.beginPath();
        context.arc(125, 125, 100, 0, Math.PI * 2, true);
        context.closePath();
        context.clip();
        const { body } = await request(
            user.user.displayAvatarURL({ extension: "jpg" })
        );
        const avatar = await Canvas.loadImage(await body.arrayBuffer());
        context.drawImage(avatar, 25, 25, 200, 200);

        const attachment = new AttachmentBuilder(await canvas.encode("png"), {
            name: `${user.user.id}-${/*state*/ "state HErE"}.png`,
        });

        const webhookClient = new WebhookClient({
            id: webhId,
            token: webhToken,
        });

        webhookClient.send({ files: [attachment] });
    }
}

let applyText = (canvas, text) => {
    const context = canvas.getContext("2d");
    let fontSize = 70;
    do {
        context.font = `${(fontSize -= 10)}px sans-serif`;
    } while (context.measureText(text).width > canvas.width - 300);
    return context.font;
};

export const { cancan } = new CanCan();
//#endregion
