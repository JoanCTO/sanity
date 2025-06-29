import {type ComponentType} from 'react'

import {type PreviewProps} from '../../components/previews'
import {type PluginOptions} from '../../config'
import {
  type BlockAnnotationProps,
  type BlockProps,
  type FieldProps,
  type InputProps,
  type ItemProps,
  type PortableTextPluginsProps,
} from '../types'

export function pickInputComponent(
  plugin: PluginOptions,
): ComponentType<Omit<InputProps, 'renderDefault'>> {
  return plugin.form?.components?.input as ComponentType<Omit<InputProps, 'renderDefault'>>
}

export function pickFieldComponent(
  plugin: PluginOptions,
): ComponentType<Omit<FieldProps, 'renderDefault'>> {
  return plugin.form?.components?.field as ComponentType<Omit<FieldProps, 'renderDefault'>>
}

export function pickPreviewComponent(
  plugin: PluginOptions,
): ComponentType<Omit<PreviewProps, 'renderDefault'>> {
  return plugin.form?.components?.preview as ComponentType<Omit<PreviewProps, 'renderDefault'>>
}

export function pickItemComponent(
  plugin: PluginOptions,
): ComponentType<Omit<ItemProps, 'renderDefault'>> {
  return plugin.form?.components?.item as ComponentType<Omit<ItemProps, 'renderDefault'>>
}

export function pickBlockComponent(
  plugin: PluginOptions,
): ComponentType<Omit<BlockProps, 'renderDefault'>> {
  return plugin.form?.components?.block as ComponentType<Omit<BlockProps, 'renderDefault'>>
}

export function pickInlineBlockComponent(
  plugin: PluginOptions,
): ComponentType<Omit<BlockProps, 'renderDefault'>> {
  return plugin.form?.components?.inlineBlock as ComponentType<Omit<BlockProps, 'renderDefault'>>
}

export function pickAnnotationComponent(
  plugin: PluginOptions,
): ComponentType<Omit<BlockAnnotationProps, 'renderDefault'>> {
  return plugin.form?.components?.annotation as ComponentType<
    Omit<BlockAnnotationProps, 'renderDefault'>
  >
}

export function pickPortableTextEditorPluginsComponent(
  plugin: PluginOptions,
): ComponentType<Omit<PortableTextPluginsProps, 'renderDefault'>> {
  return plugin.form?.components?.portableText?.plugins as ComponentType<
    Omit<PortableTextPluginsProps, 'renderDefault'>
  >
}
