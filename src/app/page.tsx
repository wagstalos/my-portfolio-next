import { SectionBanner } from "@/components/sectionBanner";
import { ContainerGrid } from "../components/container";
import Nav from "../components/navComponent";

export default function Home() {
  return (
    <div className="">
      <ContainerGrid>
        <Nav></Nav>
        <SectionBanner></SectionBanner>
      </ContainerGrid>
    </div>
  );
}
