"use client";

import { Grid } from "@mui/material";

import HairstyleCard from "./HairstyleCard";
import AddNewCard from "./AddNewCards";

interface Props {
  hairstyles: any[];
}

export default function HairstyleGrid({ hairstyles }: Props) {
  return (
    <Grid container spacing={4}>
      {hairstyles.map((style) => (
        <Grid key={style.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <HairstyleCard style={style} />
        </Grid>
      ))}

      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <AddNewCard />
      </Grid>
    </Grid>
  );
}
