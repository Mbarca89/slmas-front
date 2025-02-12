import { Button } from "react-bootstrap"
import LiveStream from "../../Components/LiveStream/LiveStream"
import InstagramPosts from "../../Components/InstagramPosts/InstagramPosts"
import News from "../../Components/News/News"

const Landing = () => {
    return (
        <div className="d-flex flex-column container position-relative mb-5">
            <LiveStream></LiveStream>
            <InstagramPosts></InstagramPosts>
            <News></News>
        </div>
    )
}

export default Landing