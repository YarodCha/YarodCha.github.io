export default function About() {
  const age = new Date().getUTCFullYear() - 1997;
  return (
    <div>
      <h1>About me</h1>
      <p>I'm {age} years old.</p>
      <p> I ❤ JS</p>
    </div>
  );
}
