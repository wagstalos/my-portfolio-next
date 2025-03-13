import { SectionBanner } from "@/components/sectionBanner";
import { SectionFormacao } from "@/components/sectionFormacao";
import { ContainerGrid } from "../components/container";
import Nav from "../components/navComponent";
import { SectionAboutMe } from "@/components/sectionAboutMe";
import { SectionNumbers } from "@/components/sectionNumbers";
import Timeline from "@/components/sectionExperience";
import { SectionProjects } from "@/components/sectionProjects";

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <SectionBanner></SectionBanner>
      <ContainerGrid>
        <SectionFormacao></SectionFormacao>
        <SectionAboutMe></SectionAboutMe>
        <SectionNumbers></SectionNumbers>
        <Timeline></Timeline>
        <SectionProjects></SectionProjects>
      </ContainerGrid>
    </div>
  );
}
