export default function darkTheme() {
  return document.getElementById('checkbox').addEventListener('change', () => {
    document.body.classList.toggle('dark');
  });
}
