import FormCreate from './components/FormCreate';
import FormEdit from './components/FormEdit';
import FormSearch from './components/FormSearch';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <FormCreate />
        </div>
        <div className="col-lg-4 col-md-6">
          <FormEdit />
        </div>
        <div className="col-lg-4 col-md-6">
          <FormSearch />
        </div>
      </div>
    </div>
    </>
  )
}

export default App