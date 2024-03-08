let handler = async (m, { conn, command, text }) => {
let love = `
*لدعم البوت تستطيع ان تفعل:-*
*1_تستطيع دخول قروب دعم البوت لدعمه.↯↯*
*https://chat.whatsapp.com/BzJhdxwVlte1unMYgieoYQ*

*2_وتستطيع ان تتابع البوت على الانستا:-*
*https://instagram.com/raily.bot.itachi* 

*وشكرا لكم يا افضل مستخدمين ❤️😍*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(الدعم|دعم)$/i
export default handler
