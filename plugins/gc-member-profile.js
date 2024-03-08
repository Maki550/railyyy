import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ المستخدم ليس في قاعدة بياناتي`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './menu4.jpg')
let user = global.db.data.users[who]
let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
let { name, exp, credit, lastclaim, registered, regTime, age, level, role, wealth, warn } = global.db.data.users[who]

let { min, xp, max } = xpRange(user.level, global.multiplier)

let username = conn.getName(who)
let math = max - xp 
let prem = global.prems.includes(who.split`@`[0])

let sn = createHash('md5').update(who).digest('hex')

// • @${who.replace(/@.+/, '')}

let str = `*❐═━━━═╊⊰♦️⊱╉═━━━═❐*

*↫ صـوره قـمـر زي صـاحـبـهـا 🥺♥.!*

*⌁︙الـمـ💳ـنـشـن↫ @${who.replace(/@.+/, '')}*

*⌁︙الاسـ🏷️ـم↫* ${username}${about ? '\n\n *⌁︙البـايـ⚡ــو↫ ' + about : ''}*

*⌁︙الـمـسـ🎚️ـتـوى↫ ${level}*

*⌁︙الـنـقـ♦️ـاط↫ ${exp} (${user.exp - min} / ${xp})*

*⌁︙مـسـ🆔ـجـل↫ ${registered ? 'يب': 'لا'}*

*❐═━━━═╊⊰♦️⊱╉═━━━═❐*

『🔱╎𝐌𝐀𝐃𝐀𝐑𝐀 𝐁𝐎𝐓╎🔱』`

    conn.sendFile(m.chat, pp, 'profil.jpg', str, m, false, { mentions: [who] })

}

handler.help = ['profile']
handler.tags = ['group']
handler.command = ['البروفايل','انا','بروفايل','ايدي'] 

export default handlers
