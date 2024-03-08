let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*سمعاِ وطاعا سيدي*') 
await conn.groupLeave(id)}
handler.command = /^(out|اخرج|leave|خروج)$/i
handler.group = true
handler.rowner = true
export default handler
