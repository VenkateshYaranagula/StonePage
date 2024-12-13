import React from 'react';
import { Card, Container, Row, Col, Carousel } from 'react-bootstrap';

const productData = [
  {
    name: "Granite",
    images: ["https://media.gettyimages.com/id/183883827/photo/an-up-close-view-of-black-and-grey-speckled-granite.jpg?s=2048x2048&w=gi&k=20&c=bRJoawQfh8yKqdTvuHL_PK-DXNQz6WrwUzFM_vJ4-R4=",  "https://media.gettyimages.com/id/183883124/photo/a-background-with-granite-texture.jpg?s=2048x2048&w=gi&k=20&c=8gjAEtXA-Qat7dV27KMrQwb1yyTbOJyAuEA4OxIQ8vo="],
    description: "Premium quality Granite for your projects."
  },
  {
    name: "Marble",
    images: ["https://media.istockphoto.com/id/1369002680/photo/white-and-gold-marble-texture-background-used-in-design-for-skin-tile-wallpaper-interiors.jpg?s=1024x1024&w=is&k=20&c=l1NrY7g0-MgThwAgY-QlrJ09L1_MXu0QQKxSDKsJP3Y=","https://media.istockphoto.com/id/1486579445/photo/white-marble-with-black-patterns.jpg?s=1024x1024&w=is&k=20&c=bhaora-0w11AXq2WA5uCDDqUUDw-w-SopRhfQDHp0VE="],
    description: "Elegant Marble to elevate your spaces."
  },
  {
    name: "Sandstone",
    images: ["https://plus.unsplash.com/premium_photo-1673331924123-6ef15fc9dc1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbmRzdG9uZXxlbnwwfHwwfHx8MA%3D%3D","https://media.gettyimages.com/id/182665964/photo/flagstone-surface.jpg?s=1024x1024&w=gi&k=20&c=FHTxfVMUxNGMJtvJ-eu62T8h44fDxyDpTO9Lg5NsNnM="],
    description: "Durable Sandstone for timeless beauty."
  },
  {
    name: "Quartzite",
    images: ["https://t3.ftcdn.net/jpg/04/01/56/88/240_F_401568850_MMkyZW8UWrRIpVIbA6xnPCkW9z3Rnj8z.jpg","https://as2.ftcdn.net/v2/jpg/10/95/33/85/1000_F_1095338597_Gz2QCot5GcoopCj7ZOJM08mURaTN12rv.jpg"],
    description: "Stylish Quartzite for a modern touch."
  },
  {
    name: "Limestone",
    images: ["https://media.istockphoto.com/id/501336568/photo/brown-marble-texture-and-background.jpg?s=2048x2048&w=is&k=20&c=kH17BxAn681ca_uXWFnT_hd0pdR42doEn9cCiZE1KxE=", "https://media.istockphoto.com/id/1486579445/photo/white-marble-with-black-patterns.jpg?s=1024x1024&w=is&k=20&c=bhaora-0w11AXq2WA5uCDDqUUDw-w-SopRhfQDHp0VE="],
    description: "Classic Limestone for sophisticated projects."
  },
  {
    name: "Travertine",
    images: ["https://media.istockphoto.com/id/1138650162/photo/closeup-beige-marble-with-natural-pattern-texture-background-horizontal-picture.jpg?s=2048x2048&w=is&k=20&c=J-ySgN0LOR1dV0M9-vQ2HMHuxDDUMmXu8anfHbug4dQ=", "https://media.istockphoto.com/id/1181251151/photo/travertine-stone-texture-background.jpg?s=2048x2048&w=is&k=20&c=DaZVIBOwF7GjM1Ok7U7o7v2hTFGIHrCfde7e5jwS73M="],
    description: "Natural Travertine for luxurious designs."
  }
];

const FeaturedProducts = () => (
  <section id="products" className="featured-products">
    <Container>
      <h2>Featured Products</h2>
      <Row>
        {productData.map((product, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Carousel>
                {product.images.map((image, imgIndex) => (
                  <Carousel.Item key={imgIndex}>
                    <Card.Img variant="top" src={image} alt={`${product.name} ${imgIndex + 1}`} />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default FeaturedProducts;
