import { Client, ClientUser, GuildMember } from "discord.js";
import { token, intents, partials } from "./util/config";
import { evnt, log } from "./util/logHelper";
import { canvas } from "./util/canvas";

const client = new Client({
    intents: intents,
    partials: partials
});

client.on("ready", () => {
    log(`Logged in as ${client.user?.tag}`);
});

client.on("guildMemberAdd", async (member: GuildMember) => {
    canvas(
        member,
        "Welcome to (SERVER NAME)", // You can type your own message.
        "join",
        "WEBHOOK_ID_HERE",
        "WEBHOOK_TOKEN_HERE"
    );
    evnt(`${member.user.username} joined the Guild.`);
});

client.on("guildMemberRemove", async (member: PartialGuildMember) => {
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
