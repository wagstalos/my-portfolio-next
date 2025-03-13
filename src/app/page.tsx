import { SectionBanner } from "@/components/sectionBanner";
import { SectionFormacao } from "@/components/sectionFormacao";
import { ContainerGrid } from "../components/container";
import Nav from "../components/navComponent";

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <SectionBanner></SectionBanner>
      <ContainerGrid>
        <SectionFormacao></SectionFormacao>
      </ContainerGrid>
    </div>
  );
}
