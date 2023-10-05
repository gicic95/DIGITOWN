import Image from 'next/image';
import Link from 'next/link';

import Error404 from 'public/assets/images/Error404.png';

const NotFoundPage = () => (
  <div className="noFoundPage flexCenter">
    <div className="centered">
      {/* <div className="left"> */}

      <Image src={Error404} alt="error404" width={522} height={198}></Image>
      <h2>Strana koju tražite nije pronađena</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus enim
        tempore quas, eum iusto maiores iste! Culpa accusantium voluptatum vitae
        quae exercitationem ipsum quisquam sit quas. Odit dignissimos, a ratione
        pariatur consectetur possimus sed atque culpa deleniti. Voluptatem,
        dolorum est.
      </p>
      <Link href="/" className="btn-primary">
        Nazad na početnu
      </Link>

      {/* </div>

      {/* <div className="bulb flexCenter">
        <Bulb className="bulbIcon" />
        <ElipseShadow className="shadow" />
      </div> */}
    </div>
  </div>
);

export default NotFoundPage;
