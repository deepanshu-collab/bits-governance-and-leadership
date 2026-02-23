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
  { name: "Dr. Kumar Mangalam Birla", designation: "BoG, GB, and FC", image: kumarMangalamBirla },
  { name: "Smt. Shobhana Bhartia", designation: "BoG and GB", image: shobhanaBhartia },
  { name: "Prof. V Ramgopal Rao", designation: "BoG, GB, and FC", image: ramgopalRao },
  { name: "Prof. Suman Kundu", designation: "BoG", image: sumanKundu },
  { name: "Shri Sidharth Birla", designation: "BoG and GB", image: sidharthBirla },
  { name: "Shri Hemant Kumar", designation: "BoG, GB, and FC", image: hemantKumar },
  { name: "Shri Dilip Gaur", designation: "BoG", image: dilipGaur },
  { name: "Shri K K Maheshwari", designation: "BoG and GB", image: kkMaheshwari },
  { name: "Smt. Saumya Gupta", designation: "BoG", image: saumyaGupta },
  { name: "Shri Akshay Poddar", designation: "BoG", image: akshayPoddar },
  { name: "Col. S. Chakraborty (Retd.)", designation: "Registrar & Non-Member Secretary", image: sChakraborty },
  { name: "Additional Secretary, Technical Education", designation: "BoG" },
];

const gbMembers: Member[] = [
  { name: "Dr. Kumar Mangalam Birla", designation: "BoG, GB, and FC", image: kumarMangalamBirla },
  { name: "Smt. Shobhana Bhartia", designation: "BoG and GB", image: shobhanaBhartia },
  { name: "Prof. V Ramgopal Rao", designation: "BoG, GB, and FC", image: ramgopalRao },
  { name: "Shri Sidharth Birla", designation: "BoG and GB", image: sidharthBirla },
  { name: "Shri K K Maheshwari", designation: "BoG and GB", image: kkMaheshwari },
  { name: "Shri Hemant Kumar", designation: "BoG, GB, and FC", image: hemantKumar },
  { name: "Prof. L.K. Maheshwari", designation: "GB", image: lkMaheshwari },
  { name: "Prof. Devang V. Khakhar", designation: "GB", image: devangKhakhar },
  { name: "Shri K. Ramakrishnan", designation: "GB", image: kRamakrishnan },
  { name: "Col. S. Chakraborty (Retd.)", designation: "Registrar & Non-Member Secretary", image: sChakraborty },
  { name: "Additional Secretary, Technical Education", designation: "GB" },
  { name: "Shri Jayant Sogani", designation: "GB" },
];

interface GovernanceSectionProps {
  section: "general-body" | "board-of-governors";
}

const GovernanceSection = ({ section }: GovernanceSectionProps) => {
  const members = section === "general-body" ? gbMembers : bogMembers;
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
    </div>
  );
};

export default GovernanceSection;
