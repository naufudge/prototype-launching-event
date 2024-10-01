// components/RibbonCutting.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RibbonCutting = () => {
  const [cut, setCut] = useState(false);

  const handleCut = () => {
    setCut(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '200px', backgroundColor: 'transparent' }}>
      <motion.div
        initial={{ width: '100%' }}
        animate={{ width: cut ? '0%' : '100%' }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: '20px',
          backgroundColor: 'red',
        }}
      />
      <button onClick={handleCut} style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translateX(-50%)' }}>
        Cut Ribbon
      </button>
    </div>
  );
};

export default RibbonCutting;
