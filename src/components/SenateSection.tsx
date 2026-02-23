const senateMembers = [
  "Vice-Chancellor (ex-officio) — Chairman",
  "Directors",
  "Deputy Directors",
  "Deans",
  "All Assistant Directors / Assistant Deans / Associate Deans",
  "All Professors and Associate Professors",
  "The Heads of Academic Departments and Divisions",
  "Such of the Assistant Professors / Lecturers / Assistant Lecturers / Scientists / Research Associates as may be co-opted by the Senate",
  "Librarian",
  "Workshop Superintendent",
  "Chief Warden",
  "Admissions and Placement Officers",
  "Such other members of the staff not exceeding four as may be designated by the Board of Governors for a term of 3 years",
  "Four persons not being employees of the Institute to be nominated by the Chancellor of the Institute after consulting the Vice-Chancellor from amongst educationists/industrialists of repute for a term of 3 years",
  "Four regular full-time students of the Institute to be nominated by the Chancellor of the Institute out of a panel of 8 names to be submitted by the President of the BITS Students Union for a term of one year",
];

const SenateSection = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
        Senate
      </h2>
      <p className="text-muted-foreground mb-6 font-body">
        The Senate shall consist of the following:
      </p>
      <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
        <ol className="divide-y divide-border">
          {senateMembers.map((member, index) => (
            <li
              key={index}
              className="px-6 py-4 flex gap-4 items-start hover:bg-muted/50 transition-colors duration-200"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold font-body">
                {index + 1}
              </span>
              <span className="text-foreground font-body leading-relaxed pt-1">
                {member}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SenateSection;
