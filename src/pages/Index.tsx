import { useState } from "react";
import Header from "@/components/Header";
import SenateSection from "@/components/SenateSection";
import EmptySection from "@/components/EmptySection";
import LeadershipSection from "@/components/LeadershipSection";
import bitsPilaniHero from "@/assets/bits-pilani-hero.jpg";

type MainTab = "governance" | "leadership";
type GovernanceSubTab = "governor-body" | "board-of-governors" | "senate";
type LeadershipSubTab = "vc-directors" | "deans-mumbai";

const Index = () => {
  const [mainTab, setMainTab] = useState<MainTab>("governance");
  const [govSubTab, setGovSubTab] = useState<GovernanceSubTab>("senate");
  const [leaderSubTab, setLeaderSubTab] = useState<LeadershipSubTab>("vc-directors");

  const mainTabs: { id: MainTab; label: string }[] = [
    { id: "governance", label: "Governance" },
    { id: "leadership", label: "Leadership" },
  ];

  const govSubTabs: { id: GovernanceSubTab; label: string }[] = [
    { id: "governor-body", label: "Governor Body" },
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
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={bitsPilaniHero}
          alt="BITS Pilani Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground animate-fade-in drop-shadow-lg">
            Governance & Leadership
          </h2>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="border-b border-border bg-card sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex gap-0">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setMainTab(tab.id)}
                className={`relative px-6 py-4 text-base font-semibold font-body transition-colors duration-200 ${
                  mainTab === tab.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                {mainTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-secondary rounded-t" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="border-b border-border bg-muted/30">
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
                  className={`px-5 py-3 text-sm font-medium font-body whitespace-nowrap transition-colors duration-200 border-b-2 ${
                    isActive
                      ? "border-accent text-accent"
                      : "border-transparent text-muted-foreground hover:text-foreground"
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
      <main className="container mx-auto px-4 py-8 md:py-12">
        {mainTab === "governance" && govSubTab === "governor-body" && (
          <EmptySection title="Governor Body" />
        )}
        {mainTab === "governance" && govSubTab === "board-of-governors" && (
          <EmptySection title="Board of Governors" />
        )}
        {mainTab === "governance" && govSubTab === "senate" && <SenateSection />}
        {mainTab === "leadership" && (
          <LeadershipSection section={leaderSubTab} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-body opacity-80">
            © {new Date().getFullYear()} Birla Institute of Technology & Science, Pilani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
