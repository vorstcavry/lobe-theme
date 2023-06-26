import { Theme, css } from 'antd-style';

export default (token: Theme) => {
  return css`
    .block.gradio-checkbox {
      margin: 0 !important;
    }

    label {
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    label > span,
    input:not([type='range'], [type='checkbox']) {
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    input:not([type='range'], [type='checkbox'], [type='number'], [type='radio'], .border-none) {
      resize: none;
      height: 36px !important;
      border-radius: ${token.borderRadius}px;
    }

    input[type='checkbox'],
    input[type='radio'] {
      cursor: pointer;

      flex: 0;

      width: ${token.fontSize}px;
      min-width: ${token.fontSize}px;
      max-width: ${token.fontSize}px;
      height: ${token.fontSize}px;
      min-height: ${token.fontSize}px;
      max-height: ${token.fontSize}px;

      appearance: none !important;
    }

    input[type='checkbox'] {
      --ring-color: transparent;

      position: relative;

      line-height: var(--line-sm);

      background-color: ${token.colorFillTertiary} !important;
      border: 1px solid ${token.colorBorder} !important;
      border-radius: ${token.borderRadiusSM}px !important;

      &:checked {
        background-color: ${token.colorPrimary} !important;
        background-image: var(--checkbox-check) !important;
        border-color: ${token.colorPrimaryBorder} !important;
      }
    }

    input[type='number'] {
      height: 28px !important;
      border-radius: ${token.borderRadius}px;
    }
  `;
};
