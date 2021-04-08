let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Xl [087881449422
│ • Telkomsel [081334177340]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
