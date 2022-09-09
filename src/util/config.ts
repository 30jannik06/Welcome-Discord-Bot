import {GatewayIntentBits, Partials} from "discord.js"
class settings {
    public token: string;
    public intents: any[];
    public partials: any[];

    constructor() {
        this.token = "BOT_TOKEN_HERE"; // Put the Token of your Bot Here
        this.intents = [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildWebhooks,
        ];
        this.partials = [
            Partials.Channel,
            Partials.GuildMember,
            Partials.Message
        ]
    }
}

export const { token, intents, partials} = new settings();
