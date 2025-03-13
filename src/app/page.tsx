import { SectionBanner } from "@/components/sectionBanner";
import { SectionFormacao } from "@/components/sectionFormacao";
import { ContainerGrid } from "../components/container";
import Nav from "../components/navComponent";
import { SectionAboutMe } from "@/components/sectionAboutMe";

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <SectionBanner></SectionBanner>
      <ContainerGrid>
        <SectionFormacao></SectionFormacao>
        <SectionAboutMe></SectionAboutMe>
      </ContainerGrid>
    </div>
  );
}
