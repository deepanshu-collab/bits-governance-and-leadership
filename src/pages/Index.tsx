import { useState } from "react";
import Header from "@/components/Header";
import SenateSection from "@/components/SenateSection";
import EmptySection from "@/components/EmptySection";
import LeadershipSection from "@/components/LeadershipSection";
import GovernanceSection from "@/components/GovernanceSection";
import bitsPilaniHero from "@/assets/bits-clocktower.jpg";

type MainTab = "governance" | "leadership";
type GovernanceSubTab = "general-body" | "board-of-governors" | "senate";
type LeadershipSubTab = "vc-directors" | "deans-mumbai";

const Index = () => {
  const [mainTab, setMainTab] = useState<MainTab>("governance");
  const [govSubTab, setGovSubTab] = useState<GovernanceSubTab>("general-body");
  const [leaderSubTab, setLeaderSubTab] = useState<LeadershipSubTab>("vc-directors");

  const mainTabs: { id: MainTab; label: string }[] = [
    { id: "governance", label: "Governance" },
    { id: "leadership", label: "Leadership" },
  ];

  const govSubTabs: { id: GovernanceSubTab; label: string }[] = [
    { id: "general-body", label: "General Body" },
    { id: "board-of-governors", label: "Board of Governors" },
    { id: "senate", label: "Senate" },
  ];

  const leaderSubTabs: { id: LeadershipSubTab; label: string }[] = [
    { id: "vc-directors", label: "VC and Directors" },
    { id: "deans-mumbai", label: "Deans of Mumbai Campus" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero banner */}
      <div className="relative h-80 md:h-[480px] overflow-hidden">
        <img
          src={bitsPilaniHero}
          alt="BITS Pilani Campus with Clock Tower"
          className="w-full h-full object-cover object-[center_20%]"
          style={{ imageRendering: "auto" }}
          loading="eager"
          decoding="sync"
        />
      </div>

      {/* Main Tabs */}
      <div className="border-b border-border bg-card/95 backdrop-blur-sm sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4">
          <nav className="flex gap-0">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setMainTab(tab.id)}
                className={`relative px-8 py-4 text-base font-semibold font-body transition-all duration-300 ${
                  mainTab === tab.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
              >
                {tab.label}
                {mainTab === tab.id && (
                  <span className="absolute bottom-0 left-2 right-2 h-[3px] bg-secondary rounded-t transition-all duration-300" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="border-b border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <nav className="flex gap-0 overflow-x-auto">
            {(mainTab === "governance" ? govSubTabs : leaderSubTabs).map((tab) => {
              const isActive =
                mainTab === "governance"
                  ? govSubTab === tab.id
                  : leaderSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() =>
                    mainTab === "governance"
                      ? setGovSubTab(tab.id as GovernanceSubTab)
                      : setLeaderSubTab(tab.id as LeadershipSubTab)
                  }
                  className={`px-5 py-3 text-sm font-medium font-body whitespace-nowrap transition-all duration-300 border-b-2 ${
                    isActive
                      ? "border-secondary text-primary font-semibold"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-4 py-10 md:py-14">
        <div className="animate-fade-in" key={`${mainTab}-${govSubTab}-${leaderSubTab}`}>
          {mainTab === "governance" && govSubTab === "general-body" && (
            <GovernanceSection section="general-body" />
          )}
          {mainTab === "governance" && govSubTab === "board-of-governors" && (
            <GovernanceSection section="board-of-governors" />
          )}
          {mainTab === "governance" && govSubTab === "senate" && <SenateSection />}
          {mainTab === "leadership" && (
            <LeadershipSection section={leaderSubTab} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-sm font-body opacity-80">
              © {new Date().getFullYear()} Birla Institute of Technology & Science, Pilani. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
