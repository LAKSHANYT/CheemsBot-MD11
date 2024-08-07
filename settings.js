const fs = require('fs');

// Session ID
const sessionid = 'your-session-id';

// Owner vCard
const ytname = "YT:@gaming_lakshanyt"; // Your YouTube channel name
const socialm = "GitHub: LAKSHANYT"; // Your GitHub or Instagram name
const location = "Srilanka, India, Mizoram, Aizawl"; // Your location

// Bot details
const botname = 'LAKSHAN-MD Bot V11'; // Your bot name
const ownernumber = '94742420362'; // Your owner number
const ownername = 'LAKSHAN-YT'; // Your owner name
const websitex = "https://youtube.com/@gaming_lakshanyt";
const wagc = "https://whatsapp.com/channel/0029VagLvJ92v1ItgMUGfl2N";
const themeemoji = '🪀';
const wm = "Lakshan-md Bot Inc.";
const botscript = 'https://github.com/LAKSHANYT/LAKSHAN-YT'; // Script link
const packname = "Sticker By";
const author = "LAKSHANYT\n\n+94742420362";
const creator = "94742420362@s.whatsapp.net";
const xprefix = '.';
const premium = ["94742420362"]; // Premium User
const hituet = 0;

// Bot settings
const typemenu = 'v8'; // Menu type 'v1' => 'v8'
const typereply = 'v2'; // Reply type 'v1' => 'v3'
const autoblocknumber = '94'; // Set autoblock country code
const antiforeignnumber = '91'; // Set anti foreign number country code
const welcome = false; // Welcome/left in groups
const anticall = false; // Bot blocks user when called
const autoswview = false; // Auto status/story view
const adminevent = false; // Show promote/demote message
const groupevent = false; // Show update messages in group chat

// Messages
const mess = {
    limit: 'Your limit is up!',
    nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
};

// Thumbnail
const thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update '${__filename}'`));
    delete require.cache[file];
    require(file);
});
