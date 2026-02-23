import LeaderCard from "./LeaderCard";

import ramgopalRao from "@/assets/leadership/ramgopal-rao.jpg";
import gSundar from "@/assets/leadership/g-sundar.jpg";
import sudhirkumarBarai from "@/assets/leadership/sudhirkumar-barai.jpg";
import souriBanerjee from "@/assets/leadership/souri-banerjee.jpg";
import sumanKundu from "@/assets/leadership/suman-kundu.jpg";
import dSriram from "@/assets/leadership/d-sriram.jpg";
import sGurunarayanan from "@/assets/leadership/s-gurunarayanan.jpg";
import saravananKesavan from "@/assets/leadership/saravanan-kesavan.jpg";
import nanditaAbraham from "@/assets/leadership/nandita-abraham.jpg";
import vishwasDevaiah from "@/assets/leadership/vishwas-devaiah.jpg";

const vcAndDirectors = [
  { name: "Prof. Ramgopal Rao", designation: "Vice Chancellor", image: ramgopalRao },
  { name: "Prof. G Sundar", designation: "Director, Off-campus Programmes & Industry Engagement", image: gSundar },
  { name: "Prof. Sudhirkumar Barai", designation: "Director, BITS Pilani, Pilani Campus", image: sudhirkumarBarai },
  { name: "Prof. Souri Banerjee", designation: "Director, BITS Pilani, Dubai Campus", image: souriBanerjee },
  { name: "Prof. Suman Kundu", designation: "Director, BITS Pilani, KK Birla Goa Campus", image: sumanKundu },
  { name: "Prof. D Sriram", designation: "Director In-charge, BITS Pilani, Hyderabad Campus", image: dSriram },
  { name: "Prof. S Gurunarayanan", designation: "Deputy Director, Off-campus Programmes & Industry Engagement", image: sGurunarayanan },
];

const deansMumbai = [
  { name: "Prof. Saravanan Kesavan", designation: "Dean, BITSoM, Mumbai Campus", image: saravananKesavan },
  { name: "Prof. Nandita Abraham", designation: "Dean, BITS Design School, Mumbai Campus", image: nanditaAbraham },
  { name: "Prof. Vishwas H. Devaiah", designation: "Acting Dean, BITS Law School, Mumbai Campus", image: vishwasDevaiah },
];

interface LeadershipSectionProps {
  section: "vc-directors" | "deans-mumbai";
}

const LeadershipSection = ({ section }: LeadershipSectionProps) => {
  const leaders = section === "vc-directors" ? vcAndDirectors : deansMumbai;
  const title = section === "vc-directors" ? "Vice Chancellor & Directors" : "Deans of Mumbai Campus";

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {leaders.map((leader, index) => (
          <div
            key={leader.name}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both" }}
          >
            <LeaderCard {...leader} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipSection;
