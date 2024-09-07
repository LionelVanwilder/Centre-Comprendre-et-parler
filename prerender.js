const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/about',
  '/contact',
  '/Vision',
  '/Mission',
  '/Quisommesnous',
  '/OrganesdeGestion',
  '/Organigrammes',
  '/RapportdActivités',
  '/Histoire',
  '/Programmes',
  '/Programmes/EducationPrecoce',
  '/Programmes/Specialisation',
  '/Programmes/Integration',
  '/Programmes/Services',
  '/Programmes/FormationsExterieures',
  '/Programmes/Depistage',
  '/Competences',
  '/Competences/Accompagnements',
  '/Competences/AssistancesSociales',
  '/Competences/Audiologie',
  '/Competences/Logopedie',
  '/Competences/Recherches',
  '/Competences/Medecins',
  '/Competences/Psychomotricite',
  '/Collaborations/Partenaires',
  '/Collaborations/Autrescollaborations',
  '/Collaborations/Rayonnement',
  '/SAFP/Surdite',
  '/Don',
  '/:id',
  '/Privacy',
  '/Legal'

];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `http://localhost:8080${route}`; // Change l'URL de base si nécessaire
    await page.goto(url, { waitUntil: 'networkidle2' });
    const content = await page.content();
    
    // Crée un fichier HTML pour chaque route
    fs.writeFileSync(
      path.join(__dirname, 'dist', `${route === '/' ? 'index' : route.slice(1)}.html`),
      content
    );
  }

  await browser.close();
})();
