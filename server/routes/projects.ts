import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import db from '../db.ts';

const router = Router();

router.get('/', (req, res) => {
  try {
    const projects = db.prepare('SELECT * FROM projects ORDER BY id DESC').all();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

router.post('/', (req, res) => {
  try {
    const { title, category, type, location, area, year, stage, completion, image, description } = req.body;
    const id = uuidv4();
    
    const insert = db.prepare(`
      INSERT INTO projects (id, title, category, type, location, area, year, stage, completion, image, description)
      VALUES (@id, @title, @category, @type, @location, @area, @year, @stage, @completion, @image, @description)
    `);
    
    insert.run({
      id,
      title,
      category,
      type: type || 'Residential',
      location: location || null,
      area: area || null,
      year: year || null,
      stage: stage || null,
      completion: completion || null,
      image,
      description
    });
    
    const newProject = db.prepare('SELECT * FROM projects WHERE id = ?').get(id);
    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create project' });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    db.prepare('DELETE FROM projects WHERE id = ?').run(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete project' });
  }
});

export default router;
