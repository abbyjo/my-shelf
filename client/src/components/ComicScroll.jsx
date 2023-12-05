import ComicCard from './ComicCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function ComicScroll(props) {


    return (
        <div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <ComicCard 
                    src="https://www.hlj.com/productimages/fru/fruamu-fnx945_0.jpg"
                    title="Miku 1"              
                />
                <ComicCard 
                    src="https://onlyfigure.com/cdn/shop/collections/Adsiz_tasarim-45_1200x1200.png?v=1683379988"
                    title="Miku 2"              
                />
                <ComicCard 
                    src="https://special.goodsmile.info/miku15th/images/img_product_scale.png"
                    title="Miku 3"              
                />
                <ComicCard 
                    src="https://resize.cdn.otakumode.com/ex/1000.1000/shop/product/ca7063108692469090dc8aba79384202.jpg"
                    title="Miku 4"              
                />
                <ComicCard 
                    src="https://www.eknightmedia.com/media/catalog/product/t/4/t40121_00_.png"
                    title="Miku 5"              
                />
            </Carousel>;
        </div>
    )
}

export default ComicScroll;