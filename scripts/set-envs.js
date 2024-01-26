require('dotenv').config();
const { writeFileSync, mkdirSync } = require('fs');

const targetPath = './src/environments/environment.ts';

const envFileContent = `
export const environment = {
  mapbox_key: "${ process.env['MAPBOX_KEY']}",
};
Object.freeze( environment );
`;
// Create dir
mkdirSync('./src/environments', {  recursive: true });
// Write file
writeFileSync( targetPath, envFileContent );

