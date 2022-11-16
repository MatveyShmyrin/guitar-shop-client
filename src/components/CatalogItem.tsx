import React from 'react';
import {CCard, CCardBody, CCardFooter, CCardImage, CCardText, CCardTitle, CCol} from "@coreui/react";

const CatalogItem = (props:any) => {
    return (
        <CCol xs>
            <CCard>
                <CCardImage orientation="top" src={props.img} />
                <CCardBody>
                    <CCardTitle>{props.name}</CCardTitle>
                    <CCardText>
                        {props.description}
                    </CCardText>
                </CCardBody>
                <CCardFooter>
                    <small className="text-medium-emphasis">${props.price}</small>
                </CCardFooter>
            </CCard>
        </CCol>
    );
};

export default CatalogItem;