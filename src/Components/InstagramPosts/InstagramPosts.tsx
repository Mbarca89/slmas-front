import axios from 'axios'
import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const InstagramPosts = () => {

    const [posts, setPosts] = useState<any>([])

    const getPosts = async () => {
        const res = await axios.get('https://graph.instagram.com/me/media?fields=id,caption,like_count,media_url&limit=10&access_token=IGAAZAAmxPltptBZAE1aT0VFTnVzV2l6eUt6cWR4WnBZAX1NTdXRCMk01Q2RfTmRtYTNLVFBxYWFEdzNGNTZADTGdwZA1Nweno4RkYzMUNmR2JwNmZA5MTdQbTNOTUlQdFJzOHp1TmwzTG9heUhZAdU5wWWV4REdNQS1wN0k2S3c5NHQ5awZDZD')
        setPosts(res.data.data)
    }

    useEffect(() => {
        getPosts()
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 2, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1025, min: 576 },
            items: 3,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
    };


    console.log(posts)

    return (
        <div className='mb-5'>
            <div className='d-flex mb-5'>
                <img className='h-100' src="/images/ultimas.png" alt="" />
            </div>
            <Carousel
                responsive={responsive}
                infinite={true}
                className=""
                containerClass="container ps-4 ps-lg-0 mb-3"
                removeArrowOnDeviceType='mobile'
                autoPlay={true}
                autoPlaySpeed={4000}
                showDots
                
            >
                {posts && posts.map((post: any) =>
                    <div className='d-flex flex-column p-2 border rounded bg-light mb-5' style={{ height: '400px', width:'300px' }}>
                        <div className='h-50'>
                            <img className='w-100 h-100' src={post.media_url} alt="" />
                        </div>
                        <div className='d-flex justify-content-start align-items-center'>
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                <path d="M11.8227 4.77222C9.5756 2.52515 5.93237 2.52515 3.6853 4.77222C1.43823 7.01929 1.43823 10.6625 3.6853 12.9096L10.409 19.6334C11.2877 20.5121 12.7123 20.5121 13.591 19.6334L20.3147 12.9097C22.5618 10.6626 22.5618 7.01939 20.3147 4.77232C18.0676 2.52525 14.4244 2.52525 12.1773 4.77232L12 4.94959L11.8227 4.77222Z" fill="#fb0808" />
                            </svg>
                            <p className='m-0'>{post.like_count}</p>
                        </div>
                        <div className='d-flex flex-grow-1 h-25 word-break overflow-hidden'>
                            <p className=''>{post.caption}</p>
                        </div>
                    </div>
                )}
            </Carousel>

        </div>
    )
}

export default InstagramPosts