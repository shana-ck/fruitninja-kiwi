import { Bot } from "@skyware/bot";
import 'dotenv/config'

const bot = new Bot();

const blockTerms = ["kiwifarms", "kiwi", "consent accidents", "archive.ph/vDfg0"]

async function blockParams (user) {
    let displayName = user.displayName
    let description = user.description
    // console.log(displayName, description)
    let re = new RegExp(blockTerms.join("|"), "i")
    return(re.test(displayName + " " + description))

}

await bot.login({
    identifier: process.env.BSKY_HANDLE,
    password: process.env.BSKY_PW
})

bot.on("follow", async(evt) => {
    const userFollow = evt.user;
    let result = await blockParams(userFollow)
    if(result) {
        console.log(result)
        await bot.block(userFollow.did)
        console.log(`blocked ${userFollow.displayName}`)
    }
})