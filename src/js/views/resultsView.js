import view from './view.js';
import proviewView from './proviewView.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends view {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found four your query! please try again :)';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => proviewView.render(result, false)).join('');
  }
}

export default new ResultsView();
