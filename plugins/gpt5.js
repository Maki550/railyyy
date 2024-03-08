import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗]يجب ان تكتب اي شي لي يتكلم البوت معك ${usedPrefix + command} مثال: هل انت ذكاء اصطناعي*\n*◉ ${usedPrefix + command} من *`
try {
//m.reply('*[❗] 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙴𝙽 𝙻𝙾 𝚀𝚄𝙴 𝙼𝙰𝙽𝙳𝙾 𝙻𝙾 𝚀𝚄𝙴 𝙼𝙴 𝙿𝙸𝙳𝙸𝙾*')
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*[❗] حدث خطا في تدوير علي رد*`
}}
handler.command = ['openai', 'chatgpt', 'ia', 'تحدث']
export default handler
