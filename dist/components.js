module.exports = {".badge":{"@apply inline-flex \r\n    flex-nowrap\r\n    items-center\r\n    gap-2\r\n    px-3 \r\n    py-1 \r\n    rounded-full \r\n    bg-primary-100 \r\n    text-primary-900 \r\n    font-medium\r\n    text-sm":true},".badge.success":{"@apply bg-success-100 text-success-900":true},".badge.warning":{"@apply bg-warning-100 text-warning-900":true},".badge.emergency":{"@apply bg-emergency-100 text-emergency-900":true},".badge.xs":{"fontSize":".5rem","lineHeight":".75rem"},".badge.sm":{"@apply text-xs":true},".badge.lg":{"@apply text-base":true},".badge.xl":{"@apply text-lg":true},".badge.xxl":{"@apply text-xl":true},".breadcrumb":{"@apply flex flex-row font-medium p-2":true},".breadcrumb *":{"transition":"all .25s","@apply mr-3 px-2 p-0.5 cursor-pointer relative rounded-lg":true},".breadcrumb > :not(:last-child):after":{"content":"\"/\"","@apply absolute -right-3":true},".breadcrumb > :last-child":{"@apply font-bold":true},".breadcrumb > :not(:last-child):hover":{"@apply bg-primary-100 text-primary-900":true},".breadcrumb.arrow > :not(:last-child):after":{"content":"\">\""},".breadcrumb.extra_small":{"@apply text-xs":true},".breadcrumb.small":{"@apply text-sm":true},".breadcrumb.large":{"@apply text-lg":true},".breadcrumb.extra_large":{"@apply text-xl":true},".button":{"@apply px-4\r\n    h-9\r\n    inline-flex\r\n    flex-row\r\n    gap-2\r\n    items-center\r\n    justify-center\r\n    bg-primary-600\r\n    text-white\r\n    font-semibold\r\n    border \r\n    border-primary-600\r\n    rounded-lg\r\n    transition-all\r\n    ease-in-out\r\n    truncate":true},".button:hover,\n.button:focus,\n.button.active":{"@apply bg-primary-500\r\n    border-primary-500\r\n    ring-2\r\n    ring-primary-200":true},".button:focus":{"@apply outline-2 outline-primary-200":true},".button:active":{"@apply ring-4\r\n    ring-primary-200":true},".button.full":{"@apply w-full block":true},".button.round":{"@apply rounded-full":true},".button.outlined":{"@apply bg-transparent text-primary-600":true},".button.ghost":{"@apply bg-transparent border-none text-primary-600 ring-0":true},".button.ghost:hover,\n.button.ghost.active":{"@apply bg-primary-100":true},".button.success":{"@apply bg-success-500 border-success-500":true},".button.success:hover,\n.button.success:focus,\n.button.success.active":{"@apply bg-success-400\r\n    border-success-400\r\n    ring-2\r\n    ring-success-200":true},".button.success:focus":{"@apply outline-2 outline-success-200":true},".button.success:active":{"@apply ring-4\r\n    ring-success-200":true},".button.warning":{"@apply bg-warning-500 border-warning-500":true},".button.warning:hover,\n.button.warning:focus,\n.button.warning.active":{"@apply bg-warning-400\r\n    border-warning-500\r\n    ring-2\r\n    ring-warning-200":true},".button.warning:focus":{"@apply outline-2 outline-warning-200":true},".button.warning:active":{"@apply ring-4\r\n    ring-warning-200":true},".button.emergency":{"@apply bg-emergency-500 border-emergency-500":true},".button.emergency:hover,\n.button.emergency:focus,\n.button.emergency.active":{"@apply bg-emergency-400\r\n    border-emergency-400\r\n    ring-2\r\n    ring-emergency-200":true},".button.emergency:focus":{"@apply outline-2 outline-emergency-200":true},".button.emergency:active":{"@apply ring-4\r\n    ring-emergency-200":true},".button:disabled":{"@apply bg-slate-200 text-slate-900 border-slate-200":true},".button:disabled:hover":{"@apply ring-0 bg-slate-200":true},".button.outlined:disabled":{"@apply border-slate-900":true},".button.xs":{"@apply text-xs\r\n    h-4\r\n    px-2":true},".button.sm":{"@apply text-sm\r\n    h-6":true},".button.lg":{"@apply text-lg\r\n    h-12\r\n    px-6":true},".button.xl":{"@apply text-xl\r\n    h-16\r\n    px-6":true},".button.icon":{"@apply p-0\r\n    w-9\r\n    flex-none\r\n    truncate":true},".button.icon.xs":{"@apply text-xs\r\n    w-4":true},".button.icon.sm":{"@apply text-sm\r\n    w-6":true},".button.icon.lg":{"@apply text-xl\r\n    w-12":true},".button.icon.xl":{"@apply text-2xl\r\n    w-16":true},".button.icon svg":{"@apply h-3/5 w-auto":true},".button svg":{"@apply h-1/2 w-auto":true},".button_group":{"@apply inline-flex\r\n    flex-row\r\n    overflow-hidden\r\n    rounded-lg":true},".button_group:not(.pill) *":{"@apply rounded-none":true},".button_group.pill":{"@apply gap-1":true},".button_group .button":{"@apply border-none ring-0":true},".card":{"@apply flex\r\n    overflow-hidden\r\n    rounded-lg\r\n    bg-white\r\n    border\r\n    border-slate-300":true},".card.full":{"@apply h-full\r\n        w-full":true},".checkbox":{"@apply appearance-none\r\n  h-5\r\n  w-5\r\n  relative\r\n  rounded-md\r\n  border\r\n  border-primary-600\r\n  cursor-pointer":true},".checkbox:disabled":{"@apply border\r\n  border-slate-600\r\n  bg-slate-200\r\n  cursor-not-allowed":true},".checkbox:disabled:hover":{"@apply border-slate-600\r\n  bg-slate-200":true},".checkbox:focus":{"@apply outline-none":true},".checkbox:hover,\n.checkbox:focus":{"@apply ring-2\r\n  ring-primary-200":true},".checkbox:checked":{"@apply bg-primary-400":true},".checkbox.success":{"@apply border-success-600":true},".checkbox.succes:hover,\n.checkbox.success:focus":{"@apply ring-success-200":true},".checkbox.success:checked":{"@apply bg-success-400":true},".checkbox.warning":{"@apply border-warning-600":true},".checkbox.warning:hover,\n.checkbox.warning:focus":{"@apply ring-warning-200":true},".checkbox.warning:checked":{"@apply bg-warning-400":true},".checkbox.emergency":{"@apply border-emergency-600":true},".checkbox.emergency:hover,\n.checkbox.emergency:focus":{"@apply ring-emergency-200":true},".checkbox.emergency:checked":{"@apply bg-emergency-400":true},".checkbox.xs":{"@apply w-3\r\n  h-3":true},".checkbox.sm":{"@apply w-4\r\n  h-4":true},".checkbox.lg":{"@apply w-6\r\n  h-6":true},".checkbox.xl":{"@apply w-7\r\n  h-7":true},".collapse":{"@apply flex\r\n    flex-col\r\n    gap-1\r\n    rounded-lg\r\n    overflow-hidden":true},".collapse *":{"@apply ease-in\r\n        duration-200":true},".collapse.xs":{"@apply text-xs":true},".collapse.xs .title":{"@apply h-4\r\n            px-2":true},".collapse.xs .title::after":{"@apply w-4":true},".collapse.sm":{"@apply text-sm":true},".collapse.sm .title":{"@apply h-6\r\n            px-2":true},".collapse.lg .title":{"@apply text-lg\r\n            h-12":true},".collapse.lg .title::after":{"@apply w-5":true},".collapse.xl .title":{"@apply text-xl\r\n            h-16":true},".collapse.xl .title::after":{"@apply w-6":true},".collapse .title":{"@apply h-10\r\n        px-2\r\n        rounded-lg\r\n        w-full\r\n        inline-flex\r\n        justify-center\r\n        items-center\r\n        font-medium\r\n        text-primary-900\r\n        bg-primary-50\r\n        border border-primary-300\r\n        text-center\r\n        truncate":true},".collapse .title:hover, .collapse .title:focus":{"@apply bg-primary-100":true},".collapse.arrow .title, .collapse.plus .title":{"@apply justify-between":true},".collapse.arrow .title::after":{"content":"\"\"","background":"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 13l-5 5m0 0l-5-5m5 5V6' /%3E%3C/svg%3E\")","backgroundRepeat":"no-repeat","backgroundPosition":"center","@apply w-5 h-full flex justify-center items-center rotate-0 ease-in duration-100":true},".collapse.plus .title::after":{"content":"\"\"","background":"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6' /%3E%3C/svg%3E\")","backgroundRepeat":"no-repeat","backgroundPosition":"center","@apply w-5 h-full flex justify-center items-center rotate-0 ease-in duration-100":true},".collapse .content":{"@apply p-2 bg-slate-50 rounded-lg border border-slate-300":true},".collapse.outline":{"@apply gap-0 outline-none border border-slate-300":true},".collapse.outline .title":{"@apply border-none rounded-none":true},".collapse.outline .content":{"@apply border-none border-t border-slate-300 rounded-none":true},".collapse.outline:hover, .collapse.outline:focus":{"@apply border-primary-600":true},".dropdown":{"@apply relative inline-block":true},".dropdown .content":{"@apply mt-1 opacity-0 invisible absolute z-50 transition-all ease-in-out":true},".dropdown.end .content":{"@apply right-0":true},".dropdown.left .content":{"@apply top-0 right-full m-0 mr-1 bottom-auto":true},".dropdown.right .content":{"@apply left-full top-0 m-0 ml-1 bottom-auto":true},".dropdown.top .content":{"@apply bottom-full top-auto m-0 mb-1":true},".dropdown.end.right .content":{"@apply bottom-0 top-auto":true},".dropdown.end.left .content":{"@apply bottom-0 top-auto":true},".dropdown.open .content,\n.dropdown.hover:hover .content,\n.dropdown:not(.dropdown.hover):focus .content,\n.dropdown:not(.dropdown.hover):focus-within .content":{"@apply visible opacity-100":true},".input":{"@apply px-4\r\n    h-9\r\n    rounded-lg\r\n    border\r\n    border-primary-600\r\n    text-slate-700\r\n    font-medium\r\n    truncate\r\n    outline-none":true},".input:disabled":{"@apply border\r\n    border-slate-600\r\n    bg-slate-200\r\n    cursor-not-allowed":true},".input:disabled:hover":{"@apply border-slate-600\r\n    bg-slate-200":true},".input:hover":{"@apply ring-2\r\n    ring-primary-200":true},".input:focus":{"@apply ring-4":true},".input.success":{"@apply border-success-600":true},".input.success:hover":{"@apply ring-2\r\n    ring-success-200":true},".input.success:focus":{"@apply ring-4":true},".input.warning":{"@apply border-warning-600":true},".input.warning:hover":{"@apply ring-2\r\n    ring-warning-200":true},".input.warning:focus":{"@apply ring-4":true},".input.emergency":{"@apply border-emergency-600":true},".input.emergency:hover":{"@apply ring-2\r\n    ring-emergency-200":true},".input.emergency:focus":{"@apply ring-4":true},".input.xs":{"@apply text-xs\r\n    h-4\r\n    px-2":true},".input.sm":{"@apply text-sm\r\n    px-2\r\n    h-6":true},".input.lg":{"@apply text-lg\r\n    h-12":true},".input.xl":{"@apply text-xl\r\n    h-16":true},".menu":{"@apply flex \r\n  flex-col \r\n  flex-nowrap \r\n  gap-2\r\n  p-2 \r\n  shadow \r\n  rounded-lg\r\n  bg-white\r\n  border\r\n  border-slate-300":true},".menu.horizontal":{"@apply flex-row w-auto":true},".menu.icon":{"@apply w-auto":true},".menu .title":{"@apply text-sm font-medium text-slate-600 pl-2":true},".menu .divider":{"@apply w-full border-t border-slate-300":true},".horizontal.menu .divider":{"@apply w-auto border-l border-t-0":true},".menu *":{"@apply flex":true},".notification":{"@apply flex \r\n    flex-row\r\n    items-center\r\n    gap-3\r\n    w-full \r\n    px-4\r\n    py-2 \r\n    bg-purple-100\r\n    text-primary-900\r\n    font-medium\r\n    rounded-lg":true},".notification *":{"@apply break-words whitespace-normal":true},".notification p":{"@apply flex-1":true},".notification.success":{"@apply bg-success-100 text-success-900":true},".notification.warning":{"@apply bg-warning-100 text-warning-900":true},".notification.emergency":{"@apply bg-emergency-100 text-emergency-900":true},".notification.toast":{"@apply w-60":true},".radio":{"@apply appearance-none\r\n  h-5\r\n  w-5\r\n  relative\r\n  rounded-full\r\n  border\r\n  border-primary-600\r\n  cursor-pointer":true},".radio:disabled":{"@apply border\r\n  border-slate-600\r\n  bg-slate-200\r\n  cursor-not-allowed":true},".radio:disabled:hover":{"@apply border-slate-600\r\n  bg-slate-200":true},".radio:focus":{"@apply outline-none":true},".radio:hover,\n.radio:focus":{"@apply ring-2\r\n  ring-primary-200":true},".radio:checked":{"@apply bg-primary-400":true},".radio.success":{"@apply border-success-600":true},".radio.succes:hover,\n.radio.success:focus":{"@apply ring-success-200":true},".radio.success:checked":{"@apply bg-success-400":true},".radio.warning":{"@apply border-warning-600":true},".radio.warning:hover,\n.radio.warning:focus":{"@apply ring-warning-200":true},".radio.warning:checked":{"@apply bg-warning-400":true},".radio.emergency":{"@apply border-emergency-600":true},".radio.emergency:hover,\n.radio.emergency:focus":{"@apply ring-emergency-200":true},".radio.emergency:checked":{"@apply bg-emergency-400":true},".radio.xs":{"@apply w-3\r\n  h-3":true},".radio.sm":{"@apply w-4\r\n  h-4":true},".radio.lg":{"@apply w-6\r\n  h-6":true},".radio.xl":{"@apply w-7\r\n  h-7":true},".range":{"@apply bg-transparent\r\n    w-44\r\n    appearance-none":true},".range::-webkit-slider-runnable-track":{"@apply bg-primary-200 rounded-full h-1 w-full":true},".range::-moz-range-track":{"@apply bg-primary-200 rounded-full h-1 w-full":true},".range::-webkit-slider-thumb":{"@apply bg-primary-600\r\n    rounded-full \r\n    w-2 \r\n    h-4 \r\n    relative \r\n    transition-all \r\n    ease-in-out \r\n    duration-300 \r\n    border-none\r\n    cursor-pointer":true},".range::-moz-range-thumb":{"@apply bg-primary-600\r\n    rounded-full \r\n    w-2 \r\n    h-4 \r\n    relative \r\n    transition-all \r\n    ease-in-out \r\n    duration-300 \r\n    border-none\r\n    cursor-pointer":true},".range.sm::-webkit-slider-runnable-track":{"@apply h-0.5":true},".range.sm::-moz-range-track":{"@apply h-0.5":true},".range.sm::-webkit-slider-thumb":{"@apply bg-primary-600 rounded-full w-2 h-3 relative transition-all ease-in-out duration-300 border-none":true},".range.sm::-moz-range-thumb":{"@apply bg-primary-600 rounded-full w-2 h-3 relative transition-all ease-in-out duration-300 border-none":true},".range.lg::-webkit-slider-runnable-track":{"@apply h-1.5":true},".range.lg::-moz-range-track":{"@apply h-1.5":true},".range.lg::-webkit-slider-thumb":{"@apply bg-primary-600 rounded-full w-3 h-5 relative transition-all ease-in-out duration-300 border-none":true},".range.lg::-moz-range-thumb":{"@apply bg-primary-600 rounded-full w-3 h-5 relative transition-all ease-in-out duration-300 border-none":true},".range.xl::-webkit-slider-runnable-track":{"@apply h-1.5":true},".range.xl::-moz-range-track":{"@apply h-1.5":true},".range.xl::-webkit-slider-thumb":{"@apply bg-primary-600 rounded-full w-3 h-6 relative transition-all ease-in-out duration-300 border-none":true},".range.xl::-moz-range-thumb":{"@apply bg-primary-600 rounded-full w-3 h-6 relative transition-all ease-in-out duration-300 border-none":true},".range.success::-webkit-slider-runnable-track":{"@apply bg-success-200":true},".range.success::-moz-range-track":{"@apply bg-success-200":true},".range.success::-webkit-slider-thumb":{"@apply bg-success-600":true},".range.success::-moz-range-thumb":{"@apply bg-success-600":true},".range.warning::-webkit-slider-runnable-track":{"@apply bg-warning-200":true},".range.warning::-moz-range-track":{"@apply bg-warning-200":true},".range.warning::-webkit-slider-thumb":{"@apply bg-warning-600":true},".range.warning::-moz-range-thumb":{"@apply bg-warning-600":true},".range.emergency::-webkit-slider-runnable-track":{"@apply bg-emergency-200":true},".range.emergency::-moz-range-track":{"@apply bg-emergency-200":true},".range.emergency::-webkit-slider-thumb":{"@apply bg-emergency-600":true},".range.emergency::-moz-range-thumb":{"@apply bg-emergency-600":true},".range:disabled::-webkit-slider-runnable-track":{"@apply bg-slate-200":true},".range:disabled::-moz-range-track":{"@apply bg-slate-200":true},".range:disabled::-webkit-slider-thumb":{"@apply bg-slate-600 cursor-not-allowed":true},".range:disabled::-moz-range-thumb":{"@apply bg-slate-600 cursor-not-allowed":true},".select":{"@apply pl-4 pr-8\r\n      h-9\r\n      w-44\r\n      max-w-sm\r\n      rounded-lg\r\n      border\r\n      border-primary-600\r\n      text-slate-700\r\n      bg-white\r\n      font-medium\r\n      truncate\r\n      outline-none\r\n      appearance-none":true,"backgroundImage":"linear-gradient(45deg, transparent 50%, currentColor 0), linear-gradient(135deg, currentColor 50%, transparent 0)","backgroundPosition":"calc(100% - 20px) calc(1px + 50%), calc(100% - 16px) calc(1px + 50%)","backgroundSize":"4px 4px, 4px 4px","backgroundRepeat":"no-repeat"},".select:disabled":{"@apply border\r\n      border-slate-600\r\n      bg-slate-200\r\n      cursor-not-allowed":true},".select:disabled:hover":{"@apply border-slate-600\r\n      bg-slate-200":true},".select:hover":{"@apply ring-2\r\n      ring-primary-200":true},".select:focus":{"@apply ring-4":true},".select.success":{"@apply border-success-600":true},".select.success:hover":{"@apply ring-2\r\n      ring-success-200":true},".select.success:focus":{"@apply ring-4":true},".select.warning":{"@apply border-warning-600":true},".select.warning:hover":{"@apply ring-2\r\n      ring-warning-200":true},".select.warning:focus":{"@apply ring-4":true},".select.emergency":{"@apply border-emergency-600":true},".select.emergency:hover":{"@apply ring-2\r\n      ring-emergency-200":true},".select.emergency:focus":{"@apply ring-4":true},".select.xs":{"@apply text-xs\r\n      h-4\r\n      pl-1\r\n      pr-1":true},".select.sm":{"@apply text-sm\r\n      px-2\r\n      h-6":true},".select.lg":{"@apply text-lg\r\n      h-12":true},".select.xl":{"@apply text-xl\r\n      h-16":true},".sidebar":{"@apply relative\r\n    inset-0\r\n    z-50\r\n    flex\r\n    flex-row\r\n    pointer-events-none":true},".sidebar *":{"@apply ease-out\r\n        duration-200\r\n        pointer-events-auto":true},".sidebar .toggle":{"@apply hidden":true},".sidebar .content":{"@apply h-full \r\n        w-72  \r\n        flex-none\r\n        bg-white \r\n        border-r \r\n        border-slate-300\r\n        relative\r\n        left-0\r\n        overflow-y-auto":true},"@media (max-width: 640px)":{".sidebar":{"position":"absolute"},".sidebar .content":{"left":"-100%"}},".sidebar .deadspace":{"@apply opacity-0\r\n        w-full\r\n        flex-1\r\n        bg-slate-900\r\n        relative\r\n        -left-full":true},".sidebar .toggle:checked ~ .content":{"@apply left-0":true},".sidebar .toggle:checked ~ .deadspace":{"@apply left-0\r\n            opacity-10":true},".textarea":{"@apply px-4\r\n    py-2\r\n    h-16\r\n    rounded-lg\r\n    border\r\n    border-primary-600\r\n    text-slate-700\r\n    font-medium\r\n    truncate\r\n    outline-none":true,"minHeight":"4rem"},".textarea:disabled":{"@apply border\r\n    border-slate-600\r\n    bg-slate-200\r\n    cursor-not-allowed":true},".textarea:disabled:hover":{"@apply border-slate-600\r\n    bg-slate-200":true},".textarea:hover":{"@apply ring-2\r\n    ring-primary-200":true},".textarea:focus":{"@apply ring-4":true},".textarea.success":{"@apply border-success-600":true},".textarea.success:hover":{"@apply ring-2\r\n    ring-success-200":true},".textarea.success:focus":{"@apply ring-4":true},".textarea.warning":{"@apply border-warning-600":true},".textarea.warning:hover":{"@apply ring-2\r\n    ring-warning-200":true},".textarea.warning:focus":{"@apply ring-4":true},".textarea.emergency":{"@apply border-emergency-600":true},".textarea.emergency:hover":{"@apply ring-2\r\n    ring-emergency-200":true},".textarea.emergency:focus":{"@apply ring-4":true},".textarea.xs":{"@apply text-xs\r\n    px-2\r\n    h-12":true,"minHeight":"3rem"},".textarea.sm":{"@apply text-sm\r\n    px-2\r\n    h-14":true,"minHeight":"3.5rem"},".textarea.lg":{"@apply text-lg\r\n    h-20":true,"minHeight":"5rem"},".textarea.xl":{"@apply text-xl\r\n    h-24":true,"minHeight":"6rem"},".toggle":{"-Handleoffset":"1.25rem","@apply appearance-none \r\n  bg-primary-600 \r\n  w-10\r\n  h-5\r\n  rounded-full \r\n  border \r\n  border-purple-600 \r\n  cursor-pointer \r\n  ease-in-out \r\n  duration-300":true,"transition":"background, box-shadow 0.25s ease-in-out","boxShadow":"calc(var(--handleoffset) * -1) 0 0 2px #fff inset, 0 0 0 2px #fff inset"},".toggle:disabled":{"@apply bg-slate-600\r\n  border-slate-600\r\n  cursor-not-allowed":true,"boxShadow":"calc(var(--handleoffset) * -1) 0 0 2px #E2E8F0 inset, 0 0 0 2px #fff inset"},".toggle:checked,\n.toggle[checked=\"true\"]":{"boxShadow":"var(--handleoffset) 0 0 2px #fff inset, 0 0 0 2px #fff inset"},".toggle.xs":{"-Handleoffset":"0.75rem","@apply w-6\r\n  h-3":true},".toggle.sm":{"-Handleoffset":"1rem","@apply w-8\r\n  h-4":true},".toggle.lg":{"-Handleoffset":"1.5rem","@apply w-12\r\n  h-6":true},".toggle.xl":{"-Handleoffset":"1.75rem","@apply w-14\r\n  h-7":true},".toggle.success":{"@apply bg-success-600 border-success-600":true},".toggle.warning":{"@apply bg-warning-600 border-warning-600":true},".toggle.emergency":{"@apply bg-emergency-600 border-emergency-600":true},".tooltip":{"@apply relative inline-block":true},".tooltip.open:before, .tooltip:hover:before":{"@apply opacity-100":true},".tooltip::before":{"content":"attr(data-content)","@apply pointer-events-none w-max block absolute opacity-0 whitespace-nowrap text-sm bg-white border border-slate-300 text-slate-900 rounded-lg px-2 py-1 transition delay-100 duration-100 ease-in-out":true},".tooltip.dark::before":{"@apply bg-slate-700 text-white border-0":true},".tooltip.success::before":{"@apply bg-success-500 text-white border-0":true},".tooltip.warning::before":{"@apply bg-warning-500 text-white border-0":true},".tooltip.emergency::before":{"@apply bg-emergency-500 text-white border-0":true},".tooltip.top::before":{"@apply left-1/2 -translate-x-1/2 bottom-full mb-2 z-10":true},".tooltip.bottom::before":{"@apply left-1/2 -translate-x-1/2 top-full mt-2 z-10":true},".tooltip.left::before":{"@apply top-1/2 -translate-y-1/2 right-full mr-2 z-10":true},".tooltip.right::before":{"@apply top-1/2 -translate-y-1/2 left-full ml-2 z-10":true}};