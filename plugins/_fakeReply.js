
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://i.ibb.co/9HY4wjz/a4c0b1af253197d4837ff6760d5b81c0.jpg')
	
	//reply link wa
   global.rpgc = { contextInfo: { externalAdReply: { mediaUrl: 'https://i.ibb.co/9HY4wjz/a4c0b1af253197d4837ff6760d5b81c0.jpg', mediaType: 'VIDEO', description: 'support group', title: 'JOIN GROUP', body: 'support group', thumbnailUrl: 'https://i.ibb.co/9HY4wjz/a4c0b1af253197d4837ff6760d5b81c0.jpg', sourceUrl: 'https://whatsapp.com/channel/0029VaGyP933bbVC7G0x0i2T' }}} 
	
	//reply link Instagram 
    global.rpig = { contextInfo: { externalAdReply: { mediaUrl: 'https://i.ibb.co/9HY4wjz/a4c0b1af253197d4837ff6760d5b81c0.jpg', mediaType: 'VIDEO', description: 'FOLLOW DEVELOPER', title: 'GITHUB', body: 'Keep bot alive', thumbnailUrl: 'https://i.ibb.co/9HY4wjz/a4c0b1af253197d4837ff6760d5b81c0.jpg', sourceUrl: 'https://Github.com/Tohidkhan6332' }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://i.ibb.co/9HY4wjz/a4c0b1af253197d4837ff6760d5b81c0.jpg', mediaType: 'VIDEO', description: 'SUBSCRIBE : YT CHANNEL', title: 'YouTube', body: 'learn to create your own bots', thumbnailUrl: 'https://i.ibb.co/9HY4wjz/a4c0b1af253197d4837ff6760d5b81c0.jpg', sourceUrl: 'https://youtube.com/@Tohidkhan_6332' }}}

//reply link WhatsApp Channel
    global.rpwp = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://i.ibb.co/9HY4wjz/a4c0b1af253197d4837ff6760d5b81c0.jpg', mediaType: 'VIDEO', description: 'Follow Channel', title: 'FOLLOW CHANNEL', body: '© Tohid Tech', thumbnailUrl: 'https://i.ibb.co/9HY4wjz/a4c0b1af253197d4837ff6760d5b81c0.jpg', sourceUrl: 'https://whatsapp.com/channel/0029VaGyP933bbVC7G0x0i2T' }}}
    
} 
export default handler
