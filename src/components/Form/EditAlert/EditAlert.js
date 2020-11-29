import React from "react";
import { ReactComponent as InfoIcon } from "../../../img/info_icon.svg";
import styled from "styled-components";
import style from "./editAlert.module.css";

const InfoBox = styled.div`
  border: 1px solid ${({ theme }) => theme.taskItemBg};
`;

const HighLightSpan = styled.span`
  color: ${({ theme }) => theme.accentColor};
`;

const EditAlert = ({ isEdit }) => {
  return (
    <InfoBox className={style.info__wrap}>
      {isEdit && (
        <div className={style.info__icon_wrap}>
          <InfoIcon className={style.info__icon} fill="#28241E" />
        </div>
      )}
      {isEdit && (
        <h5>
          Editing mode is <HighLightSpan>ON</HighLightSpan> , edit and{" "}
          <HighLightSpan>SAVE</HighLightSpan> your changes
        </h5>
      )}
    </InfoBox>
  );
};

export default EditAlert;
