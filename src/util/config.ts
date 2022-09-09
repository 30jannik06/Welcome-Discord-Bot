import {GatewayIntentBits} from "discord.js"
class settings {
    public token: string;
    public intents: any[];

    constructor() {
        this.token =
            "BOT_TOKEN_HERE"; // Put the Token of your Bot Here
        this.intents = [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildWebhooks,
        ];
    }
}

export const { token, intents } = new settings();
