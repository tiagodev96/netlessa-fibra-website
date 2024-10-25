import React from "react";
import OurTeamHeader from "./our-team-header";
import Team from "./team";

export default function OurTeam() {
  return (
    <section className="section-container py-24 flex flex-col gap-20">
      <OurTeamHeader />
      <Team />
    </section>
  );
}
