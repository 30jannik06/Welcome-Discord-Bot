import { AttachmentBuilder, Client, WebhookClient } from "discord.js";
import { token, intents, prefix } from "./util/config";
import { error, evnt, log } from "./util/logHelper";
const Canvas = require("@napi-rs/canvas");
import { cancan } from "./util/canvas";
import { request } from "undici";
import { channel } from "diagnostics_channel";

const client = new Client({
    intents: intents,
});

client.on("ready", () => {
    log(`Logged in as ${client.user.tag}`);
});

//#region CommandCreatonlol
client.on("messageCreate", async (message) => {
    if (message.author.bot || !message.guild) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/);
    let cmd = args.shift()?.toLowerCase();
    error(message.content + message.components + "");
    switch (cmd) {
        case (cmd = "test"):
            await message.delete();
            break;
        default:
            break;
    }
});
//#endregion

client.on("guildMemberAdd", async (member) => {
    cancan(
        member,
        "Willkommen bei Jailtime!",
        "join",
        "975868107421790230",
        "eY3KUfMudPzi5nI9lHkGBaVBsrKckN174adnJTivqaF6ld1PtNu-2EZVuthUJryx6LGx"
    );
    evnt("JOIN");
});

client.on("guildMemberRemove", async (member) => {
    cancan(
        member,
        "Hauste Rein!",
        "leave",
        "975868107421790230",
        "eY3KUfMudPzi5nI9lHkGBaVBsrKckN174adnJTivqaF6ld1PtNu-2EZVuthUJryx6LGx"
    );
    evnt("LEAVE");
});

client.login(token);
