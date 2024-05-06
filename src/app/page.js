import FeatureSection from "@/components/HomePage/FeatureSection";
import HighlightedSection from "@/components/HomePage/HighlightedSection";
import ShoppingRow from "@/components/ShoppingRow/ShoppingRow";
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import ExclusiveProduct from "@/components/HomePage/ExclusiveProduct";

export default function Home() {
  return (
    <main>
      <FeatureSection/>
      <HighlightedSection/>
      <ShoppingRow
        heading="Special Edition"
        isSpecialEdition={true}
      />
      <ShoppingRow
        heading="New Arrivals"
        isSpecialEdition={false}
      />
      <ExclusiveProduct/>
    </main>
  );
}
