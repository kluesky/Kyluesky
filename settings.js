const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "Instagram: @me_kyluesky" //ur github or insta name
global.location = "Japan, Nagoya, Yagoto" //ur location

//new
global.botname = 'Seiren Beta' //ur bot name
global.ownernumber = '6281994421192' //ur owner number
global.ownername = 'Seira' //ur owner name
global.websitex = "https://www.youtube.com/@Kyluesky"
global.wagc = "https://whatsapp.com/channel/0029VaP7Yk2KbYMSCUOFS440"
global.themeemoji = '🪀'
global.wm = "Seiren Bot Inc."
global.botscript = 'https://github.com/kluesky/Kyluesky1' //script link
global.packname = "Sticker By"
global.author = "Seiren\n\n+6281994421192"
global.creator = "6281994421192@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6281994421192"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = true //show promote/demote message
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
