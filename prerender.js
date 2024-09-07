const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const routes = [
  '/',
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
    try {
      const url = `http://localhost:8080${route}`;
      console.log(`Pré-rendu de ${url}`);
      await page.goto(url, { waitUntil: 'networkidle2' });
      const content = await page.content();

      const filePath = path.join(__dirname, 'dist', `${route === '/' ? 'index' : route.slice(1)}.html`);
      fs.writeFileSync(filePath, content);

      console.log(`Page pré-rendue : ${filePath}`);
    } catch (error) {
      console.error(`Erreur lors du pré-rendu de ${route}:`, error);
    }
  }

  await browser.close();
})();
