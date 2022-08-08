const allSections = document.querySelectorAll('.section');
const revealSection = (entries, observer) => {
  const [entry] = entries;
  console.log(entry.target);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('hidden');

  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.05,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('hidden');
});
