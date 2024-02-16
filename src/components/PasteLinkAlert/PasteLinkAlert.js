import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./PasteLinkAlert.css";

function PasteLinkAlert(props) {
  const controls = useAnimation();

  useEffect(() => {
    const show = async () => {
      await controls.start({ opacity: 1 });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await controls.start({ opacity: 0 });
      props.setPasteState(false);
    };

    show();

    return () => {
      controls.stop();
    };
  }, [controls, props.setPasteState]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.3 }}
      className="PasteLink_alert"
    >
      <p>링크 복사가 완료되었습니다.</p>
    </motion.div>
  );
}

export { PasteLinkAlert };
