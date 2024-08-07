//base by LAKSHANYT
//re-upload? recode? copy code? give credit ya :)
//YouTube: @gaming_lakshanyt
//Instagram: DUMINDU LAKSHAN
//Telegram: t.me/Lakshanyt
//GitHub: @LAKSHANYT
//WhatsApp: +94742420362
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@gaming_lakshanyt


const { spawn } = require('child_process');
const path = require('path');

// Function to start the bot process
function start() {
   let args = [path.join(__dirname, 'bot.js'), ...process.argv.slice(2)];
   console.log(`Starting process: ${process.argv[0]} ${args.join(' ')}`);

   // Spawn the child process
   let p = spawn(process.argv[0], args, {
      stdio: ['inherit', 'inherit', 'inherit', 'ipc']
   });

   // Handle messages from the child process
   p.on('message', data => {
      if (data === 'reset') {
         console.log('Restarting bot...');
         p.kill();
         start(); // Restart the process
      }
   });

   // Handle process exit
   p.on('exit', code => {
      console.error('Process exited with code:', code);
      if (code !== 0) {
         console.log('Restarting bot due to non-zero exit code...');
         start(); // Restart the process
      }
   });

   // Handle errors in the spawn process
   p.on('error', err => {
      console.error('Failed to start subprocess:', err);
   });
}

// Start the bot
start();
