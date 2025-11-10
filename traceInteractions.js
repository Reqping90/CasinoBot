const { Interaction } = require('discord.js');

function patchInteractionMethod(methodName) {
  const original = Interaction.prototype[methodName];
  if (!original) return;

  Interaction.prototype[methodName] = async function (...args) {
    try {
      return await original.apply(this, args);
    } catch (err) {
      console.error(`\n❌ [${methodName} ERROR]`);
      console.error(`Type: ${this.constructor?.name || 'Unknown'}`);
      console.error(`Custom ID: ${this.customId || 'N/A'}`);
      console.error(`Command: ${this.commandName || 'N/A'}`);
      console.error(`User: ${this.user?.tag || 'Unknown'}`);
      console.error(err.stack);
      throw err;
    }
  };
}
['reply', 'followUp', 'editReply', 'update', 'deferReply', 'deferUpdate'].forEach(patchInteractionMethod);