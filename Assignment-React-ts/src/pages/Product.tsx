import { Badge ,Image, Rate, Typography} from 'antd'
import React, { useEffect, useState } from 'react'
import { List } from 'antd';
import { getAllProduct } from '../api/product';
import Card from 'antd/es/card/Card';
import AppFooter from '../component/AppFooter';
import { Link } from "react-router-dom"
import { IProduct } from '../types/product';

type Props = {
  products: IProduct[],
}

const Product = ({products}: Props) => {

  const [productList, setProductList] = useState<IProduct[]>([])
  useEffect(() => {
    getAllProduct().then(({data: {product}}) => setProductList(product))
  }, [])

  return (
    <div>
      <div>
        <List
        grid={{ column:3 }}
            renderItem={(product, index) => {
              console.log(product);
              
              return (
                <Badge.Ribbon className="itemCardBadge" text="50%" color="red">
                <Link to={`/products/${product._id}`}>
                  <Card
                  className="itemCard"
                      title={product.name}
                      key={index}
                      cover={
                      <Image className="itemImage" src={product.image} />
                      }
                  >
                    <Card.Meta title={
                    <Typography.Paragraph>
                      Price:
                      <Typography.Text type="danger">{product.price}</Typography.Text>
                    </Typography.Paragraph>
                    }
                    description={product.description}
                    ></Card.Meta>
                  </Card>
                </Link>
                </Badge.Ribbon>
              );
            }}
            dataSource={productList}
        ></List>

      </div>
      <AppFooter/>
    </div>
  )
}

export default Product