import { SectionBanner } from "@/components/sectionBanner";
import { SectionFormacao } from "@/components/sectionFormacao";
import { ContainerGrid } from "../components/container";
import Nav from "../components/navComponent";
import { SectionAboutMe } from "@/components/sectionAboutMe";
import { SectionNumbers } from "@/components/sectionNumbers";
import Timeline from "@/components/sectionExperience";
import SectionProjects from "@/components/sectionProjects";
import { SectionFooter } from "@/components/sectionFooter";

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
      </ContainerGrid>
      <SectionProjects></SectionProjects>
      <SectionFooter></SectionFooter>
    </div>
  );
}
