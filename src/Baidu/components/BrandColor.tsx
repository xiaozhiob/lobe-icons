import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, width: 'fit-content', ...style }}
      viewBox="0 0 72 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <g fill="none" fillRule="nonzero">
        <path
          d="M32.344 10.735c1.02-1.71 4.072-3.083 6.223.286 1.584 2.284 4.297 4.397 4.297 4.397s2.034 1.601.733 4.684c-1.243 2.956-5.658 1.607-6.024 1.49l-.024-.009s-1.753-.568-3.79-.112c-2.032.458-3.784.286-3.784.286l-.045-.001c-.33-.01-2.388-.187-3.011-2.968-.677-3.028 2.373-4.687 2.6-4.968.227-.288 1.808-1.37 2.825-3.085zm.99 1.738v2.032H31.69s-1.645.138-2.22 2.014c-.201 1.252.177 1.99.243 2.148.066.157.598 1.073 1.932 1.342h3.088v-7.514l-1.398-.022zm3.6 2.191l-1.445.024v3.956s.064.985 1.444 1.344h3.553v-5.3h-1.533v3.979h-1.464s-.468-.068-.556-.447v-3.556zm-3.625 1.051v3.06h-1.244s-.866-.045-1.13-1.049c-.136-.445.02-.959.089-1.16.063-.203.354-.671.953-.85h1.332zm9.555-9.036c2.093 0 2.655 2.06 2.655 2.742 0 .688.285 3.597-2.316 3.655-2.604.057-2.713-1.77-2.713-3.08 0-1.374.278-3.317 2.374-3.317zM27.712 5.08c1.528-.135 2.654 1.55 2.77 2.513.07.625.395 3.486-1.981 4-2.372.515-3.254-2.249-2.993-3.544 0 0 .28-2.797 2.204-2.969zm8.875-1.483c.14-1.31 1.695-3.316 2.94-3.028 1.241.285 2.375 1.944 2.145 3.37-.225 1.428-1.35 3.313-3.105 3.082-1.754-.226-2.15-1.823-1.98-3.424zM32.913 0c1.311 0 2.371 1.519 2.371 3.398 0 1.879-1.06 3.4-2.371 3.4-1.312 0-2.375-1.521-2.375-3.4 0-1.88 1.063-3.398 2.375-3.398z"
          fill="#2932E1"
        ></path>
        <path
          d="M57.417 12.09v-1.668H46.5l-.014 1.692h4.693l-.44 1.012h-3.99v8.371h9.48c.992 0 .904-1.007.904-1.007v-7.364h-3.997l.35-1.036h3.931zm-2.12 7.62s-.115.278-.277.278h-6.292v-1.953h6.57v1.674zm-.01-3.287h-6.56v-1.83h6.56v1.83zm14.604-5.957h-4.283v-.844H63.6v.803h-4.913V21.48h1.768v-9.629h9.437v-1.385zm-1.155 2.288v-.64H67.01v.64h-3.552v-.617h-1.636v.617h-1.105l.022 1.252h1.083v2.352h5.976c.829 0 .938-.88.938-.88v-1.472H70v-1.253h-1.264v.001zm-1.727 2.107s-.154.285-.35.285h-3.22v-1.164h3.57v.88zm-6.052 3.212l2.75 1.605c-.217.242-1.157.547-1.157.547h-1.833v1.234h2.49c.742-.153 2.117-.856 2.117-.856.57.526 1.664.745 1.664.745h2.838v-1.231h-2.14c-.576-.087-1.094-.417-1.094-.417l3.234-1.87v-1.012h-8.868v1.255zm5.723-.02l-1.573.834-1.442-.835h3.015zm-44.47-5.827h2.383v-2.112H22.21v2.112zm0 9.21h2.383v-8.29H22.21v8.29zm-3.874-8.282l-5.084-.013v1.742h4.458s1.06.263 1.06.941v.614h-4.033s-1.586.147-2.096 2.055c-.088.893.03 1.331.089 1.495.057.161.522 1.214 1.906 1.478h6.423v-5.937s-.306-2.037-2.723-2.375m.435 6.671h-3.246c-.437-.177-.582-.47-.613-.543-.03-.072-.13-.334-.013-.6.263-.512.698-.63.698-.63h3.174v1.773zm-6.654-1.297c.07-2.018-1.728-2.716-1.728-2.716 1.522-.802 1.329-2.822 1.329-2.822C11.553 9.9 7.8 10.043 7.8 10.043H2v11.523h6.548c3.846-.016 3.57-3.038 3.57-3.038m-3.701.896v.005H4.494v-2.486h3.904l.132.027s.743.136 1.012.809c0 0 .155.631-.18 1.1 0 0-.248.435-.945.545m.832-5.343s-.264.488-.964.593h-3.79V12.29h3.774s.82-.038 1.092.618c0 0 .163.697-.112 1.174"
          fill="#E10402"
        ></path>
      </g>
    </svg>
  );
});

export default Icon;