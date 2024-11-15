let handler = async (m, { text, usedPrefix, command, conn }) => {
  try {
    // Static intro card text
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
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
    `;
    let pp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

    try {
      pp = await conn.profilePictureUrl(m.sender);
    } catch (e) {
      console.log("Error fetching profile picture:", e);
    }

    const sourceUrl = 'https://Github.com/Tohidkhan6332';

    const contextInfo = {
      mentionedJid: [m.sender],

      externalAdReply: {
        title: 'TOHID-KHAN', // Title of the card
        body: '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯',
        thumbnailUrl: https://i.imgur.com/M1BzE37.jpeg,
        mediaUrl: https://i.imgur.com/M1BzE37.jpeg,
        sourceUrl: sourceUrl,
      },
    };
    await conn.sendMessage(m.chat, { text: introText, contextInfo }, { quoted: m });

  } catch (e) {
    console.error(e);
    await conn.sendMessage(m.chat, { text: `❌ Something went wrong: ${e.message}` }, { quoted: m });
  }
};

handler.help = ['intro'];
handler.tags = ['fun'];
handler.command = /^(intro)$/i;

export default handler;