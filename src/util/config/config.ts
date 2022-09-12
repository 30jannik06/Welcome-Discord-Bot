import {GatewayIntentBits, Partials} from "discord.js"
class Settings {
    public token: string;
    public intents: number[];
    public partials: number[];

    constructor() {
        this.token = "BOT_TOKEN_HERE";
        this.intents = [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildWebhooks,
        ];
        this.partials = [
            Partials.Channel,
            Partials.GuildMember,
            Partials.Message,
        ];
    }
}

export const { token, intents, partials } = new Settings();
