import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ProductCard() {
    return (
        <Card sx={{ maxWidth: 300 }}>
                <Image
                    src="./placeholder.jpg"
                    alt="Product Image"
                    width={300}
                    height={200}
                    priority
                />
            <CardContent>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Awesome product
                </Typography>
                <Button variant="contained" color="primary" fullWidth>
                    Buy Now
                </Button>
            </CardContent>
        </Card>
    );
}
