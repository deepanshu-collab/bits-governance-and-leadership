const senateMembers = [
  "Vice-Chancellor (ex-officio) — Chairman",
  "Directors",
  "Deputy Directors",
  "Deans",
  "All Associate Deans",
  "All Senior Professors and Professors",
  "All Associate Professors",
  "The Heads of Academic Departments",
  "Such of the two Assistant Professors from each campus as may be co-opted by the Senate.",
  "Librarian",
  "Chief Warden",
  "Such other members of the staff not exceeding four as may be designated by the Board of Governors for a term of 3 years",
  "Four persons not being employees of the Institute to be nominated by the Chancellor of the Institute after consulting the Vice-Chancellor from amongst educationists/industrialists of repute for a term of 3 years",
  "Four regular full-time First-Degree students of the Institute (one from each campus) to be nominated by the Chancellor of the Institute out of a panel of 8 names to be submitted by the President of the Students Union of each campus, for a term of one year",
  "One student each from Higher degree and Ph.D. as Student Invitees",
  "Visiting Professors, Professor of Practice, Adjunct Professors, Emeritus Professors, Distinguished Professors and Distinguished Senior Professors as invitees",
];

const SenateSection = () => {
  return (
    <div>
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
              className="px-6 py-4 flex gap-4 items-start hover:bg-muted/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 60}ms`, animationFillMode: "both" }}
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold font-body shadow-sm">
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
