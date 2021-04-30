
const db = require('../../db.js');
const Discord = require('discord.js');
const embeds = require('../../functions/embeds')
const functions = require('../../functions/functions')


module.exports = {
	name: 'shop',
	description: 'View the shop or the details of an item',
	aliases: ['store'],
	usage: '`a.shop <item>`, `a.shop`',
	category: 'economy',

	async execute(message, args) {
		var items = items
		const result = await db.fetch(message.author.id)
		if (!parseInt(args[0]) && args[0]) {
			var item = items.get(args[0]) || items.find(cmd => cmd.aliases && cmd.aliases.includes(args[0]));
			if (!item) return shop(1)
			embeds.defaultEmbed(
				message,
				item.displayName + ` (${result[item.name]})`,
				`${item.description}

				**Icon**: ${item.emoji}
				**Item**: ${item.displayName}
				**Price**: ${item.price}`
			)
		}

		function shop(page) {

			var itemIndexes = (page - 1) * 7
			var lastItem = itemIndexes + 7;

			(lastItem > items.length())? lastItem = items.length():false  

			
						
		}

	},
};
















