import React from 'react';
import langConsumer from '../i18n/lang-consumer';

function Loader({t}) {
    return (
        <h3>{`${t('loading')}...`}</h3>
    )
}

export default langConsumer(Loader);