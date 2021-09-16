import {request} from '../network/request.js'

//搜索
export function seekBooks(name,page){
	
	return request({
		url:'/search.aspx',
		data:{
			key:name,
			page:page,
			siteid:'app2'
		}
		
	})
} 