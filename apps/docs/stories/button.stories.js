import {html} from 'lit';

import '@fluege/wings/button';

export default {
    title: 'Atoms/Buttons',
    parameters: {
        controls: {
            disable: false,
            hideNoControlsWarning: true
        }
    }
};

export const Buttons = {
    render: () => {
        return html`
            <example-button variant="primary">
                Test Button
            </example-button>
        `;
    }
};
