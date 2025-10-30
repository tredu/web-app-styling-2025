import { Card, Typography, Button } from "antd";

const ProductCard = () => {
    return (
        <Card style={{ maxWidth: 300, margin: '0 auto' }} cover={
            <img
                src="./placeholder.jpg"
                alt="Product Image"
            />
        }>
            <Card.Meta
                title={<Typography.Text>Awesome product</Typography.Text>}
            />
            <Button type="primary" block style={{ marginTop: 16 }}>
                Buy Now
            </Button>
        </Card>
    );
}
export { ProductCard };