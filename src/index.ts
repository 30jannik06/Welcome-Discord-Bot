import { Client } from "discord.js";
import { token, intents } from "./util/config";
import { evnt, log } from "./util/logHelper";
import { canvas } from "./util/canvas";

const client = new Client({
    intents: intents,
});

client.on("ready", () => {
    log(`Logged in as ${client.user.tag}`);
});

client.on("guildMemberAdd", async (member) => {
    canvas(
        member,
        "Welcome to (SERVER NAME)", // You can type your own message.
        "join",
        "WEBHOOK_ID_HERE",
        "WEBHOOK_TOKEN_HERE"
    );
    evnt(`${member.user.username} joined the Guild.`);
});

client.on("guildMemberRemove", async (member) => {
    canvas(
        member,
        "Left the Server!", // You can type your own message.
        "leave",
        "WEBHOOK_ID_HERE",
        "WEBHOOK_TOKEN_HERE"
    );
    evnt(`${member.user.username} left the Guild.`);
});

client.login(token);
