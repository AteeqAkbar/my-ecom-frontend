function Chip({ title = "Neumorphic Design", icon, className = "" }) {
  return (
    <div className="chip">
      <div className="chip__icon">{/* <IonIcon name="color-palette" /> */}</div>
      <p className={className}>{title}</p>
      <div className="chip__close">{/* <IonIcon name="close" /> */}</div>
    </div>
  );
}
export default Chip;
