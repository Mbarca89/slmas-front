import { Button } from "react-bootstrap"
import LiveStream from "../../Components/LiveStream/LiveStream"
import InstagramPosts from "../../Components/InstagramPosts/InstagramPosts"
import News from "../../Components/News/News"
import Footer from "../../Components/Footer/Footer"

const Landing = () => {
    return (
        <div className="d-flex flex-column position-relative mb-5">
            <LiveStream></LiveStream>
            <div className='d-flex mb-5'>
                <img className='h-100' src="/images/ultimas.png" alt="" />
            </div>
            <InstagramPosts></InstagramPosts>
            <div className='d-flex mb-5'>
                <img className='h-100' src="/images/noticias.png" alt="" />
            </div>
            <News></News>
        </div>
    )
}

export default Landing