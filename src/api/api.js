import axios from 'axios';
// import envconfig from '@/envconfig/envconfig';
// import { sortString } from '@/utils/funcUtils';

class API {

	static getInstance() {
		if(!this.instance) {
			this.instance = new API();
		}
		return this.instance;
	}
}

export default API.getInstance();