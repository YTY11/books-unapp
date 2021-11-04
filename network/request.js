let baseUrl = 'https://sou.jiaston.com'
let baseUrl2 = 'http://shuapi.jiaston.com'

//#ifdef H5
baseUrl = '/api'
baseUrl2 = '/bookApi'
//#endif
const TIME_OUT = 5000
export const request = (options = {}) => {
	// 在这里可以对请求头进行一些设置
	// 例如：
	// options.header = {
	// 		"Content-Type": "application/x-www-form-urlencoded"
	// }
	return new Promise((resolve, reject) => {
			
		uni.request({
			url: baseUrl + options.url || '',
			method: options.type || 'GET',
			data: options.data || {},
			sslVerify: false,
			header: options.header || {},
			timeout: TIME_OUT,
			success: (res) => {
				if(res.statusCode == 500){
					reject('网络异常 状态码:' +res.statusCode )
				}
				
				resolve(res.data);
			},
			fail: (err) => {
			
				reject(err)
			}
		})
	});
}


export const request2 = (options = {}) => {
	// 在这里可以对请求头进行一些设置
	// 例如：
	// options.header = {
	// 		"Content-Type": "application/x-www-form-urlencoded"
	// }
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl2 + options.url || '',
			method: options.type || 'GET',
			data: options.data || {},
			header: options.header || {},
			timeout: TIME_OUT,
			sslVerify: false,
			success: (res) => {
				if(res.statusCode == 500){
					reject('网络异常 状态码:' +res.statusCode )
				}
				resolve(res.data);
			},
			fail: (err) => {
				reject(err)
			}
		})
	});
}
