interface LeaderCardProps {
  name: string;
  designation: string;
  image: string;
}

const LeaderCard = ({ name, designation, image }: LeaderCardProps) => {
  return (
    <div className="group bg-card rounded-lg border border-border shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden max-w-[220px] mx-auto w-full hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-muted">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <span className="text-3xl font-display font-bold text-muted-foreground/40">
              {name.split(" ").map(n => n[0]).join("").slice(0, 2)}
            </span>
          </div>
        )}
      </div>
      <div className="p-3 text-center border-t border-border/50">
        <h3 className="font-display font-semibold text-foreground text-sm leading-tight">
          {name}
        </h3>
        <p className="text-xs text-muted-foreground mt-1 font-body leading-snug">
          {designation}
        </p>
      </div>
    </div>
  );
};

export default LeaderCard;
