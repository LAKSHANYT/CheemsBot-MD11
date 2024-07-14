//base by LAKSHAN-MD
//re-upload? recode? copy code? give credit ya :)
//YouTube: @gaming_lakshanyt
//Instagram: DUMINDULAKSHAN
//Telegram: T.Me/Lakshanyt
//GitHub: @LAKSHANYT
//WhatsApp: +94742420362
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT:@gaming_lakshanyt" //ur yt chanel name
global.socialm = "GitHub: LAKSHANYT" //ur github or insta name
global.location = "Srilanka,India, Mizoram, Aizawl" //ur location

//new
global.botname = 'LAKSHAN-MD Bot V11' //ur bot name
global.ownernumber = '94742420362' //ur owner number
global.ownername = 'LAKSHAN-YT' //ur owner name
global.websitex = "https://youtube.com/@gaming_lakshanyt"
global.wagc = "https://whatsapp.com/channel/0029VagLvJ92v1ItgMUGfl2N"
global.themeemoji = '🪀'
global.wm = "Lakshan-md Bot Inc."
global.botscript = 'https://github.com/LAKSHANYT/LAKSHAN-YT' //script link
global.packname = "Sticker By"
global.author = "LAKSHANYT\n\n+94742420362"
global.creator = "94742420362@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["94742420362"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '94' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
