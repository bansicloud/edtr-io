import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { EditorStory } from '../src'

storiesOf('Plugins/Solution', module)
  .add('Initial State', () => {
    const state = {
      plugin: 'rows',
      state: [
        {
          plugin: 'solution'
        }
      ]
    }
    return <EditorStory initialState={state} />
  })
  .add('Example', () => {
    const state = JSON.parse(
      '{"plugin":"rows","state":[{"plugin":"solution","state":{"title":"(mit Binomischen Formeln)","content":{"plugin":"text","state":{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Hier habe ich eine Lösung. ","marks":[]}]}]},{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]},{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Lösungen sollten immer ausführlich sein und für Lernende verständlich.","marks":[]}]}]}]}}}}}]}'
    )
    return <EditorStory initialState={state} />
  })