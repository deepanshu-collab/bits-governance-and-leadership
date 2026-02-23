import LeaderCard from "./LeaderCard";

import kumarMangalamBirla from "@/assets/governance/kumar-mangalam-birla.jpg";
import shobhanaBhartia from "@/assets/governance/shobhana-bhartia.jpg";
import ramgopalRao from "@/assets/governance/ramgopal-rao.jpg";
import sumanKundu from "@/assets/governance/suman-kundu.jpg";
import sidharthBirla from "@/assets/governance/sidharth-birla.jpg";
import hemantKumar from "@/assets/governance/hemant-kumar.jpg";
import dilipGaur from "@/assets/governance/dilip-gaur.jpg";
import kkMaheshwari from "@/assets/governance/kk-maheshwari.jpg";
import sunilKumarBarnwal from "@/assets/governance/sunil-kumar-barnwal.jpg";
import saumyaGupta from "@/assets/governance/saumya-gupta.jpg";
import akshayPoddar from "@/assets/governance/akshay-poddar.jpg";
import sChakraborty from "@/assets/governance/s-chakraborty.jpg";
import lkMaheshwari from "@/assets/governance/lk-maheshwari.jpg";
import devangKhakhar from "@/assets/governance/devang-khakhar.jpg";
import kRamakrishnan from "@/assets/governance/k-ramakrishnan.jpg";

interface Member {
  name: string;
  designation: string;
  image?: string;
}

const bogMembers: Member[] = [
  { name: "Dr. Kumar Mangalam Birla", designation: "Chairman", image: kumarMangalamBirla },
  { name: "Smt. Shobhana Bhartia", designation: "Member", image: shobhanaBhartia },
  { name: "Prof. V Ramgopal Rao", designation: "Vice Chancellor", image: ramgopalRao },
  { name: "Prof. Suman Kundu", designation: "Member", image: sumanKundu },
  { name: "Shri Sidharth Birla", designation: "Member", image: sidharthBirla },
  { name: "Shri Hemant Kumar", designation: "Member", image: hemantKumar },
  { name: "Shri Dilip Gaur", designation: "Member", image: dilipGaur },
  { name: "Shri K K Maheshwari", designation: "Member", image: kkMaheshwari },
  { name: "Shri Sunil Kumar Barnwal", designation: "Member", image: sunilKumarBarnwal },
  { name: "Smt. Saumya Gupta", designation: "Member", image: saumyaGupta },
  { name: "Shri Akshay Poddar", designation: "Member", image: akshayPoddar },
];

const bogSecretary: Member = {
  name: "Col. S. Chakraborty (Retd.)",
  designation: "Registrar & Non-Member Secretary",
  image: sChakraborty,
};

const gbMembers: Member[] = [
  { name: "Dr. Kumar Mangalam Birla", designation: "Chairman", image: kumarMangalamBirla },
  { name: "Smt. Shobhana Bhartia", designation: "Member", image: shobhanaBhartia },
  { name: "Prof. V Ramgopal Rao", designation: "Vice Chancellor", image: ramgopalRao },
  { name: "Shri Sidharth Birla", designation: "Member", image: sidharthBirla },
  { name: "Shri K K Maheshwari", designation: "Member", image: kkMaheshwari },
  { name: "Shri Hemant Kumar", designation: "Member", image: hemantKumar },
  { name: "Shri Jayant Sogani", designation: "Member" },
  { name: "Additional Secretary, Technical Education", designation: "Member" },
  { name: "Prof. L.K. Maheshwari", designation: "Member", image: lkMaheshwari },
  { name: "Prof. Devang V. Khakhar", designation: "Member", image: devangKhakhar },
  { name: "Shri K. Ramakrishnan", designation: "Member", image: kRamakrishnan },
];

const gbSecretary: Member = {
  name: "Col. S. Chakraborty (Retd.)",
  designation: "Registrar & Non-Member Secretary",
  image: sChakraborty,
};

interface GovernanceSectionProps {
  section: "general-body" | "board-of-governors";
}

const GovernanceSection = ({ section }: GovernanceSectionProps) => {
  const members = section === "general-body" ? gbMembers : bogMembers;
  const secretary = section === "general-body" ? gbSecretary : bogSecretary;
  const title = section === "general-body" ? "General Body" : "Board of Governors";

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {members.map((member, index) => (
          <div
            key={member.name}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both" }}
          >
            <LeaderCard
              name={member.name}
              designation={member.designation}
              image={member.image || ""}
            />
          </div>
        ))}
      </div>

      {/* Secretary */}
      <div className="mt-10 pt-8 border-t border-border">
        <h3 className="text-lg font-display font-semibold text-muted-foreground mb-4 text-center">
          Non-Member Secretary
        </h3>
        <div className="flex justify-center">
          <div className="animate-slide-up" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
            <LeaderCard
              name={secretary.name}
              designation={secretary.designation}
              image={secretary.image || ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceSection;
