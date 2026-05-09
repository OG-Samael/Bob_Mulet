import { notFound } from "next/navigation";

import { Box, Container, Typography, Chip, Divider } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelIcon from "@mui/icons-material/Label";

import { readJSON } from "@/utils/fileHandler";
import "./hairstyle-detail.css";

type Hairstyle = {
  id: string
  title: string
  category: string
  featureImage: string
  tags: string[]
  cutFrequency: string
  description: string
  sections: any[]
}

export default async function HairstyleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const hairstyles = await readJSON<Hairstyle[]>("hairstyles.json")
  const style = hairstyles.find(h => h.id === id)

  if (!style) notFound();

  return (
    <Container maxWidth="lg" className="hairstyle-container">
      <Box className="hairstyle-main-layout">
        {/* Left — details */}
        <Box className="hairstyle-left-section">
          <Typography
            variant="overline"
            className="hairstyle-category"
          >
            {style.category.replace("-", " ")}
          </Typography>

          <Typography variant="h3" fontWeight={800} className="hairstyle-title">
            {style.title}
          </Typography>

          <Box className="hairstyle-frequency">
            <AccessTimeIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary" fontWeight={600}>
              {style.cutFrequency}
            </Typography>
          </Box>

          <Box className="hairstyle-tags">
            {style.tags.map((tag: string) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                className="hairstyle-tag"
              />
            ))}
          </Box>

          <Divider className="hairstyle-divider" />

          <Typography variant="body1" className="hairstyle-description">
            {style.description}
          </Typography>

          {/* Dynamic sections */}
          <Box className="hairstyle-sections">
            {style.sections.map((section: any, i: number) => {
              if (section.type === "heading") {
                return (
                  <Typography key={i} variant="h5" fontWeight={700} className="hairstyle-section-heading">
                    {section.content}
                  </Typography>
                );
              }

              if (section.type === "bullet") {
                return (
                  <Box key={i} className="hairstyle-bullet-section">
                    {section.content.map((item: string, idx: number) => (
                      <Box key={idx} className="hairstyle-bullet-item">
                        <Box className="hairstyle-bullet-dot" />
                        <Typography variant="body1" className="hairstyle-bullet-text">{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                );
              }

              if (section.type === "products") {
                return (
                  <Box key={i} className="hairstyle-products-section">
                    {section.content.map((p: any, idx: number) => (
                      <Typography key={idx} variant="body2" className="hairstyle-product">
                        <strong>{p.brand}</strong> — {p.name}
                      </Typography>
                    ))}
                  </Box>
                );
              }

              return null;
            })}
          </Box>
        </Box>

        {/* Right — image */}
        <Box className="hairstyle-right-section">
          <Box
            component="img"
            src={style.featureImage}
            alt={style.title}
            className="hairstyle-image"
          />
        </Box>
      </Box>
    </Container>
  );
}
