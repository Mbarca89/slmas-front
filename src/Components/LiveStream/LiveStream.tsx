const LiveStream = () => {
    return (
        <div>
            <div className="d-flex mt-5 mb-5">
                <img src="/images/señal en vivo.png" alt="" />
            </div>
            <div className="w-100 d-flex justify-content-center mb-5">
                <div className="w-50 ratio ratio-16x9">
                    <iframe  src="https://radiosmundiales.com/sanluismas"></iframe>
                </div>
            </div>
        </div>
    )
}

export default LiveStream