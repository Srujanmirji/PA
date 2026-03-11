import { useState, useEffect } from 'react';

export interface Project {
  id: string;
  title: string;
  category: 'completed' | 'ongoing' | 'upcoming';
  location?: string;
  area?: string;
  year?: string;
  stage?: string;
  completion?: string;
  image: string;
  description: string;
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const addProject = async (projectData: Omit<Project, 'id'>) => {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });
      
      if (response.ok) {
        const newProject = await response.json();
        setProjects([newProject, ...projects]);
        return newProject;
      }
      throw new Error('Failed to add project');
    } catch (error) {
      console.error('Error adding project:', error);
      throw error;
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setProjects(projects.filter(p => p.id !== id));
      } else {
        throw new Error('Failed to delete project');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  };

  return { projects, addProject, deleteProject, loading };
}
