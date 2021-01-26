import data from './data/inkjetData';
import * as doman from './modules/doman';
import "../src/styles/styles.css"

const setTitle = () => {
  const title = doman.getElement('app-name');
  doman.setValue(title, data.name);
};

const getImpact = () => {
  const selectBox = doman.getElement('impacts');
  if (selectBox.value === 'climate_change') {
    const {
      production, distribution, use, end_of_life, // eslint-disable-line camelcase
    } = data.impacts.climate_change;
    doman.setData('production', production);
    doman.setData('distribution', distribution);
    doman.setData('use', use);
    doman.setData('end_of_life', end_of_life);
  } else if (selectBox.value === 'energy_use') {
    const {
      production, distribution, use, end_of_life, // eslint-disable-line camelcase
    } = data.impacts.energy_use;
    doman.setData('production', production);
    doman.setData('distribution', distribution);
    doman.setData('use', use);
    doman.setData('end_of_life', end_of_life);
  }
};

window.onload = () => {
  setTitle();
  getImpact();
  doman.setChangeEvent('#impacts', getImpact);
};
