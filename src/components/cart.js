import { useContext } from "react";
import { CartContext } from "./CartContext";
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';


const Cart = () => {

    const test = useContext(CartContext);
    console.log(test);

    return(
        <>
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            {
                test.cartList.map(item => (
                    <ContentCart>
                    <Product>
                    <ProductDetail>
                        <ImageCart src={item.image} />
                        <Details>
                        <span>
                            <b>Product:</b> {item.name}
                        </span>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                        <ProductAmount>{item.cantidad}</ProductAmount>
                        </ProductAmountContainer>
                        <ProductPrice>$ {item.cost}</ProductPrice>
                    </PriceDetail>
                    </Product>
            </ContentCart>
                ))
            }

            </WrapperCart>
            
        </>
    )
};

export default Cart; 