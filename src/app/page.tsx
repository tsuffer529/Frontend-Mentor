import Image from "next/image";

const QRCode = () => {
  return ( 
    <div>
      <Image
        src="/images/image-qr-code.png"
        alt="QRcode"
        width={288}
        height={288}
        quality={100}
        className="rounded-2xl" 
      />
    </div>
  );
}

const Home = () => {
  return ( 
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl pt-200 px-200 max-w-[320px]">
        <QRCode />
        <div className="pt-300 pb-500">
          <div className="typo-1 text-center">
            Improve your-front-end<br/>
            skills by building projects
          </div>
          <div className="typo-2 pt-200 text-center">
            Scan the QR code to visit Frontend<br/>
            Mentor and take your coding skills to<br/>
            the next level
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;