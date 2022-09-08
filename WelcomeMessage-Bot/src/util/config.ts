import {GatewayIntentBits} from "discord.js"
class settings {
    public token: string;
    public prefix: string;
    public intents: any[];

    constructor() {
        this.token =
            "ODgyOTY5MzAwNjI4MDQ1ODQ1.GZ4boN.Yyt3iruovQtBkKH0SyrC3pZXydtE0xvYoagmqc";
        this.prefix = "$";
        this.intents = [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildWebhooks,
            GatewayIntentBits.DirectMessageReactions,
            GatewayIntentBits.DirectMessageTyping,
            GatewayIntentBits.GuildBans,
            GatewayIntentBits.GuildEmojisAndStickers,
            GatewayIntentBits.GuildIntegrations,
            GatewayIntentBits.GuildInvites,
            GatewayIntentBits.GuildMessageReactions,
            GatewayIntentBits.GuildScheduledEvents,
        ];
    }
}

export const { token, intents, prefix } = new settings();
