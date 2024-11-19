import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command, conn }) => {
  try {
    // Expanded intro card text with additional fields
    const introText = `
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
 ◈ •│ Name      : ᴛᴏʜɪᴅ-ᴋʜᴀɴ
 ◈ •│
 ◈ •│ Place      : ɪɴᴅɪᴀ
 ◈ •│
 ◈ •│ Gender    : ᴍᴀʟᴇ
 ◈ •│
 ◈ •│ Age       : 19_
 ◈ •│
 ◈ •│ Status     : 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁
 ◈ •│
 ◈ •│ Phone     : wa.me/917849917350
 ◈ •│
 ◈ •│ IG ID      : Tohidkhan6332
 ◈ •│
 ◈ •│ Connect   : https://tg-contact-form.vercel.app/
 ◈ •│
 ◈ •│ Github     : Tohidkhan6332
 ◈ •│
 ◈ •│ Website    : https://tohid-web.vercel.app/
 ◈ •│
 ◈ •│ Skills       : 𝙹𝙰𝚅𝙰𝚂𝙲𝚁𝙸𝙿𝚃
 ◈ •│
 ◈ •│ Lang       : 𝙴𝙽𝙶𝙻𝙸𝚂𝙷,
 ◈ •│
 ◈ •│ Project     : ᴛᴏʜɪᴅ-ᴋʜᴀɴ
 ◈ •│
 ◈ •│ Hobbie     : 𝙲𝙾𝙳𝙸𝙽𝙶,𝙱𝙾𝚃𝚂
 ◈ •│
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
    `;

    let pp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

    // Try fetching the profile picture of the sender
    try {
      pp = await conn.profilePictureUrl(m.sender);
    } catch (e) {
      console.log("Error fetching profile picture:", e);
    }

    const sourceUrl = 'https://Github.com/Tohidkhan6332'; // Example source URL for the card

    const contextInfo = {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'TOHID-KHAN', // Title of the card
        body: '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯',
        thumbnailUrl: 'https://github.com/Tohidkhan6332.png', // Fixed URL syntax with quotes
        mediaUrl: 'https://github.com/Tohidkhan6332.png', // Fixed URL syntax with quotes
        sourceUrl: sourceUrl, // Source URL for the card
      },
    };

    // Send the message with the extended intro text and external ad reply
    await conn.sendMessage(m.chat, { text: introText, contextInfo }, { quoted: m });

  } catch (e) {
    console.error(e);
    await conn.sendMessage(m.chat, { text: `❌ Something went wrong: ${e.message}` }, { quoted: m });
  }
};

handler.help = ['intro'];
handler.tags = ['fun'];
handler.command = /^owner|intro|duction$/i;

export default handler;
