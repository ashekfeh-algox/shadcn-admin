import { XSelect } from "@/components/inputs/select";
import { fonts } from "@/config/fonts";
import { useFont } from "@/settings/context/font-provider";
import { SectionTitle } from "./common/section-title";

export function FontConfig() {
  const { font, setFont, resetFont } = useFont();

  return (
    <div>
      <SectionTitle title="Font" showReset={font !== "inter"} onReset={resetFont} />

      <XSelect value={font} onChange={setFont} options={fonts} classNames={{ trigger: "w-full" }} />
    </div>
  );
}
