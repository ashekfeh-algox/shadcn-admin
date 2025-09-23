import { Main } from "@/components/layout/main";
import { CityTable } from "./components/city-table";
import type { City } from "./components/data";

export const cities: City[] = [
  {
    id: "019971cd-0057-7778-908d-4c0c4853e7cc",
    createdAt: "2025-09-22T14:21:25.966Z",
    updatedAt: "2025-09-22T14:21:25.966Z",
    name: "Istanbul",
    slug: "istanbul",
  },
];

export function Cities() {
  return (
    <Main>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
        <CityTable data={cities} />
      </div>
    </Main>
  );
}
