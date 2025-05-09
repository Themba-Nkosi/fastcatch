import logoImage from '../../assets/fastcatch-logo.jpg';

export const DogLogo = ({ className = "w-32" }: { className?: string }) => {
  return (
    <div className={className}>
      <img src={logoImage} alt="Fast Catch Security Logo" className="w-full h-auto" />
    </div>
  );
};
