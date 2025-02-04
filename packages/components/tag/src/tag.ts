import { buildProp } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'

export const tagProps = {
  closable: Boolean,
  type: buildProp({
    type: String,
    values: ['success', 'info', 'warning', 'danger', ''] as const,
    default: '',
  }),
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: '',
  },
  size: buildProp({
    type: String,
    values: ['medium', 'small', 'mini'],
  } as const),
  effect: buildProp({
    type: String,
    values: ['dark', 'light', 'plain'] as const,
    default: 'light',
  }),
} as const
export type TagProps = ExtractPropTypes<typeof tagProps>

export const tagEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type TagEmits = typeof tagEmits
