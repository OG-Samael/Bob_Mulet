import { Container } from "@mui/material";

import HairstyleGrid from "../../components/HairstyleGrid";
import { readJSON } from "@/utils/fileHandler";

export default async function HairstylesPage() {
  const hairstyles = await readJSON<any[]>("hairstyles.json");

  return (
    <Container sx={{ py: 6 }}>
      <HairstyleGrid hairstyles={hairstyles} />
    </Container>
  );
}
