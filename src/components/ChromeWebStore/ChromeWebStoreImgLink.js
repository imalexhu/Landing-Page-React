import { Link } from "react-router-dom";

const ChromeWebStoreImgLink = ({
  height,
}) => {
  return (
    <Link
      to={{
        pathname:
          "https://chrome.google.com/webstore/detail/discountly/gnocblmhdddbhhdijfdnloldcbnhhign",
      }}
      target="_blank"
    >
      <img
          onClick={() => {
            window.gtag('event', 'conversion', {
              'send_to': 'AW-11257957829/cGytCLrryLoYEMWbm_gp',
              // 'event_callback': callback
            });
          }}
          style={{
              height: height
          }}
          src="https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/HRs9MPufa1J1h5glNhut.png" 
          alt="Download from the Chrome Web Store"/>
    </Link>
            
  );
};

export default ChromeWebStoreImgLink;
