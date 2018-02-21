import { 
    addNewMobile, 
    getMobiles, 
    getMobileByCode, 
    updateMobile,
    deleteMobile,
 } from '../controllers/mobileController';

const routes = (app) => {
    app.route('/claro/mobile')
        .get(getMobiles)
        .post(addNewMobile);

    app.route('/claro/mobile/:code')
        .get(getMobileByCode);

    app.route('/claro/mobile/:mobileId')
        .put(updateMobile)
        .delete(deleteMobile);
}

export default routes