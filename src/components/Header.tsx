import bitsLogo from "@/assets/bits-logo.svg";
import tagline from "@/assets/tagline.jpeg";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={bitsLogo} alt="BITS Pilani Logo" className="h-16 w-16" />
          <div>
            <h1 className="text-xl md:text-2xl font-display font-bold text-primary tracking-tight">
              BITS Pilani
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground font-body">
              Birla Institute of Technology & Science
            </p>
          </div>
        </div>
        <img
          src={tagline}
          alt="Innovate, Achieve, Lead"
          className="hidden md:block h-12 rounded"
        />
      </div>
    </header>
  );
};

export default Header;
