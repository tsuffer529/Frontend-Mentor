import Image from "next/image";

const QRCode = () => {
  return ( 
    <Image
      src="/images/image-qr-code.png"
      alt="QRcode"
      width={288}
      height={288}
      quality={100}
      className="rounded-2xl" 
    />
  );
}

const Contents = () => {
  return ( 
    <div className="mb-300 px-200 space-y-200">
      <h1 className="typo-1 text-center">
        Improve your-front-end
        skills by building projects
      </h1>
      <p className="typo-2 text-center">
        Scan the QR code to visit Frontend
        Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

const Home = () => {
  return ( 
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl space-y-300 p-200 max-w-[320px]">
        <QRCode />
        <Contents />
      </div>
    </div>
  );
}

export default Home;