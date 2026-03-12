import express from 'express';
import { createServer as createViteServer } from 'vite';
import Database from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const db = new Database('projects.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    location TEXT,
    area TEXT,
    year TEXT,
    stage TEXT,
    completion TEXT,
    image TEXT NOT NULL,
    description TEXT NOT NULL
  )
`);

// Ensure 'type' column exists (migration)
try {
  db.exec("ALTER TABLE projects ADD COLUMN type TEXT NOT NULL DEFAULT 'Residential'");
} catch (e) {
  // Column already exists or other error
}

// Insert default projects if the table is empty
const count = db.prepare('SELECT COUNT(*) as count FROM projects').get() as { count: number };
if (count.count === 0) {
  const insert = db.prepare(`
    INSERT INTO projects (id, title, category, type, location, area, year, stage, completion, image, description)
    VALUES (@id, @title, @category, @type, @location, @area, @year, @stage, @completion, @image, @description)
  `);

  const defaultProjects = [
    {
      id: '1',
      title: 'The Horizon Villa',
      category: 'completed',
      type: 'Residential',
      location: 'Beverly Hills, CA',
      area: '8,500 sq ft',
      year: '2023',
      stage: null,
      completion: null,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'A luxurious modern villa featuring expansive glass walls and a seamless indoor-outdoor living experience.'
    },
    {
      id: '2',
      title: 'Nexus Commercial Complex',
      category: 'completed',
      type: 'Commercial',
      location: 'Downtown Metro',
      area: '45,000 sq ft',
      year: '2022',
      stage: null,
      completion: null,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'A state-of-the-art office building designed for sustainability and collaborative workspaces.'
    },
    {
      id: '3',
      title: 'Aura Modern Apartments',
      category: 'completed',
      type: 'Residential',
      location: 'Westside District',
      area: '120,000 sq ft',
      year: '2024',
      stage: null,
      completion: null,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'A premium residential tower offering panoramic city views and world-class amenities.'
    },
    {
      id: '4',
      title: 'Zenith Corporate HQ',
      category: 'ongoing',
      type: 'Commercial',
      location: null,
      area: null,
      year: null,
      stage: 'Structural Framing',
      completion: 'Q3 2025',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'A futuristic corporate headquarters focusing on energy efficiency and smart building technologies.'
    },
    {
      id: '5',
      title: 'Lumina Residences',
      category: 'ongoing',
      type: 'Residential',
      location: null,
      area: null,
      year: null,
      stage: 'Interior Finishing',
      completion: 'Q1 2025',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Luxury condominiums designed with a minimalist aesthetic and premium finishes.'
    },
    {
      id: '6',
      title: 'Oasis Eco Resort',
      category: 'upcoming',
      type: 'Institutional',
      location: null,
      area: null,
      year: null,
      stage: 'Concept Design',
      completion: null,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'A sustainable luxury resort blending seamlessly with its natural surroundings.'
    }
  ];

  const insertMany = db.transaction((projects) => {
    for (const project of projects) {
      insert.run(project);
    }
  });

  insertMany(defaultProjects);
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/projects', (req, res) => {
    try {
      const projects = db.prepare('SELECT * FROM projects ORDER BY id DESC').all();
      res.json(projects);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch projects' });
    }
  });

  app.post('/api/projects', (req, res) => {
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

  app.delete('/api/projects/:id', (req, res) => {
    try {
      const { id } = req.params;
      db.prepare('DELETE FROM projects WHERE id = ?').run(id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete project' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  if (process.env.VERCEL) {
    return app;
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  
  return app;
}

export const appPromise = startServer();
export default async (req: any, res: any) => {
  const app = await appPromise;
  app(req, res);
};
