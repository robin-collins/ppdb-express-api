'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Seed data for customers
    await queryInterface.bulkInsert('customers', [
      { customerid: 1, surname: 'Smith', firstname: 'John', address: '123 Elm St', suburb: 'Springfield', postcode: 12345, phone1: '123-456-7890', phone2: '234-567-8901', phone3: '345-678-9012', email: 'john.smith@example.com' },
      { customerid: 2, surname: 'Doe', firstname: 'Jane', address: '456 Oak St', suburb: 'Shelbyville', postcode: 23456, phone1: '456-789-0123', phone2: '567-890-1234', phone3: '678-901-2345', email: 'jane.doe@example.com' },
      { customerid: 3, surname: 'Johnson', firstname: 'Michael', address: '789 Maple Ave', suburb: 'Greenfield', postcode: 34567, phone1: '789-012-3456', phone2: '890-123-4567', phone3: '901-234-5678', email: 'michael.johnson@example.com' },
      { customerid: 4, surname: 'Williams', firstname: 'Emily', address: '321 Pine Rd', suburb: 'Oakville', postcode: 45678, phone1: '012-345-6789', phone2: '123-456-7890', phone3: '234-567-8901', email: 'emily.williams@example.com' },
      { customerid: 5, surname: 'Brown', firstname: 'David', address: '654 Cedar Ln', suburb: 'Maplewood', postcode: 56789, phone1: '345-678-9012', phone2: '456-789-0123', phone3: '567-890-1234', email: 'david.brown@example.com' },
      { customerid: 6, surname: 'Davis', firstname: 'Sarah', address: '987 Birch St', suburb: 'Willowbrook', postcode: 67890, phone1: '678-901-2345', phone2: '789-012-3456', phone3: '890-123-4567', email: 'sarah.davis@example.com' },
      { customerid: 7, surname: 'Miller', firstname: 'Robert', address: '147 Spruce Ave', suburb: 'Cedarville', postcode: 78901, phone1: '901-234-5678', phone2: '012-345-6789', phone3: '123-456-7890', email: 'robert.miller@example.com' },
      { customerid: 8, surname: 'Wilson', firstname: 'Jessica', address: '258 Oakwood Dr', suburb: 'Pinehurst', postcode: 89012, phone1: '234-567-8901', phone2: '345-678-9012', phone3: '456-789-0123', email: 'jessica.wilson@example.com' },
      { customerid: 9, surname: 'Taylor', firstname: 'Christopher', address: '369 Elmwood Rd', suburb: 'Maplehurst', postcode: 90123, phone1: '567-890-1234', phone2: '678-901-2345', phone3: '789-012-3456', email: 'christopher.taylor@example.com' },
      { customerid: 10, surname: 'Anderson', firstname: 'Amanda', address: '753 Pineridge Ln', suburb: 'Cedarwood', postcode: 10234, phone1: '890-123-4567', phone2: '901-234-5678', phone3: '012-345-6789', email: 'amanda.anderson@example.com' },
    ], {});

    // Seed data for breeds
    await queryInterface.bulkInsert('breeds', [
      { breedid: 1, breedname: 'Labrador', avgtime: '01:30:00', avgcost: 150 },
      { breedid: 2, breedname: 'Beagle', avgtime: '01:20:00', avgcost: 130 },
      { breedid: 3, breedname: 'Golden Retriever', avgtime: '01:45:00', avgcost: 160 },
      { breedid: 4, breedname: 'Poodle', avgtime: '01:15:00', avgcost: 140 },
      { breedid: 5, breedname: 'Siberian Husky', avgtime: '01:40:00', avgcost: 170 },
      { breedid: 6, breedname: 'Chihuahua', avgtime: '01:10:00', avgcost: 120 },
      { breedid: 7, breedname: 'Boxer', avgtime: '01:35:00', avgcost: 155 },
      { breedid: 8, breedname: 'Shih Tzu', avgtime: '01:25:00', avgcost: 135 },
      { breedid: 9, breedname: 'German Shepherd', avgtime: '01:50:00', avgcost: 180 },
      { breedid: 10, breedname: 'Bulldog', avgtime: '01:30:00', avgcost: 150 },
    ], {});


    // Seed data for animals
    await queryInterface.bulkInsert('animals', [
      { animalid: 1, animalname: 'Rex', breedid: 1, customerid: 1, sex: 'Male', colour: 'Brown', cost: 200, lastvisit: '2023-01-10', thisvisit: '2023-03-24', comments: 'Very calm' },
      { animalid: 2, animalname: 'Bella', breedid: 2, customerid: 2, sex: 'Female', colour: 'Black', cost: 250, lastvisit: '2023-02-15', thisvisit: '2023-03-24', comments: 'Energetic' },
      { animalid: 3, animalname: 'Max', breedid: 3, customerid: 3, sex: 'Male', colour: 'Golden', cost: 180, lastvisit: '2023-03-05', thisvisit: '2023-03-24', comments: 'Friendly' },
      { animalid: 4, animalname: 'Lucy', breedid: 4, customerid: 4, sex: 'Female', colour: 'White', cost: 220, lastvisit: '2023-01-20', thisvisit: '2023-03-24', comments: 'Shy' },
      { animalid: 5, animalname: 'Charlie', breedid: 5, customerid: 5, sex: 'Male', colour: 'Gray', cost: 190, lastvisit: '2023-02-28', thisvisit: '2023-03-24', comments: 'Playful' },
      { animalid: 6, animalname: 'Daisy', breedid: 6, customerid: 6, sex: 'Female', colour: 'Cream', cost: 210, lastvisit: '2023-03-12', thisvisit: '2023-03-24', comments: 'Gentle' },
      { animalid: 7, animalname: 'Rocky', breedid: 7, customerid: 7, sex: 'Male', colour: 'Brindle', cost: 230, lastvisit: '2023-01-25', thisvisit: '2023-03-24', comments: 'Energetic' },
      { animalid: 8, animalname: 'Molly', breedid: 8, customerid: 8, sex: 'Female', colour: 'Tan', cost: 200, lastvisit: '2023-02-18', thisvisit: '2023-03-24', comments: 'Loyal' },
      { animalid: 9, animalname: 'Buddy', breedid: 9, customerid: 9, sex: 'Male', colour: 'Black and White', cost: 240, lastvisit: '2023-03-08', thisvisit: '2023-03-24', comments: 'Intelligent' },
      { animalid: 10, animalname: 'Sadie', breedid: 10, customerid: 10, sex: 'Female', colour: 'Red', cost: 220, lastvisit: '2023-01-30', thisvisit: '2023-03-24', comments: 'Affectionate' },
    ], {});


    // Seed data for notes
    await queryInterface.bulkInsert('notes', [
      { noteid: 1, animalid: 1, notes: 'Needs special diet', date: '2023-03-24' },
      { noteid: 2, animalid: 2, notes: 'Allergic to beef', date: '2023-03-24' },
      { noteid: 3, animalid: 3, notes: 'Requires daily exercise', date: '2023-03-24' },
      { noteid: 4, animalid: 4, notes: 'Sensitive to loud noises', date: '2023-03-24' },
      { noteid: 5, animalid: 5, notes: 'Loves to play fetch', date: '2023-03-24' },
      { noteid: 6, animalid: 6, notes: 'Needs regular grooming', date: '2023-03-24' },
      { noteid: 7, animalid: 7, notes: 'Has separation anxiety', date: '2023-03-24' },
      { noteid: 8, animalid: 8, notes: 'Prefers soft food', date: '2023-03-24' },
      { noteid: 9, animalid: 9, notes: 'Training in progress', date: '2023-03-24' },
      { noteid: 10, animalid: 10, notes: 'Recovering from surgery', date: '2023-03-24' },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customers', null, {});
    await queryInterface.bulkDelete('animals', null, {});
    await queryInterface.bulkDelete('breeds', null, {});
    await queryInterface.bulkDelete('notes', null, {});
  }
};
