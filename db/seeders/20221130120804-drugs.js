/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Drugs', [
      {
        title: 'Ношпа',
        price: 126,
        img: '../../public/images/noshpa.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Анальгин',
        price: 57,
        img: '../../public/images/analgin.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Парацетамол',
        price: 81,
        img: '../../public/images/paracetamol.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Гриппферон',
        price: 287,
        img: '../../public/images/gripferon.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ацикловир',
        price: 129,
        img: '../../public/images/aciklovir.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ибупрофен',
        price: 149,
        img: '../../public/images/aciklovir.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Акридерм',
        price: 91,
        img: '../../public/images/aciklovir.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Глицин',
        price: 47,
        img: '../../public/images/aciklovir.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Экзодерил',
        price: 622,
        img: '../../public/images/aciklovir.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Нимесил',
        price: 464,
        img: '../../public/images/aciklovir.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Гексорал',
        price: 417,
        img: '../../public/images/aciklovir.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Уголь активированный',
        price: 42,
        img: '../../public/images/aciklovir.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Нексиум',
        price: 247,
        img: '../../public/images/aciklovir.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ингавирин',
        price: 623,
        img: '../../public/images/aciklovir.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Арбидол',
        price: 203,
        img: '../../public/images/aciklovir.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Drugs', null, {});
  },
};
