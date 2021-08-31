export default function Img({ src, title = "Untitle", full = false }) {
  const classname = full ? " full" : "";
  return (
    <figure className="figure">
      <img src={src} className={`fluid${classname}`} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  );
}
