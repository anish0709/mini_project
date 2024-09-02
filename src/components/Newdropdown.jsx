import React, { useState } from 'react';

const NewDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora excepturi obcaecati maxime doloribus laudantium soluta iure veritatis omnis accusantium expedita ratione neque, iusto autem incidunt saepe vero nemo consequatur sit. Officia.</div>}
    </div>
  )
}

export default NewDropdown;
