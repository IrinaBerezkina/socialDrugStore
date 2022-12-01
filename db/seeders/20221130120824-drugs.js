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
        img: '/images/noshpa.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Анальгин',
        price: 57,
        img: '/images/analgin.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Парацетамол',
        price: 81,
        img: '/images/paracetamol.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Гриппферон',
        price: 287,
        img: '/images/gripferon.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ацикловир',
        price: 129,
        img: '/images/aciklovir.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ибупрофен',
        price: 149,
        img: '/images/ipyprofen.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Акридерм',
        price: 91,
        img: '/images/akriderm.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Глицин',
        price: 47,
        img: '/images/glicin.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Экзодерил',
        price: 622,
        img: '/images/ekzoderil.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Нимесил',
        price: 464,
        img: '/images/nimesil.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Гексорал',
        price: 417,
        img: '/images/geksoral.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Уголь активированный',
        price: 42,
        img: '/images/ygol.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Нексиум',
        price: 247,
        img: '/images/neksium.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ингавирин',
        price: 623,
        img: '/images/ingavirin.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Арбидол',
        price: 203,
        img: '/images/arbidol.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Drugs', null, {});
  },
};
