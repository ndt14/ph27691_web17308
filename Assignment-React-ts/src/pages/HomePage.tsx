import { Badge, Image, Rate, Typography} from 'antd'
import React, { useEffect, useState } from 'react'
import HeaderHome from '../component/HeaderHome'
import { List } from 'antd';
import { getAllProduct } from '../api/product';
import Card from 'antd/es/card/Card';
import AppFooter from '../component/AppFooter';


type Props = {}

const HomePage = (props: Props) => {

  const [productList, setProductList] = useState([])
  useEffect(() => {
    getAllProduct().then(({data: {product}}) => setProductList(product))
  }, [])
  //console.log(productList);
  

  return (
    <div >
      <HeaderHome />
      <div>
        <List
        grid={{ column:3 }}
            renderItem={(product, index) => {
              return (
                <Badge.Ribbon className="itemCardBadge" text="50%" color="red">
                <Card
                className="itemCard"
                    title={product.name}
                    key={index}
                    cover={
                    <Image className="itemImage" src={product.image} />
                    }
                    action={[
                      <Rate value={product.rating} />
                    ]}
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

export default HomePage