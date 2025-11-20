import { DescriptionDetails, DescriptionList, DescriptionTerm } from "@/components/ui/description-list";

export default function ProductPage() {
  return (
    <DescriptionList>
      <DescriptionTerm>Invoice Number</DescriptionTerm>
      <DescriptionDetails>INV-12345</DescriptionDetails>
      <DescriptionTerm>Invoice Date</DescriptionTerm>
      <DescriptionDetails>September 21, 2024</DescriptionDetails>
    </DescriptionList>
  );
}
