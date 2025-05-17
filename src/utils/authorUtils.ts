// Create this utility file if it doesn't exist

// Map author names to their information
export const getAuthorInfo = (authorName: string) => {
  const authorMap = {
    'Yasel Nuviola': {
      role: 'Ingeniero en Sistemas con más de 15 años de experiencia en el sector tecnológico. Especialista en transformación digital y estrategia de TI',
      image: '/images/team/team-1.jpg'
    },
    'Lisandra Leyé': {
      role: 'Máster en marketing y ventas con basta experiencia en desarrollo de negocios digitales',
      image: '/images/team/team-2.jpg'
    }
  };
  
  return authorMap[authorName as keyof typeof authorMap] || {
    role: '',
    image: '/images/team/default-avatar.jpg'
  };
};