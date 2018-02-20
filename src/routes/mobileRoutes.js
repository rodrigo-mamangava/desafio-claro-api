import { addNewMobile, getMobiles, getMobileByCode } from '../controllers/mobileController';

const routes = (app) => {
    app.route('/claro/mobile')
        .get(getMobiles)
        .post(addNewMobile);

    app.route('/claro/mobile/:code')
        .get(getMobileByCode);

}

export default routes