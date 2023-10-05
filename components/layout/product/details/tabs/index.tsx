import { createRef, useRef, useState } from 'react';

import { SingleProduct } from 'types/singleProduct.types';

import { DownArrowIcon } from 'public/assets/icons/DownArrow';
import { isActiveClass } from 'utils/activeClass';
import { Specifications } from './Specifications';
import { Declaration } from './Declaration';

interface Props {
  product: SingleProduct;
}
//const targetRef = useRef(null);

export const Tabs = ({ product }: Props) => {
  const [activeTab, setActiveTab] = useState(2);

  const toggleTab = (tab: number) =>
    setActiveTab((prev) => (prev === tab ? 0 : tab));

  const data = [
    {
      id: 1,
      label: 'Opis',
      content: (
        <div
          className="descriptionTab"
          dangerouslySetInnerHTML={{ __html: product.supplier_description }}
        ></div>
      ),
    },
    {
      id: 2,
      label: 'Specifikacije',
      content: <Specifications attributes={product.attributes} />,
    },
    {
      id: 3,
      label: 'Deklaracija',
      content: <Declaration slug={product.mainCategory[0].slug || ''} />,
    },
  ];

  return (
    <div id="target-element" className="tabs">
      {data.map(({ id, label, content }) => (
        <div key={id} className={isActiveClass(activeTab === id, 'group')}>
          <h2 onClick={() => toggleTab(id)}>
            {label} <DownArrowIcon />
          </h2>
          <div className="tabContent">{content}</div>
        </div>
      ))}
    </div>
  );
};
