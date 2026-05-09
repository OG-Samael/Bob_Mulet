"use client";

import { useRouter } from "next/navigation";

import { Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ProductDetailsProps {
  product: {
    id: string;
    name: string;
    shortDescription: string;
    longDescription?: string;
    image: string;
    benefits?: string;
    instructions?: string;
    ingredients?: string;
    amazonUrl?: string;
    salonUrl?: string;
  };
  returnTo: string;
}

export default function ProductDetails({ product, returnTo }: ProductDetailsProps) {
  const router = useRouter();
  const encoded = encodeURIComponent(returnTo);

  return (
    <Box className="flex gap-4 px-3 py-6">
      <Box className="flex-shrink-0 w-full max-w-xs">
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
        )}
      </Box>

      <Box className="flex-1">
        <Typography className="text-2xl font-bold mb-2">
          {product.name}
        </Typography>

        <Typography className="mb-4 text-base">
          {product.shortDescription}
        </Typography>

        {product.longDescription && (
          <Typography className="mb-6 text-gray-600 text-sm">
            {product.longDescription}
          </Typography>
        )}

        <Accordion className="mb-2">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Benefits
          </AccordionSummary>
          <AccordionDetails>
            {product.benefits || "No benefits added yet."}
          </AccordionDetails>
        </Accordion>

        <Accordion className="mb-2">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Instructions for use
          </AccordionSummary>
          <AccordionDetails>
            {product.instructions || "No instructions added yet."}
          </AccordionDetails>
        </Accordion>

        <Accordion className="mb-2">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Ingredients
          </AccordionSummary>
          <AccordionDetails>
            {product.ingredients || "No ingredients added yet."}
          </AccordionDetails>
        </Accordion>

        <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
          {product.salonUrl && (
            <Button variant="contained" href={product.salonUrl} target="_blank">
              Find a salon
            </Button>
          )}
          {product.amazonUrl && (
            <Button variant="outlined" href={product.amazonUrl} target="_blank">
              Buy it on Amazon
            </Button>
          )}
        </Box>

        <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            onClick={() => router.push(`/products/manage/edit/${product.id}?returnTo=${encoded}`)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => router.push(returnTo)}
          >
            Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
