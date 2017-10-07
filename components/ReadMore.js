import { Link } from '../routes'
import React from 'react'

class ReadMore extends React.Component {

  render () {
    return (
      <div>
        <Link route={this.props.route} params={this.props.params}>
          <a className="button">{this.props.text}</a>
        </Link>
      </div>
    )
  }

}

ReadMore.defaultProps = {
  text: 'Lire plus',
  route: '/',
  params : {}
}

export default ReadMore