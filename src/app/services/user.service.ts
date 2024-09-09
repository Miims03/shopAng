import axiosInstance from './axiosConfig';

// Fonction pour récupérer les données d'un utilisateur par ID
export const fetchUserData = async (userId) => {
  try {
    const response = await axiosInstance.get(`/users/find/${userId}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Fonction pour récupérer tous les utilisateurs
export const fetchAllUsers = async () => {
  try {
    const response = await axiosInstance.get('/users/find');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Fonction pour se connecter
export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post('/users/login', credentials);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Fonction pour s'inscrire
export const signupUser = async (user) => {
  try {
    const response = await axiosInstance.post('/users/register', user);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Fonction pour gérer les erreurs
const handleError = (error) => {
  if (error.response && (error.response.status === 401 || error.response.status === 403)) {
    console.log('Authentication error:', error.response.data);
    // Vous pouvez rediriger l'utilisateur vers une page de connexion ou effectuer une autre action appropriée
  }
  throw new Error('Something went wrong!');
};
