import React, { PureComponent } from 'react'

export default class List extends PureComponent {
  render() {
    const { items } = this.props
    const ListType = this.props.ordered ? 'ol' : 'ul'

    return items instanceof Array ? (
      <ListType>{items.map(item => <li key={item}>{item}</li>)}</ListType>
    ) : null
  }
}
