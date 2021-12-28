import React from "react";
import TermsHeader from "./TermsHeader";
import TermsDataShow from "./TermsDataShow";
import { TermsData } from "./TermsData";
import { Container, Typography } from "@material-ui/core";
const TermsConditions = () => {
  return (
    <div>
      <TermsHeader />
      <div style={{ padding: "50px 0" }}>
        <Container>
          {TermsData?.map((data, i) => (
            <TermsDataShow key={data.id} data={data} number={i + 1} />
          ))}
        </Container>
      </div>
    </div>
  );
};

export default TermsConditions;