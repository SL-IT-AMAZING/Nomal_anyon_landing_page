export const scrollToBetaForm = () => {
  const betaSection = document.getElementById('beta-signup');
  if (betaSection) {
    betaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};
