import { ActionRowBuilder, Interaction, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from "discord.js";
import { registerUserData } from "../globals";
import { BaseModalSubmit } from "./BaseModalSubmit";



export class RegisterModalSubmit extends BaseModalSubmit {

  constructor() {
    super({
      customId: "register-modal",
    })
  }

  async execute(interaction: Interaction): Promise<void> {


    if (!interaction.isModalSubmit()) return;


    const email = interaction.fields.getTextInputValue("email")
    const firstName = interaction.fields.getTextInputValue("first_name");
    const lastName = interaction.fields.getTextInputValue("last_name");

    registerUserData.set(interaction.user.id, {
      email, firstName, lastName
    })
    const companySelector = new StringSelectMenuBuilder()
      .setCustomId('register-company-selector')
      .setPlaceholder('Select the company your are working on')
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel('Fatoura')
          .setValue("12")
      );

    const row = new ActionRowBuilder<StringSelectMenuBuilder>()
      .addComponents(companySelector);

    const response = await interaction.reply({
      content: "Select the company your are working on",
      components: [row]
    });










  }
}
