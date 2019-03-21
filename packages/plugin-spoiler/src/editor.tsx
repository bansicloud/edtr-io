import { StatefulPluginEditorProps } from '@edtr-io/core'
import { ExpandableBox } from '@edtr-io/ui'
import * as React from 'react'

import { spoilerState } from '.'

export class SpoilerEditor extends React.Component<
  StatefulPluginEditorProps<typeof spoilerState>
> {
  public render(): React.ReactNode {
    return (
      <ExpandableBox
        state={this.props.state}
        editable={this.props.editable}
        kind="Spoiler"
      />
    )
  }
}
