interface EmptySectionProps {
  title: string;
}

const EmptySection = ({ title }: EmptySectionProps) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">
        {title}
      </h2>
      <div className="bg-card rounded-lg border border-border shadow-sm p-12 text-center">
        <p className="text-muted-foreground font-body text-lg">
          Content coming soon.
        </p>
      </div>
    </div>
  );
};

export default EmptySection;
