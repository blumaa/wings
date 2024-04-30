import { html } from 'lit';

import '@fluege/wings/button';

export default {
    title: 'Components/Button',
    parameters: {
        controls: {
            disable: false,
            hideNoControlsWarning: true
        }
    }
};

export const ButtonsDefault = {
    args: {
        primary: true,
        label: 'Button Default',
    },
    render: () => {
        return html`
            <example-button >
                Test Button
            </example-button>
        `;
    }
};

export const ButtonPrimary = {
    render: () => {
        return html`
            <example-button variant="primary">
                Test Button
            </example-button>
        `;
    }
};

export const ButtonSecondary = {
    render: () => {
        return html`
            <example-button variant="secondary">
                Test Button
            </example-button>
        `;
    }
};

export const ButtonWarning = {
    render: () => {
        return html`
            <example-button variant="secondary">
                Test Button
            </example-button>
        `;
    }
};

export const ButtonDisabled = {
    render: () => {
        return html`
            <example-button variant="secondary" disabled=${true}>
                Test Button
            </example-button>
        `;
    }
};