import React, { useState, useEffect } from "react";
import "./PasteLinkAlert.css";

function PasteLinkAlert(props) {
  useEffect(() => {
    props.setPasteState(true);
    let timer = setTimeout(() => {
      props.setPasteState(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [props.setPasteState]);

  return (
    <div className={`PasteLink_alert ${props.pasteState ? '' : 'fade-out'}`}>
      <p>링크 복사가 완료되었습니다.</p>
    </div>
  );
}

export { PasteLinkAlert };
