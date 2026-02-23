interface EmptySectionProps {
  title: string;
}

const EmptySection = ({ title }: EmptySectionProps) => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">
        {title}
      </h2>
      <div className="bg-card rounded-lg border border-border shadow-sm p-16 text-center">
        <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <p className="text-muted-foreground font-body text-lg">
          Content coming soon.
        </p>
      </div>
    </div>
  );
};

export default EmptySection;
