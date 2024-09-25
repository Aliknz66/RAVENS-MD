const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 


zokou({ nomCom: 'uptime',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '⚙️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`❒─❒⁠⁠⁠⁠ *BOT-IS-RUNNING* ❒⁠⁠⁠⁠─⁠⁠⁠⁠❒⁠⁠⁠⁠
╭❒⁠⁠⁠⁠─❒⁠⁠⁠⁠─❒⁠⁠⁠⁠─❒⁠⁠⁠⁠─❒⁠⁠⁠⁠              
❒⁠⁠⁠⁠ 𝑫𝑬𝑽   : 𝑴𝒂𝒍𝒗𝒊𝒏 𝑲𝒊𝒏𝒈    
❒⁠⁠⁠⁠ 𝑩𝑶𝑻   : ${runtime(process.uptime())}
❒⁠⁠⁠⁠ 𝙈𝘿: [ 𝙓𝙑1 ]
╰❒⁠⁠⁠⁠─❒⁠⁠⁠⁠─❒⁠⁠⁠⁠─❒⁠⁠⁠⁠─❒⁠⁠⁠⁠
╭❒⁠⁠⁠⁠─❒⁠⁠⁠⁠─❒⁠⁠⁠⁠─❒⁠⁠⁠⁠─❒⁠⁠⁠⁠
❒⁠⁠⁠⁠ *𝑭𝒐𝒍𝒍𝒐𝒘 𝒘𝒉𝒂𝒕𝒔𝒂𝒑𝒑 𝒄𝒉𝒂𝒏𝒏𝒆𝒍 𝒇𝒐𝒓 𝒖𝒑𝒅𝒂𝒕𝒆𝒔*
> https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z
❒⁠⁠⁠⁠ 
╰❒⁠⁠⁠⁠─❒⁠⁠⁠⁠─❒⁠⁠⁠⁠─❒⁠⁠⁠⁠─❒`) 

   


  }
);


zokou({ nomCom: 'ss',
    desc: 'screenshots website',
    Categorie: 'General',
    reaction: '🎥', 
    fromMe: 'true', 

},
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

    if (!arg || arg.length === 0) return repondre("provide a link...");

         const linkk = arg.join(' ');



let linkkk = `https://api.screenshotmachine.com/?key=c04d3a&url=${encodeURIComponent(linkk)}&dimension=720x720`;

let res = await getBuffer(linkkk);

await zk.sendMessage(dest, { image: res, caption: 'powered  𝒃𝒚 * RAVENS MD*'}, { quoted: ms });


}
);
