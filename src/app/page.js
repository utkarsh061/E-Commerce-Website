import FeatureSection from "@/components/FeatureSection";
import HighlightedSection from "@/components/HighlightedSection";
import ShoppingRow from "@/components/ShoppingRow";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <FeatureSection/>
      <HighlightedSection/>
      <ShoppingRow/>
    </main>
  );
}
