import React from 'react';
import { withTranslation } from 'react-i18next';
import ReactHtmlParser from 'react-html-parser';

const Footer = ({ t }) => {
    return (
        <>
                    <div class="footer" style={{ borderTop:"1px solid #D0D0D0", backgroundColor: "#Fff" }}>
                        <div class="container">
                            <div class="row">
                            <div class="col-12">
                                <div class="copyright">
                                    <p>
                                        {ReactHtmlParser( t('footer.end', { framework: "react-i18next" })  )}

                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>  
        </>
    );
};

export default withTranslation('common')(Footer);