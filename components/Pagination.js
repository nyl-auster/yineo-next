import { Link } from '../routes'

class Pagination extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: props.currentPage
    }
  }

  getNumberOfPage () {
    const total = Math.ceil(this.props.resultsTotal / this.props.resultsPerPage)
    return total
  }

  getPagesAsArray () {
    const numberOfPage = this.getNumberOfPage()
    let pages = []
    for (let i = 1; i <= numberOfPage; i++) {
      pages.push(i)
    }
    return pages;
  }

  render () {
    const params = this.props.urlQuery
    if (params.page) {
      delete params.page
    }
    const pages = this.getPagesAsArray()
    if (pages.length == 1) {
      return null
    }
    return (
      <nav className="pagination" role="navigation" aria-label="pagination">
        <ul className="pagination-list">
          {pages.map(page =>
            <li key={page}>
              <Link route={this.props.route} params={Object.assign({}, params, {page})} prefetch href={this.props.route + '?page='+ page}>
                <a className="pagination-link">{page}</a>
              </Link>
            </li>
          )}
        </ul>
        <style jsx>{`
        ul {
          list-style-type: none
        }
    `}</style>
      </nav>
    )
  }
}

Pagination.defaultProps = {
  resultsTotal: null,
  resultsPerPage: 10,
  numberOfPage: null,
  currentPage: 1,
  route: '/',
  url: ''
}

export default Pagination