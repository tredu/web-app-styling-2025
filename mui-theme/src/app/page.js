
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProductCard from "../components/ProductCard";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box component="header" sx={{
        py: 2, bgcolor: 'secondary.main', color: 'secondary.contrastText',
        borderBottom: '1px solid #ccc', padding: 1, mb: 4
      }}>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <Box>
          <Typography variant="h3" component="h1" gutterBottom>
            MUI Theme, next.js & React example
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magni.
          </Typography>
        </Box>
      </Box>
      <Box component="main" sx={{ maxWidth: 1200, mx: "auto", my: 4, width: "100%" }}>
        <Box component="section" sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Box>
      </Box>
      <Box component="footer" sx={{ bgcolor: 'secondary.main', color: 'secondary.contrastText', padding: 1, paddingBottom: 4 }}>
        <Typography variant="body1">Footer Information</Typography>
      </Box>
    </>
  );
}
