import axios from 'axios';

// Créer une instance d'axios avec une URL de base
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Remplacez par l'URL de votre API
});

// Ajouter un intercepteur de requêtes pour ajouter le token aux en-têtes
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Gérer les erreurs liées aux requêtes
    return Promise.reject(error);
  }
);

// Ajouter un intercepteur de réponses pour gérer les erreurs
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      console.log('Authentication error:', error.response.data);
      // Vous pouvez rediriger l'utilisateur vers une page de connexion ou effectuer une autre action appropriée
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
