import './Sidebar.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="container-fluid">
        <div className="row">
          <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
            <div>
              <a href="#" className="text-decoration-none text-white fs-5 d-flex align-itemcenter ms-3 mt-2">
                <i class="bi bi-clipboard-data"></i>
                <span className="ms-1 fs-4">Namsaf</span>
              </a>
              <hr className='text-secondary'/>
              <ul className="nav nav-pills flex-column">
                <li className="nav-item text-white fs-4 my-1">
                  <a href="#" className="nav-link text-white fs-5 d-sm-inline" aria-current="page">
                    <i class="bi bi-grid-1x2"></i>
                    <span className="ms-2">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item text-white fs-4 my-1">
                  <a href="#" className="nav-link text-white fs-5 d-sm-inline" aria-current="page">
                    <i class="bi bi-folder-symlink"></i>
                    <span className="ms-2">Portfolios</span>
                  </a>
                </li>
                <li className="nav-item text-white fs-4 my-1">
                  <a href="#" className="nav-link text-white fs-5 d-sm-inline" aria-current="page">
                    <i class="bi bi-list-task"></i>
                    <span className="ms-2">Assets</span>
                  </a>
                </li>
                <li className="nav-item text-white fs-4 my-1">
                  <a href="#" className="nav-link text-white fs-5 d-sm-inline" aria-current="page">
                    <i class="bi bi-file-earmark-diff"></i>
                    <span className="ms-2">Create Asset</span>
                  </a>
                </li>
                <li className="nav-item text-white fs-4 my-1">
                  <a href="#" className="nav-link text-white fs-5 d-sm-inline" aria-current="page">
                    <i class="bi bi-filetype-xls"></i>
                    <span className="ms-2">Import Batch</span>
                  </a>
                </li>
                <li className="nav-item text-white fs-4 my-1">
                  <a href="#" className="nav-link text-white fs-5 d-sm-inline" aria-current="page">
                    <i class="bi bi-bar-chart-line"></i>
                    <span className="ms-2">Metrics</span>
                  </a>
                </li>
                <li className="nav-item text-white fs-4 my-1">
                  <a href="#" className="nav-link text-white fs-5 d-sm-inline" aria-current="page">
                    <i class="bi bi-person-lines-fill"></i>
                    <span className="ms-2">Support</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Sidebar