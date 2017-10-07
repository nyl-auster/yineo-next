import { Link } from '../routes'

class Pagination extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: props.currentPage
    }
  }

  getNumberOfPage () {
    return Math.ceil(this.props.totalOfResults / this.props.resultsByPage)
  }

  goToPage (pageNumber) {
    this.setState((prevState, props) => ({
      currentPage: pageNumber
    }))
    this.props.onGoToPage(pageNumber)
  }

  getPagesAsArray () {
    const numberOfPage = this.getNumberOfPage()
    let pages = []
    for (let i = 0; i <= numberOfPage; i++) {
      pages.push(i)
    }
    return pages;
  }

  render () {
    const pages = this.getPagesAsArray()
    console.log(this.props)
    return (
      <nav className="pagination" role="navigation" aria-label="pagination">
        <ul className="pagination-list">
          {pages.map(page =>
            <li key={page}>
              <Link prefetch href={this.props.route + '?page='+ page}>
                <a onClick={() => this.props.goToPage(page)} className="pagination-link" href="">{page + 1}</a>
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
  totalOfResults: null,
  resultsByPage: 10,
  numberOfPage: null,
  currentPage: 1,
  route: '/',
  params: {},
  // default onGoToPage event
  onGoToPage: (page) => alert('go to page ' + page)
}

export default Pagination