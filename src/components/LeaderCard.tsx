interface LeaderCardProps {
  name: string;
  designation: string;
  image: string;
}

const LeaderCard = ({ name, designation, image }: LeaderCardProps) => {
  return (
    <div className="group bg-card rounded-lg border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden animate-slide-up max-w-[220px] mx-auto w-full">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-3 text-center">
        <h3 className="font-display font-semibold text-foreground text-sm leading-tight">
          {name}
        </h3>
        <p className="text-xs text-muted-foreground mt-1 font-body">
          {designation}
        </p>
      </div>
    </div>
  );
};

export default LeaderCard;
