import { Client , GuildMember} from "discord.js"
import { token, intents, partials } from "./util/config/config";
import { evnt, log } from "./util/helper/logHelper";
import { canvas } from "./util/helper/canvasHelper";

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

client.on("guildMemberRemove", (member: any) => {
    canvas(
        member as GuildMember,
        "Left the Server!", // You can type your own message.
        "leave",
        "WEBHOOK_ID_HERE",
        "WEBHOOK_TOKEN_HERE"
    );
    evnt(`${member.user.username} left the Guild.`);
});

client.login(token);
