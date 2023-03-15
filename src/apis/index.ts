import axios from 'axios';

axios.defaults.withCredentials = true;

const instance = axios.create({
	baseURL: `http://localhost:4000`,
	timeout: 5000,
	headers: {
		Accept: 'application/json',
	},
});

instance.interceptors.request.use(
	/** 요청시작 */
	function (config) {
		return config;
	},
	/** 요청 에러 */
	function (error) {
		console.log('error 다ㅏ다다다다다다', error);
		return Promise.reject(error);
	},
);

instance.interceptors.response.use(
	function (response) {
		/*
        http status가 200인 경우
        응답 성공 직전 호출됩니다. 
        .then() 으로 이어집니다.
    */ {
		}
		if (response.status === 200) {
			console.log('api 요청성공', response.status);
		}

		return response;
	},

	function (error) {
		/*
        http status가 200이 아닌 경우
        응답 에러 직전 호출됩니다.
        .catch() 으로 이어집니다.    
    */
		console.log('리퀘스트 요청 error', error);
		return Promise.reject(error);
	},
);

export default {
	//조회
	getReport(year, month) {
		return instance({
			url: `/api/report/daily/${year}/${month}`,
			method: 'get',
		});
	},
};
