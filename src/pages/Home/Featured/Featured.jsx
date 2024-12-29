import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg'
import './Fearured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-10'>
            <SectionTitle
            subHeading='Check it out'
            heading='Featured Item'
            ></SectionTitle>
            <div className='md:flex gap-5 bg-slate-600 bg-opacity-80 justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div>
                    <p>Aug 20 ,2026</p>
                    <p className='uppercase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus enim nulla maiores blanditiis ipsum, dolores architecto doloribus necessitatibus molestiae magnam adipisci sit, laudantium ullam quos delectus amet? Numquam eos quos totam dolores, perspiciatis, nulla eum officiis, sit maiores modi quaerat molestiae fugiat perferendis voluptates mollitia! Tempora corrupti aliquam dolores!</p>
                    <button className='btn btn-outline border-0 mt-4 border-b-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;