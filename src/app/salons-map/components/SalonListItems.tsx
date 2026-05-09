import { Card, CardContent, Typography } from "@mui/material";

import type { Salon } from "../types/salon";

interface Props {
  salon: Salon;
  selected: boolean;
  onClick: () => void;
}

export default function SalonListItem({ salon, selected, onClick }: Props) {
  return (
    <Card
      onClick={onClick}
      sx={{
        mb: 1,
        cursor: "pointer",
        border: selected ? "2px solid #1976d2" : "1px solid #ddd"
      }}
    >
      <CardContent>
        <Typography variant="h6">{salon.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {salon.address}
        </Typography>
      </CardContent>
    </Card>
  );
}
